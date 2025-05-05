# Routes Table

The Routes Table utility provides a way to display all registered routes in a formatted table, similar to NestJS's route table when running the application.

## Usage

### Basic Usage

\`\`\`typescript
import { getApplication } from '../bootstrap/app';
import { RouterRegistry } from '../routing/registry/router-registry';
import { printRoutes } from '../routing/utils/routes-table';

// Get the router registry
const app = getApplication();
const routerRegistry = app.make<RouterRegistry>('router.registry');

// Print the routes table
printRoutes(routerRegistry);
\`\`\`

This will output a table like:

\`\`\`
+----------+------------------+----------------+-----------+
| Method   | Path             | Controller     | Handler   |
+----------+------------------+----------------+-----------+
| GET      | /api/users       | UsersController| getUsers  |
| GET      | /api/users/:id   | UsersController| getUser   |
| POST     | /api/users       | UsersController| createUser|
+----------+------------------+----------------+-----------+
\`\`\`

### Custom Options

You can customize the routes table with options:

\`\`\`typescript
import { getApplication } from '../bootstrap/app';
import { RouterRegistry } from '../routing/registry/router-registry';
import { RoutesTable } from '../routing/utils/routes-table';

// Get the router registry
const app = getApplication();
const routerRegistry = app.make<RouterRegistry>('router.registry');

// Create a routes table with custom options
const routesTable = new RoutesTable(routerRegistry, {
  includeControllerMiddleware: true,
  includeRouteMiddleware: true,
  includeGuards: true,
  includeParams: true,
  colors: true,
  includeBasePath: true
});

// Generate the table
const table = routesTable.generate();
console.log(table);
\`\`\`

### Options

The `RoutesTable` constructor accepts the following options:

- `includeControllerMiddleware` (default: `true`): Whether to include controller middleware in the table.
- `includeRouteMiddleware` (default: `true`): Whether to include route middleware in the table.
- `includeGuards` (default: `true`): Whether to include guards in the table.
- `includeParams` (default: `true`): Whether to include parameters in the table.
- `colors` (default: `true`): Whether to use colors in the table.
- `includeBasePath` (default: `true`): Whether to include the base path in the table.

### Programmatic Usage

You can also use the `RoutesTable` class programmatically:

\`\`\`typescript
import { getApplication } from '../bootstrap/app';
import { RouterRegistry } from '../routing/registry/router-registry';
import { RoutesTable } from '../routing/utils/routes-table';

// Get the router registry
const app = getApplication();
const routerRegistry = app.make<RouterRegistry>('router.registry');

// Create a routes table
const routesTable = new RoutesTable(routerRegistry);

// Generate the table
const table = routesTable.generate();

// Do something with the table
saveToFile(table);
\`\`\`

## Integration with Application Startup

You can integrate the routes table with your application startup code to display the routes when the application starts:

\`\`\`typescript
import { getApplication } from '../bootstrap/app';
import { RouterRegistry } from '../routing/registry/router-registry';
import { printRoutes } from '../routing/utils/routes-table';

// Bootstrap the application
async function bootstrap() {
  // Get the application
  const app = getApplication();
  
  // Register controllers
  // ...
  
  // Print the routes table
  const routerRegistry = app.make<RouterRegistry>('router.registry');
  printRoutes(routerRegistry);
  
  console.log('Application started');
}

// Start the application
bootstrap().catch(console.error);
\`\`\`

## Custom Formatting

If you need to customize the formatting of the routes table, you can extend the `RoutesTable` class:

\`\`\`typescript
import { RouterRegistry } from '../routing/registry/router-registry';
import { RoutesTable } from '../routing/utils/routes-table';

class CustomRoutesTable extends RoutesTable {
  // Override the generate method
  public generate(): string {
    // Get the controllers
    const controllers = this.registry.getControllers();
    
    // Generate a custom table
    let table = 'Custom Routes Table\n\n';
    
    for (const controller of controllers) {
      table += `Controller: ${controller.controller.name}\n`;
      table += `Prefix: ${controller.prefix}\n\n`;
      
      for (const route of controller.routes) {
        table += `  ${route.method} ${route.path} -> ${String(route.handlerName)}\n`;
      }
      
      table += '\n';
    }
    
    return table;
  }
}

// Use the custom routes table
const customRoutesTable = new CustomRoutesTable(routerRegistry);
console.log(customRoutesTable.generate());
\`\`\`
