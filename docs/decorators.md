# Decorators

The Decorators module provides utilities for creating and using decorators in the application. It includes abstract decorator classes, validation decorators, and utility decorators.

## Components

### AbstractDecorator

The `AbstractDecorator` class provides a base for creating custom decorators. It includes methods for creating class, method, property, and parameter decorators.

\`\`\`typescript
class MyDecorator extends AbstractDecorator {
  protected decorateClass(target: any): any {
    console.log(`Class ${target.name} was decorated`);
    return target;
  }
}

const decorator = new MyDecorator();
const classDecorator = decorator.createClassDecorator();

@classDecorator
class MyClass {
  // ...
}
\`\`\`

### AbstractValidationDecorator

The `AbstractValidationDecorator` class provides a base for creating custom validation decorators. It includes methods for creating validation decorators with custom validation functions.

\`\`\`typescript
class MyValidationDecorator extends AbstractValidationDecorator {
  public static createIsLongerThan(property: string, validationOptions?: ValidationOptions): PropertyDecorator {
    return this.createValidationDecorator(
      "isLongerThan",
      [property],
      (value: any, args: ValidationArguments) => {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];
        return typeof value === "string" && typeof relatedValue === "string" && value.length > relatedValue.length;
      },
      `Value must be longer than ${property}`,
      validationOptions,
    );
  }
}

class User {
  @MyValidationDecorator.createIsLongerThan('firstName')
  lastName: string;

  firstName: string;
}
\`\`\`

### Utility Decorators

The module includes several utility decorators:

#### @Singleton

The `@Singleton` decorator ensures that only one instance of a class is created:

\`\`\`typescript
@injectable()
@Singleton()
class Database {
  constructor() {
    console.log('Database instance created');
  }

  query(sql: string): Promise<any[]> {
    // ...
  }
}
\`\`\`

#### @LogClass and @LogMethod

The `@LogClass` and `@LogMethod` decorators add logging functionality to classes and methods:

\`\`\`typescript
@injectable()
@LogClass()
class UserService {
  @LogMethod()
  getUsers(): User[] {
    // ...
  }
}
\`\`\`

### Config Decorators

The module includes decorators for injecting configuration values into class properties:

#### @Config

The `@Config` decorator injects a configuration value from the configuration repository:

\`\`\`typescript
class AppService {
  @Config({ key: 'app.name', defaultValue: 'My App' })
  private appName: string;

  public getAppName(): string {
    return this.appName;
  }
}
\`\`\`

#### @EnvConfig

The `@EnvConfig` decorator injects a configuration value from environment variables:

\`\`\`typescript
class AppService {
  @EnvConfig({ env: 'APP_NAME', defaultValue: 'My App' })
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

### Validation Decorators

The module includes decorators for validating class properties:

\`\`\`typescript
class User {
  @IsLongerThan('firstName', { message: 'Last name must be longer than first name' })
  lastName: string;

  firstName: string;
}
