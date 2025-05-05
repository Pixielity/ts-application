# Publish

The Publish module provides functionality for publishing assets, views, and translations. It includes the Publisher class and the PublishServiceProvider.

## Components

### Publisher

The `Publisher` class is the main entry point for publishing assets, views, and translations. It provides methods for publishing files and directories.

\`\`\`typescript
const publisher = Publisher.make();

// Publish assets
await publisher.publish('assets', '/path/to/source', '/path/to/target');

// Publish views
await publisher.publish('views', '/path/to/source', '/path/to/target');

// Publish translations
await publisher.publish('translations', '/path/to/source', '/path/to/target');

// Publish configuration
await publisher.publish('config', '/path/to/source', '/path/to/target');
\`\`\`

### PublishServiceProvider

The `PublishServiceProvider` class registers the publisher with the application container.

\`\`\`typescript
const app = Application.make();
app.register(new PublishServiceProvider(app.getContainer()));
\`\`\`

## Publishing Options

The `Publisher` class supports options for customizing its behavior:

\`\`\`typescript
// Force overwrite existing files
await publisher.publish('assets', '/path/to/source', '/path/to/target', { force: true });
\`\`\`

## Custom Publishers

The `Publisher` class allows you to register custom publishers:

\`\`\`typescript
publisher.register('custom', async (source, target, options) => {
  // Custom publishing logic
  return true;
});

// Use the custom publisher
await publisher.publish('custom', '/path/to/source', '/path/to/target');
\`\`\`

## Usage in Application

The Publisher can be used in the application:

\`\`\`typescript
const app = getApplication();
const publisher = app.make<Publisher>('publisher');

// Publish assets
await publisher.publish('assets', '/path/to/source', '/path/to/target');
