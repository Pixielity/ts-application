import { useState, useEffect, useCallback } from 'react'
import { useService } from '../app/use-service'
import { ICache } from '@pixielity/ts-types'
import type { ICacheValueResult } from '@pixielity/ts-types'

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
export function useCacheValue<T>(key: string, defaultValue?: T, ttl = 0): ICacheValueResult<T> {
  const cache = useService<ICache>(ICache.$)
  const [value, setValue] = useState<T | null | undefined>(defaultValue)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  // Fetch the value from cache
  const fetchValue = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const cachedValue = await cache.get<T>(key, defaultValue)
      setValue(cachedValue)
    } catch (err) {
      const errorObj =
        err instanceof Error
          ? err
          : new Error(`Error fetching cache value for key ${key}: ${String(err)}`)
      console.error(errorObj.message)
      setError(errorObj)
    } finally {
      setLoading(false)
    }
  }, [cache, key, defaultValue])

  // Fetch the initial value from cache
  useEffect(() => {
    fetchValue()
  }, [fetchValue])

  // Function to set a new value in the cache
  const setCacheValue = useCallback(
    async (newValue: T, cacheTtl?: number): Promise<boolean> => {
      setError(null)
      try {
        await cache.put(key, newValue, cacheTtl ?? ttl)
        setValue(newValue)
        return true
      } catch (err) {
        const errorObj =
          err instanceof Error
            ? err
            : new Error(`Error setting cache value for key ${key}: ${String(err)}`)
        console.error(errorObj.message)
        setError(errorObj)
        return false
      }
    },
    [cache, key, ttl],
  )

  // Function to remove the value from the cache
  const removeCacheValue = useCallback(async (): Promise<boolean> => {
    setError(null)
    try {
      await cache.forget(key)
      setValue(null)
      return true
    } catch (err) {
      const errorObj =
        err instanceof Error
          ? err
          : new Error(`Error removing cache value for key ${key}: ${String(err)}`)
      console.error(errorObj.message)
      setError(errorObj)
      return false
    }
  }, [cache, key])

  // Function to refresh the value from the cache
  const refresh = useCallback(async (): Promise<void> => {
    await fetchValue()
  }, [fetchValue])

  return {
    value,
    setValue: setCacheValue,
    removeValue: removeCacheValue,
    loading,
    refresh,
    error,
  }
}
