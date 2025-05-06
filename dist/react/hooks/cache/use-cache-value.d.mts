import { ICacheValueResult } from '@pixielity/ts-types';

/**
 * Hook to use a simple cache value
 *
 * @param key - The cache key
 * @param defaultValue - The default value
 * @param ttl - The time to live in seconds (default: 0, no expiration)
 * @returns An object with the value, setter, and utility functions
 * @template T - The type of the value
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { value, setValue, removeValue, refresh } = useCacheValue<string>('user-preference', 'default')
 *
 *   return (
 *     <div>
 *       <p>Current value: {value}</p>
 *       <button onClick={() => setValue('new value', 3600)}>Set new value</button>
 *       <button onClick={removeValue}>Remove value</button>
 *       <button onClick={refresh}>Refresh</button>
 *     </div>
 *   )
 * }
 * ```
 */
declare function useCacheValue<T>(key: string, defaultValue?: T, ttl?: number): ICacheValueResult<T>;

export { useCacheValue };
