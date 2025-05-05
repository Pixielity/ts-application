# React Integration

The React Integration module provides functionality for using the application in React components. It includes contexts, hooks, and providers for integrating with React.

## Components

### AppProvider

The `AppProvider` component provides the application instance to React components:

\`\`\`typescript
import { AppProvider } from '../src/react/providers/app-provider';
import { getApplication } from '../bootstrap/app';

function MyApp({ Component, pageProps }) {
  const app = getApplication();

  return (
    <AppProvider app={app}>
      <Component {...pageProps} />
    </AppProvider>
  );
}
\`\`\`

### ContainerProvider

The `ContainerProvider` component provides the container instance to React components:

\`\`\`typescript
import { ContainerProvider } from '../src/react/contexts/container-context';
import { Container } from '../src/container/container';

function MyApp({ Component, pageProps }) {
  const container = new Container();

  return (
    <ContainerProvider container={container}>
      <Component {...pageProps} />
    </ContainerProvider>
  );
}
\`\`\`

### Hooks

The React Integration module includes several hooks for accessing the application and its services:

#### useApp

The `useApp` hook provides access to the application instance:

\`\`\`typescript
import { useApp } from '../src/react/contexts/app-context';

function MyComponent() {
  const app = useApp();
  const config = app.config();

  return <div>App name: {config.get('app.name')}</div>;
}
\`\`\`

#### useService

The `useService` hook provides access to a service from the application container:

\`\`\`typescript
import { useService } from '../src/react/contexts/app-context';
import type { IConfigRepository } from '../src/config/repository';

function MyComponent() {
  const config = useService<ConfigRepository>('config');

  return <div>App name: {config.get('app.name')}</div>;
}
\`\`\`

#### useConfig

The `useConfig` hook provides access to a configuration value:

\`\`\`typescript
import { useConfig } from '../src/react/hooks/use-config';

function MyComponent() {
  const appName = useConfig<string>('app.name', 'Default App Name');
  const debug = useConfig<boolean>('app.debug', false);

  return (
    <div>
      <h1>{appName}</h1>
      {debug && <div>Debug mode is enabled</div>}
    </div>
  );
}
\`\`\`

#### useCache

The `useCache` hook provides access to the cache manager:

\`\`\`typescript
import { useCache } from '../src/react/hooks/use-cache';

function MyComponent() {
  const cache = useCache();

  // Use the cache
  React.useEffect(() => {
    async function fetchData() {
      const data = await cache.remember('my-key', 60, async () => {
        // Fetch data
        return { /* ... */ };
      });
    }
    
    fetchData();
  }, []);
  
  return <div>...</div>;
}
\`\`\`

#### useCachedData

The `useCachedData` hook provides a way to fetch and cache data:

\`\`\`typescript
import { useCachedData } from '../src/react/hooks/use-cache';

function MyComponent() {
  const { data, loading, error, refresh } = useCachedData<User[]>(
    'users',
    async () => {
      const response = await fetch('/api/users');
      return response.json();
    },
    300 // Cache for 5 minutes
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

#### useContainer and useResolve

The `useContainer` and `useResolve` hooks provide access to the container and its services:

\`\`\`typescript
import { useContainer, useResolve } from '../src/react/contexts/container-context';
import type { IConfigRepository } from '../src/config/repository';

function MyComponent() {
  const container = useContainer();
  const config = container.make<ConfigRepository>('config');

  // Or using useResolve
  const config2 = useResolve<ConfigRepository>('config');

  return <div>App name: {config.get('app.name')}</div>;
}
\`\`\`

### Higher-Order Components

The React Integration module includes higher-order components for injecting services into components:

#### withServices

The `withServices` HOC injects services into a component:

\`\`\`typescript
import { withServices } from '../src/react/contexts/container-context';
import type { IConfigRepository } from '../src/config/repository';
import type { IICache } from '../src/cache/cache-manager';

interface MyComponentProps {
  config: ConfigRepository;
  cache: ICache;
}

function MyComponent({ config, cache }: MyComponentProps) {
  return <div>App name: {config.get('app.name')}</div>;
}

export default withServices(MyComponent, {
  config: 'config',
  cache: 'cache'
});
