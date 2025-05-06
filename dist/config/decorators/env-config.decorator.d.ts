import { IConfigOptions } from '@pixielity/ts-types';

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
declare function EnvConfig(options: IConfigOptions): PropertyDecorator;

export { EnvConfig };
