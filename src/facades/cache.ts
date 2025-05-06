import { Facade, createFacadeProxy } from './facade'
import type { ICache } from '@pixielity/ts-types'

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
class CacheFacade extends Facade {
  /**
   * Get the registered name of the component.
   *
   * @returns The registered name of the component
   */
  protected static getFacadeAccessor(): string {
    return 'cache'
  }

  /**
   * Get a cache store instance by name.
   *
   * @param name - The name of the cache store
   * @returns The cache store instance
   */
  public static store(name?: string): any {
    return this.getFacadeRoot().store(name)
  }
}

// Create and export the facade proxy
export const Cache = createFacadeProxy(CacheFacade) as typeof CacheFacade & ICache
