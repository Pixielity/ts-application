import { IConfigOptions } from '@pixielity/ts-types';

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
declare function Config(options: IConfigOptions): PropertyDecorator;

export { Config };
