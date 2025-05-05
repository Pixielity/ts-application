# Routing Middlewares

The Routing module includes a set of common middlewares that can be used to enhance your API routes. These middlewares can be applied at the controller level or at the route level.

## Available Middlewares

### CORS Middleware

The CORS middleware adds Cross-Origin Resource Sharing headers to your API responses.

\`\`\`typescript
import { Controller, Get, Middleware } from '../routing/decorators';
import { cors } from '../routing/middlewares';

@Controller('users')
@Middleware(cors({
  origin: ['https://example.com', 'https://api.example.com'],
  methods: ['GET', 'POST'],
  credentials: true
}))
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
}
\`\`\`

### Rate Limiting Middleware

The rate limiting middleware restricts the number of requests a client can make within a time window.

\`\`\`typescript
import { Controller, Get, Middleware } from '../routing/decorators';
import { rateLimit } from '../routing/middlewares';

@Controller('users')
@Middleware(rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100 // 100 requests per minute
}))
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
}
\`\`\`

### Logging Middleware

The logging middleware logs information about incoming requests and outgoing responses.

\`\`\`typescript
import { Controller, Get, Middleware } from '../routing/decorators';
import { logging } from '../routing/middlewares';

@Controller('users')
@Middleware(logging({
  level: 'debug',
  logBody: true,
  logHeaders: true
}))
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
}
\`\`\`

### Authentication Middleware

The authentication middleware verifies authentication tokens and adds the authenticated user to the request.

\`\`\`typescript
import { Controller, Get, Middleware } from '../routing/decorators';
import { auth } from '../routing/middlewares';

@Controller('users')
@Middleware(auth({
  verify: async (token) => {
    // Verify the token
    return { id: 1, name: 'John' };
  }
}))
export class UsersController {
  @Get()
  getUsers(req) {
    // Access the authenticated user
    const user = req.user;
    return [{ id: 1, name: 'John' }];
  }
}
\`\`\`

### Body Parser Middleware

The body parser middleware parses the request body based on the content type.

\`\`\`typescript
import { Controller, Post, Middleware } from '../routing/decorators';
import { bodyParser } from '../routing/middlewares';

@Controller('users')
@Middleware(bodyParser({
  limit: 5 * 1024 * 1024, // 5MB
  json: true,
  urlencoded: true,
  text: true
}))
export class UsersController {
  @Post()
  createUser(req) {
    // Access the parsed body
    const userData = req.body;
    return { id: 1, ...userData };
  }
}
\`\`\`

### Error Handler Middleware

The error handler middleware catches errors thrown by route handlers and sends appropriate responses.

\`\`\`typescript
import { Controller, Get, Middleware } from '../routing/decorators';
import { errorHandler } from '../routing/middlewares';

@Controller('users')
@Middleware(errorHandler({
  logErrors: true,
  includeStackTrace: process.env.NODE_ENV !== 'production',
  formatError: (error, statusCode) => ({
    error: {
      message: error.message,
      statusCode
    }
  })
}))
export class UsersController {
  @Get()
  getUsers() {
    throw new Error('Something went wrong');
  }
}
\`\`\`

## Combining Middlewares

You can combine multiple middlewares by using an array:

\`\`\`typescript
import { Controller, Get, Middleware } from '../routing/decorators';
import { cors, rateLimit, logging, errorHandler } from '../routing/middlewares';

@Controller('users')
@Middleware([
  cors(),
  rateLimit({ max: 100, windowMs: 60 * 1000 }),
  logging(),
  errorHandler()
])
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
}
\`\`\`

## Route-Level Middlewares

You can also apply middlewares to specific routes:

\`\`\`typescript
import { Controller, Get, Post, Middleware } from '../routing/decorators';
import { auth, rateLimit } from '../routing/middlewares';

@Controller('users')
export class UsersController {
  @Get()
  @Middleware(rateLimit({ max: 100, windowMs: 60 * 1000 }))
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
  
  @Post()
  @Middleware(auth({
    verify: async (token) => {
      // Verify the token
      return { id: 1, name: 'John' };
    }
  }))
  createUser(req) {
    return { id: 1, name: 'John' };
  }
}
\`\`\`

## Custom Middlewares

You can create your own custom middlewares:

\`\`\`typescript
import type { INextApiRequest, NextApiResponse } from 'next';
import type { IMiddleware } from '../routing/interfaces/middleware.interface';

export function customMiddleware(): Middleware {
  return async (req: NextApiRequest, res: NextApiResponse, next: () => Promise<void>) => {
    // Do something before the route handler
    console.log('Custom middleware executed');
    
    // Continue to the next middleware or route handler
    await next();
    
    // Do something after the route handler
    console.log('Route handler completed');
  };
}
\`\`\`

Then use it like any other middleware:

\`\`\`typescript
import { Controller, Get, Middleware } from '../routing/decorators';
import { customMiddleware } from './custom-middleware';

@Controller('users')
@Middleware(customMiddleware())
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John' }];
  }
}
\`\`\`
