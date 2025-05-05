# Container

The Container module provides dependency injection capabilities for the application. It includes the main Container class, service providers, and contextual binding.

## Components

### Container

The `Container` class is the main entry point for dependency injection. It provides methods for binding, resolving, and managing dependencies.

\`\`\`typescript
const container = Container.make();

// Bind a concrete implementation
container.bind('config', () => new ConfigRepository());

// Bind a singleton
container.singleton('cache', () => new CacheManager(container));

// Resolve an instance
const config = container.make<ConfigRepository>('config');
\`\`\`

### Service Providers

Service providers are responsible for registering services with the container and bootstrapping any dependencies.

\`\`\`typescript
class AppServiceProvider extends ServiceProvider {
  register(): void {
    // Register application services
  }

  boot(): void {
    // Bootstrap application services
  }
}

// Register the service provider
container.register(new AppServiceProvider(container));
\`\`\`

### Contextual Binding

Contextual binding allows you to bind different implementations of a dependency based on the context in which it is being resolved.

\`\`\`typescript
// Bind the default implementation
container.bind('filesystem', () => new Filesystem());

// Define contextual binding for PhotoController
container.when('photoController').needs('filesystem').give(new LocalFilesystem());

// Define contextual binding for VideoController
container.when('videoController').needs('filesystem').give(new CloudFilesystem());
\`\`\`

## Container Middleware

The container supports middleware for intercepting and modifying the resolution process:

\`\`\`typescript
// Add logger middleware
container.applyMiddleware(loggerMiddleware());

// Add cache middleware
container.applyMiddleware(cacheMiddleware());

// Add metrics middleware
container.applyMiddleware(metricsMiddleware());
\`\`\`

## Container Facades

Facades provide static access to services registered in the container:

\`\`\`typescript
// Get a service from the container
const config = App.make('config');

// Get the configuration repository
const config = Config.get('app.name');
\`\`\`

## Container in React

The container can be used in React components using the provided hooks and components:

\`\`\`typescript
function MyComponent() {
  const container = useContainer();
  const config = container.make<ConfigRepository>('config');

  return <div>App name: {config.get('app.name')}</div>;
}

// Or using the useResolve hook
function MyComponent() {
  const config = useResolve<ConfigRepository>('config');

  return <div>App name: {config.get('app.name')}</div>;
}

// Or using the withServices HOC
interface MyComponentProps {
  config: ConfigRepository;
  cache: CacheManager;
}

function MyComponent({ config, cache }: MyComponentProps) {
  return <div>App name: {config.get('app.name')}</div>;
}

export default withServices(MyComponent, {
  config: 'config',
  cache: 'cache'
});
