# Views

The Views module provides functionality for rendering views in the application. It includes the ViewFactory class, view engines, and the ViewServiceProvider.

## Components

### ViewFactory

The `ViewFactory` class is the main entry point for rendering views. It provides methods for rendering views, checking if a view exists, and managing view engines.

\`\`\`typescript
const viewFactory = ViewFactory.make(['/path/to/views']);

// Register a view engine
viewFactory.registerEngine('react', new ReactViewEngine());

// Render a view
const html = await viewFactory.render('home', { title: 'Home' });

// Check if a view exists
const exists = await viewFactory.exists('home');

// Share data with all views
viewFactory.share('user', { name: 'John' });
\`\`\`

### ReactViewEngine

The `ReactViewEngine` class provides functionality for rendering React components as views.

\`\`\`typescript
const reactViewEngine = ReactViewEngine.make({
  Home: HomeComponent,
  About: AboutComponent,
});

// Register a component
reactViewEngine.register('Contact', ContactComponent);

// Render a component
const html = await reactViewEngine.render('Home', { title: 'Home' });
\`\`\`

### ViewServiceProvider

The `ViewServiceProvider` class registers the view factory with the application container and configures view engines.

\`\`\`typescript
const app = Application.make();
app.register(new ViewServiceProvider(app.getContainer()));
\`\`\`

## Usage in Next.js

The Views module can be used in Next.js applications:

\`\`\`typescript
import { getApplication } from '../bootstrap/app';

export default function Home({ title }) {
  return <h1>{title}</h1>;
}

export async function getServerSideProps() {
  const app = getApplication();
  const viewFactory = app.make<ViewFactory>('view');
  
  // Register the Home component
  viewFactory.getEngine('react').register('Home', Home);
  
  // Render the Home component
  const html = await viewFactory.render('Home', { title: 'Home' });
  
  return {
    props: {
      title: 'Home',
      html,
    },
  };
}
\`\`\`

## Sharing Data with Views

The view factory allows you to share data with all views:

\`\`\`typescript
// Share data with all views
viewFactory.share('user', { name: 'John' });
viewFactory.share({
  app: { name: 'My App' },
  version: '1.0.0',
});

// Render a view with shared data
const html = await viewFactory.render('home', { title: 'Home' });
// The view will have access to user, app, and version
\`\`\`

## View Paths

The view factory supports multiple view paths:

\`\`\`typescript
const viewFactory = ViewFactory.make([
  '/path/to/views',
  '/path/to/vendor/views',
]);

// Add a view path
viewFactory.addPath('/path/to/custom/views');

// Get all view paths
const paths = viewFactory.getPaths();
