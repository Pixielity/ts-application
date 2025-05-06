import { Facade } from './facade.mjs';
import { IConfigRepository } from '@pixielity/ts-types';

/**
 * Config facade that provides static access to the configuration repository.
 *
 * @example
 * ```typescript
 * // Get a configuration value
 * const appName = Config.get('app.name');
 *
 * // Get a configuration value with a default
 * const debug = Config.get('app.debug', false);
 *
 * // Set a configuration value
 * Config.set('app.name', 'My App');
 * ```
 */
declare class ConfigFacade extends Facade {
    /**
     * Get the registered name of the component.
     *
     * @returns The registered name of the component
     */
    protected static getFacadeAccessor(): string;
}
declare const Config: typeof ConfigFacade & IConfigRepository;

export { Config };
