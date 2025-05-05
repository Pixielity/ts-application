import { createPropertyDecorator } from '../../decorators/abstract-decorator'
import { getApplication } from '../../bootstrap/app'
import type { IConfigOptions } from '@pixielity/ts-types'

/**
 * Get a configuration value and inject it into a class property.
 *
 * @param options - The configuration options
 * @returns A property decorator
 *
 * @example
 * ```typescript
 * class AppService {
 *   @Config({ key: 'app.name', defaultValue: 'My App' })
 *   private appName: string;
 *
 *   @Config({ key: 'app.debug' })
 *   private debug: boolean;
 *
 *   public getAppName(): string {
 *     return this.appName;
 *   }
 * }
 * ```
 */
export function Config(options: IConfigOptions) {
  return createPropertyDecorator((target: any, propertyKey: string | symbol) => {
    // Define a getter for the property
    Object.defineProperty(target, propertyKey, {
      get: function () {
        // Get the config repository from the instance or global scope
        const configRepository =
          this.config ||
          (this.app && this.app.make ? this.app.make('config') : null) ||
          // @ts-ignore
          global.config ||
          (getApplication && getApplication().make ? getApplication().make('config') : null)

        if (!configRepository) {
          throw new Error(
            "Config repository not found. Make sure it's available in 'this.config', 'this.app', globally, or via getApplication().",
          )
        }

        // Get the configuration value
        let value = configRepository.get(options.key, options.defaultValue)

        // Apply transform function if provided
        if (options.transform) {
          value = options.transform(value)
        }

        return value
      },
      enumerable: true,
      configurable: true,
    })
  })
}
