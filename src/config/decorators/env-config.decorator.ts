import { createPropertyDecorator } from '../../decorators/abstract-decorator'
import { IConfigOptions } from '@pixielity/ts-types'

/**
 * Get an environment variable and inject it into a class property.
 *
 * @param options - The environment configuration options
 * @returns A property decorator
 *
 * @example
 * ```typescript
 * class AppService {
 *   @EnvConfig({ env: 'APP_NAME', defaultValue: 'My App' })
 *   private appName: string;
 *
 *   @EnvConfig({ env: 'APP_DEBUG' })
 *   private debug: boolean;
 *
 *   public getAppName(): string {
 *     return this.appName;
 *   }
 * }
 * ```
 */
export function EnvConfig(options: IConfigOptions) {
  return createPropertyDecorator((target: any, propertyKey: string | symbol) => {
    // Define a getter for the property
    Object.defineProperty(target, propertyKey, {
      get: () => {
        // Get the environment variable
        const value = options.env ? process.env[options.env] : undefined

        if (value === undefined) {
          return options.defaultValue
        }

        // Parse the value
        let parsedValue: any

        if (value.toLowerCase() === 'true') parsedValue = true
        else if (value.toLowerCase() === 'false') parsedValue = false
        else if (/^-?\d+$/.test(value)) parsedValue = Number.parseInt(value, 10)
        else if (/^-?\d+\.\d+$/.test(value)) parsedValue = Number.parseFloat(value)
        else parsedValue = value

        // Apply transform function if provided
        if (options.transform) {
          parsedValue = options.transform(parsedValue)
        }

        return parsedValue
      },
      enumerable: true,
      configurable: true,
    })
  })
}
