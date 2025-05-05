# Configuration Validator

The Configuration Validator provides a way to validate configuration values against schemas. It includes support for both manual schema definition and automatic schema detection from `$schema` properties in configuration objects.

## Features

- Validate configuration values against predefined schemas
- Auto-detect schemas from `$schema` properties in configuration objects
- Detailed validation error messages
- Support for various validation rules (type, required, enum, min/max, etc.)

## Usage

### Basic Usage

\`\`\`typescript
// Create a validator with predefined schemas
const validator = ConfigValidator.make({
  app: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      debug: { type: 'boolean' }
    }
  }
});

// Validate a configuration value
validator.validate('app', { name: 'My App', debug: true }); // true

// Invalid value will throw a ConfigValidationError
try {
  validator.validate('app', { name: 123, debug: 'not-a-boolean' });
} catch (error) {
  console.error(error.errors);
  // [
  //   "app.name: Expected type 'string', got 'number'",
  //   "app.debug: Expected type 'boolean', got 'string'"
  // ]
}
\`\`\`

### Auto-Detecting Schemas

The validator can automatically detect and use schemas defined in the configuration objects themselves:

\`\`\`typescript
// Enable auto-detection of schemas (enabled by default)
const validator = ConfigValidator.make({}, true);

// Configuration with embedded schema
const config = {
  $schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      version: { type: 'string' }
    }
  },
  name: 'My App',
  version: '1.0.0'
};

// Validate using the embedded schema
validator.validate('config', config); // true
\`\`\`

### Schema References

You can also use schema references:

\`\`\`typescript
// Define schemas
const validator = ConfigValidator.make({
  appSchema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      version: { type: 'string' }
    }
  }
});

// Configuration with schema reference
const config = {
  $schema: 'appSchema',
  name: 'My App',
  version: '1.0.0'
};

// Validate using the referenced schema
validator.validate('config', config); // true
\`\`\`

## API

### ConfigValidator

#### Constructor

\`\`\`typescript
constructor(schemas: Record<string, ConfigSchema> = {}, autoDetectSchemas: boolean = true)
\`\`\`

- `schemas`: Predefined schemas for validation
- `autoDetectSchemas`: Whether to auto-detect schemas from `$schema` properties

#### Methods

- `setSchemas(schemas: Record<string, ConfigSchema>)`: Set the configuration schemas
- `addSchema(key: string, schema: ConfigSchema)`: Add a configuration schema
- `setAutoDetectSchemas(enable: boolean)`: Enable or disable schema auto-detection
- `validate(key: string, value: any)`: Validate a configuration value against its schema

### ConfigValidationError

Error thrown when validation fails.

#### Properties

- `errors`: Array of validation error messages

## Schema Format

Schemas follow a format similar to JSON Schema:

\`\`\`typescript
interface ConfigSchema {
  type?: "string" | "number" | "integer" | "boolean" | "array" | "object" | "null";
  required?: boolean;
  enum?: any[];
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  properties?: Record<string, ConfigSchema>;
  items?: ConfigSchema;
  [key: string]: any;
}
\`\`\`

## Integration with ConfigRepository

The ConfigValidator is integrated with the ConfigRepository:

\`\`\`typescript
const config = ConfigRepository.make({
  items: {
    app: {
      name: 'My App',
      debug: true
    }
  },
  validate: true, // Enable validation
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

// This will validate against the schema
const appName = config.getString('app.name');
\`\`\`
