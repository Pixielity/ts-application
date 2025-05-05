# Plugins

The Plugins module provides functionality for extending the application with plugins. It includes the NextJsPlugin class and other plugin-related functionality.

## Components

### NextJsPlugin

The `NextJsPlugin` class provides integration with Next.js. It includes methods for initializing the application in Next.js, wrapping Next.js components, and creating Next.js-specific helpers.

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

// Use the Next.js plugin to create a getStaticProps function
export const getStaticProps = nextjs.withGetStaticProps(
  async (context, app) => {
    const config = app.config();
    return {
      props: {
        appName: config.get('app.name'),
      },
      revalidate: 60,
    };
  }
);

// Use the Next.js plugin to create an API route handler
export default nextjs.withApiRoute(
  async (req, res, app) => {
    const config = app.config();
    res.status(200).json({
      appName: config.get('app.name'),
    });
  }
);
\`\`\`

### Plugin Options

The `NextJsPlugin` class supports various options for customizing its behavior:

\`\`\`typescript
const nextjs = new NextJsPlugin(app, {
  autoRegister: true,
  initializeInGetInitialProps: true,
  initializeInGetServerSideProps: true,
  initializeInGetStaticProps: false,
  initializeInApiRoutes: true,
  cache: {
    enabled: true,
    store: 'memory',
    ttl: 60,
  },
  nextConfig: {
    // Next.js configuration options
  },
});
\`\`\`

### Plugin Factory

The `nextjs` factory provides a convenient way to create a Next.js plugin:

\`\`\`typescript
import { nextjs } from '../src/plugins/nextjs';

const app = getApplication();
const plugin = nextjs.create(app);
\`\`\`

## Usage in Next.js

The NextJsPlugin can be used in Next.js applications:

\`\`\`typescript
// pages/_app.tsx
import { AppProps } from 'next/app';
import { getApplication } from '../bootstrap/app';
import { NextJsPlugin } from '../src/plugins/nextjs';

const app = getApplication();
const nextjs = new NextJsPlugin(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default nextjs.withApp(MyApp);

// pages/index.tsx
import { getApplication } from '../bootstrap/app';
import { NextJsPlugin } from '../src/plugins/nextjs';

const app = getApplication();
const nextjs = new NextJsPlugin(app);

export default function Home({ appName }) {
  return <h1>{appName}</h1>;
}

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
