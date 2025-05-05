# Routing Module

The Routing module provides a NestJS-like routing system for Next.js applications. It includes decorators for defining controllers, routes, middleware, guards, and parameter extraction, as well as a registry for managing routes and generating route maps.

## Features

- NestJS-like decorators for defining controllers and routes
- Support for all HTTP methods (GET, POST, PUT, DELETE, PATCH, etc.)
- Middleware and guard support for both controllers and routes
- Parameter extraction from route parameters, query parameters, and request body
- Automatic route registration and mapping to Next.js API routes

## Components

### Decorators

The Routing module includes the following decorators:

#### Controller Decorator

Defines a controller with a route prefix.

\`\`\`typescript
@Controller('users')
export class UsersController {
  // Controller methods
}
\`\`\`

#### HTTP Method Decorators

Defines routes for different HTTP methods.

\`\`\`typescript
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
  
  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id, name: 'John' };
  }
  
  @Post()
  createUser(@Body() userData: any) {
    return { id: 1, ...userData };
  }
  
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userData: any) {
    return { id, ...userData };
  }
  
  @Patch(':id')
  partialUpdateUser(@Param('id') id: string, @Body() userData: any) {
    return { id, ...userData };
  }
  
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return { success: true };
  }
}
\`\`\`

#### Middleware and Guard Decorators

Applies middleware and guards to controllers and routes.

\`\`\`typescript
@Controller('users')
@Middleware(authMiddleware)
@UseGuard(AuthGuard)
export class UsersController {
  @Get(':id')
  @Middleware(loggingMiddleware)
  @UseGuard(RoleGuard)
  getUser(@Param('id') id: string) {
    return { id, name: 'John' };
  }
}
\`\`\`

#### Parameter Decorators

Extracts parameters from route parameters, query parameters, and request body.

\`\`\`typescript
@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id, name: 'John' };
  }
  
  @Get()
  getUsers(@Query('page') page: number, @Query('limit') limit: number) {
    return [{ id: 1, name: 'John' }];
  }
  
  @Post()
  createUser(@Body() userData: any) {
    return { id: 1, ...userData };
  }
  
  @Post('bulk')
  createUsers(@Body('users') users: any[]) {
    return users.map(user => ({ id: Math.random(), ...user }));
  }
}
\`\`\`

### Registry

The `RouterRegistry` class is responsible for managing controllers and routes, and creating route maps for Next.js API routes.

\`\`\`typescript
const registry = new RouterRegistry();

// Register controllers
registry.registerController(UsersController);
registry.registerController(PostsController);

// Get all registered controllers
const controllers = registry.getControllers();

// Create a route map for Next.js API routes
const routeMap = registry.createRouteMap();
\`\`\`

### Service Provider

The `RoutingServiceProvider` class registers the router registry with the application container.

\`\`\`typescript
const app = Application.make();
app.register(new RoutingServiceProvider(app.getContainer()));
\`\`\`

## Usage in Next.js

### Setup

1. Register the routing service provider:

\`\`\`typescript
// bootstrap/app.ts
import { Application } from '../src/application';
import { RoutingServiceProvider } from '../src/routing/providers/routing-service-provider';

const app = Application.make();
app.register(new RoutingServiceProvider(app.getContainer()));

export default app;
\`\`\`

2. Create a controller:

\`\`\`typescript
// controllers/users-controller.ts
import { Controller, Get, Post, Param, Body } from '../src/routing/decorators';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
  
  @Get(':id')
  getUser(@Param('id') id: string) {
    return { id, name: 'John' };
  }
  
  @Post()
  createUser(@Body() userData: any) {
    return { id: 1, ...userData };
  }
}
\`\`\`

3. Create a Next.js API handler:

\`\`\`typescript
// pages/api/[[...route]].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getApplication } from '../../bootstrap/app';
import { RouterRegistry } from '../../src/routing/registry/router-registry';
import { UsersController } from '../../controllers/users-controller';

// Register controllers
const app = getApplication();
const routerRegistry = app.make<RouterRegistry>('router.registry');
routerRegistry.registerController(UsersController);

// Create a route map
const routeMap = routerRegistry.createRouteMap();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { route } = req.query;
  const path = Array.isArray(route) ? `/${route.join('/')}` : route ? `/${route}` : '/';
  const method = req.method || 'GET';
  
  // Find the route handler
  const entry = routeMap[path];
  
  if (!entry) {
    return res.status(404).json({ error: 'Not found' });
  }
  
  const { controller, route: routeDef } = entry;
  
  // Check if the method is allowed
  if (routeDef.method !== method) {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Create controller instance
    const controllerInstance = new controller();
    
    // Call the route handler
    const result = await controllerInstance[routeDef.handlerName]();
    
    // Send the response
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
\`\`\`

## Middleware

Middleware functions are executed before route handlers and can be used for authentication, logging, rate limiting, etc.

\`\`\`typescript
// middleware/auth-middleware.ts
import { NextApiRequest, NextApiResponse } from 'next';

export function authMiddleware(req: NextApiRequest, res: NextApiResponse, next: () => Promise<void>) {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Authenticate the user
  
  // Call the next middleware or route handler
  return next();
}
\`\`\`

## Guards

Guards determine whether a route handler should be executed.

\`\`\`typescript
// guards/auth-guard.ts
import { NextApiRequest, NextApiResponse } from 'next';

export class AuthGuard {
  canActivate(req: NextApiRequest, res: NextApiResponse): boolean {
    const token = req.headers.authorization;
    
    if (!token) {
      res.status(401).json({ error: 'Unauthorized' });
      return false;
    }
    
    return true;
  }
}
\`\`\`

## Configuration

The router registry can be configured with options:

\`\`\`typescript
// config/routing.ts
export default {
  basePath: '/api',
  autoRegister: true,
  globalMiddleware: [logMiddleware],
  globalGuards: [RateLimitGuard]
}
