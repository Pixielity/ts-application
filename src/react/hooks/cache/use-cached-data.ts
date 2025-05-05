import { useState, useEffect, useCallback } from 'react'
import { useService } from '../app/use-service'
import { ICache } from '@pixielity/ts-types'
import type { ICachedDataResult } from '@pixielity/ts-types'

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
export function useCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl = 60,
  options: {
    autoRefresh?: boolean
    refreshInterval?: number
    skipInitialFetch?: boolean
  } = {},
): ICachedDataResult<T> {
  const cache = useService<ICache>(ICache.$)
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(!options.skipInitialFetch)
  const [error, setError] = useState<Error | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchData = useCallback(
    async (forceRefresh = false) => {
      setLoading(true)
      setError(null)

      try {
        let result: T

        if (forceRefresh) {
          // Force refresh by fetching and updating the cache
          result = await fetcher()
          await cache.put(key, result, ttl)
        } else {
          // Use remember to get from cache or fetch if not cached
          result = await cache.remember(key, ttl, fetcher)
        }

        setData(result)
        setLastUpdated(new Date())
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)))
      } finally {
        setLoading(false)
      }
    },
    [cache, key, fetcher, ttl],
  )

  // Invalidate the cache for this key
  const invalidate = useCallback(async () => {
    await cache.forget(key)
    setData(null)
  }, [cache, key])

  // Fetch data on mount
  useEffect(() => {
    if (!options.skipInitialFetch) {
      fetchData()
    }
  }, [fetchData, options.skipInitialFetch])

  // Set up auto-refresh if enabled
  useEffect(() => {
    if (options.autoRefresh && options.refreshInterval) {
      const intervalId = setInterval(() => {
        fetchData(true)
      }, options.refreshInterval * 1000)

      return () => clearInterval(intervalId)
    }
  }, [fetchData, options.autoRefresh, options.refreshInterval])

  // Function to manually refresh the data
  const refresh = useCallback(() => {
    return fetchData(true)
  }, [fetchData])

  return { data, loading, error, refresh, invalidate, lastUpdated }
}
