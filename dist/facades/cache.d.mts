import { Facade } from './facade.mjs';
import { ICache } from '@pixielity/ts-types';

/**
 * Cache facade that provides static access to the cache manager.
 *
 * @example
 * ```typescript
 * // Get the default cache store
 * const value = await Cache.get('key');
 *
 * // Store a value in the cache
 * await Cache.put('key', 'value', 60);
 *
 * // Use a different cache store
 * const redisValue = await Cache.store('redis').get('key');
 * ```
 */
declare class CacheFacade extends Facade {
    /**
     * Get the registered name of the component.
     *
     * @returns The registered name of the component
     */
    protected static getFacadeAccessor(): string;
    /**
     * Get a cache store instance by name.
     *
     * @param name - The name of the cache store
     * @returns The cache store instance
     */
    static store(name?: string): any;
}
declare const Cache: typeof CacheFacade & ICache;

export { Cache };
