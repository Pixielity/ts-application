# Configuration System

The configuration system provides a flexible way to manage application configuration values. It includes a repository for storing and retrieving configuration values, loaders for loading configuration from different sources, and decorators for injecting configuration values into class properties.

## Components

### ConfigRepository

The `ConfigRepository` class is the main entry point for accessing configuration values. It provides methods for getting and setting configuration values, checking if a configuration value exists, and merging configuration items.

\`\`\`typescript
const config = ConfigRepository.make({
  items: {
    app: {
      name: 'My App',
      debug: true
    }
  },
  validate: true,
  schemas: {
    app: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        debug: { type: 'boolean' }
      }
    }
  }
});

const appName = config.getString('app.name'); // 'My App'
const debug = config.getBoolean('app.debug'); // true
\`\`\`

### ConfigCache

The `ConfigCache` class provides caching functionality for configuration values. It helps improve performance by caching frequently accessed configuration values.

\`\`\`typescript
const cache = ConfigCache.make(true, 1000, 60000);
cache.set('app.name', 'My App');
const appName = cache.get('app.name'); // 'My App'
\`\`\`

### ConfigValidator

The `ConfigValidator` class provides validation functionality for configuration values. It helps ensure that configuration values meet certain criteria.

\`\`\`typescript
const validator = ConfigValidator.make({
  app: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      debug: { type: 'boolean' }
    }
  }
});

validator.validate('app', { name: 'My App', debug: true }); // true
\`\`\`

### ConfigLoaders

The configuration system includes loaders for loading configuration from different sources:

- `JsonConfigLoader`: Loads configuration from JSON files
- `ModuleConfigLoader`: Loads configuration from JavaScript/TypeScript modules

\`\`\`typescript
const jsonLoader = JsonConfigLoader.make();
const config = await jsonLoader.load('config.json');

const moduleLoader = ModuleConfigLoader.make();
const config = await moduleLoader.load('config.js');
\`\`\`

### Config Decorators

The configuration system includes decorators for injecting configuration values into class properties:

- `@Config`: Injects a configuration value from the configuration repository
- `@EnvConfig`: Injects a configuration value from environment variables

\`\`\`typescript
class AppService {
  @Config({ key: 'app.name', defaultValue: 'My App' })
  private appName: string;

  @EnvConfig({ env: 'APP_DEBUG', defaultValue: false })
  private debug: boolean;

  public getAppName(): string {
    return this.appName;
  }

  public isDebug(): boolean {
    return this.debug;
  }
}
\`\`\`

## Environment Detection

The configuration system includes utilities for detecting the current environment:

\`\`\`typescript
const environment = detectEnvironment();
if (isNode()) {
  // Node.js-specific code
} else if (isBrowser()) {
  // Browser-specific code
} else if (isNextJs()) {
  // Next.js-specific code
}
\`\`\`

## Configuration Service Provider

The `ConfigServiceProvider` class registers the configuration repository with the application container:

\`\`\`typescript
const app = Application.make();
app.register(new ConfigServiceProvider(app.getContainer()));
\`\`\`

## Configuration Facade

The `Config` facade provides static access to the configuration repository:

\`\`\`typescript
const appName = Config.get('app.name');
const debug = Config.get('app.debug', false);
Config.set('app.name', 'New App Name');
