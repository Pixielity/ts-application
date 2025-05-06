import { ICache } from '@pixielity/ts-types';

/**
 * Hook to use the cache manager
 *
 * @returns The cache manager
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const cache = useICache()
 *
 *   React.useEffect(() => {
 *     async function fetchData() {
 *       const data = await cache.remember('my-key', 60, async () => {
 *         // Fetch data
 *         return { your fetched data here }
 *       })
 *       console.log(data)
 *     }
 *
 *     fetchData()
 *   }, [cache])
 *
 *   return <div>...</div>
 * }
 * ```
 */
declare function useICache(): ICache;

export { useICache };
