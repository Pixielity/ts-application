import { ICachedDataResult } from '@pixielity/ts-types';

/**
 * Hook to use cached data with automatic fetching and caching
 *
 * @param key - The cache key
 * @param fetcher - The function to fetch the data
 * @param ttl - The time to live in seconds (default: 60)
 * @param options - Additional options for the hook
 * @returns An object with the data, loading state, error, and utility functions
 * @template T - The type of the data
 *
 * @example
 * \`\`\`tsx
 * function MyComponent() {
 *   const { data, loading, error, refresh } = useCachedData<User[]>(
 *     'users',
 *     async () => {
 *       const response = await fetch('/api/users')
 *       return response.json()
 *     },
 *     300 // Cache for 5 minutes
 *   )
 *
 *   if (loading) return <div>Loading...</div>
 *   if (error) return <div>Error: {error.message}</div>
 *
 *   return (
 *     <div>
 *       <button onClick={refresh}>Refresh</button>
 *       <ul>
 *         {data?.map(user => (
 *           <li key={user.id}>{user.name}</li>
 *         ))}
 *       </ul>
 *     </div>
 *   )
 * }
 * \`\`\`
 */
declare function useCachedData<T>(key: string, fetcher: () => Promise<T>, ttl?: number, options?: {
    autoRefresh?: boolean;
    refreshInterval?: number;
    skipInitialFetch?: boolean;
}): ICachedDataResult<T>;

export { useCachedData };
