# Application

The Application module provides the core functionality for bootstrapping and managing the application. It includes the main Application class, service providers, and facades.

## Components

### Application

The `Application` class is the main entry point for the application. It bootstraps and manages the application, including registering service providers, booting the application, and providing access to services.

\`\`\`typescript
const app = Application.make();
app.registerCoreProviders();
app.boot();

// Get a service from the container
const config = app.make('config');

// Get the configuration repository
const config = app.config();

// Get the cache manager
const cache = app.cache();
\`\`\`

### Service Providers

Service providers are responsible for registering services with the application container and bootstrapping any dependencies.

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
app.register(new AppServiceProvider(app.getContainer()));
\`\`\`

### Facades

Facades provide static access to services registered in the application container.

\`\`\`typescript
// Get a configuration value
const appName = Config.get('app.name');

// Get a configuration value with a default
const debug = Config.get('app.debug', false);

// Set a configuration value
Config.set('app.name', 'My App');
\`\`\`

## Application Bootstrapping

The application is bootstrapped using the `getApplication` function, which creates a singleton instance of the application, registers core service providers, and boots the application.

\`\`\`typescript
const app = getApplication();
\`\`\`

## React Integration

The application includes React integration for using the application in React components:

\`\`\`typescript
function MyApp({ Component, pageProps }) {
  const app = getApplication();

  return (
    <AppProvider app={app}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

function MyComponent() {
  const app = useApp();
  const config = app.config();

  return <div>App name: {config.get('app.name')}</div>;
}
\`\`\`

## Next.js Integration

The application includes Next.js integration for using the application in Next.js applications:

\`\`\`typescript
import { NextJsPlugin } from '../src/plugins/nextjs';

const app = getApplication();
const nextjs = new NextJsPlugin(app);

// Use the Next.js plugin to wrap the App component
export default nextjs.withApp(MyApp);

// Use the Next.js plugin to create a getServerSideProps function
export const getServerSideProps = nextjs.withGetServerSideProps(
  async (context, app) => {
    const config = app.config();
    return {
      props: {
        appName: config.get('app.name'),
      },
    };
  }
);
