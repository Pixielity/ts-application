import { useState, useEffect, useCallback } from 'react'
import { useService } from '../app/use-service'
import { ICache } from '@pixielity/ts-types'

/**
 * Hook to use multiple cached values
 *
 * @param keys - The cache keys
 * @param defaultValues - The default values
 * @returns An object with the values and utility functions
 * @template T - The type of the values
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { values, setValues, removeValues, loading } = useMultiCacheValues<string>([
 *     'user-preference-theme',
 *     'user-preference-language'
 *   ], ['light', 'en'])
 *
 *   if (loading) return <div>Loading...</div>
 *
 *   return (
 *     <div>
 *       <p>Theme: {values[0]}</p>
 *       <p>Language: {values[1]}</p>
 *       <button onClick={() => setValues(['dark', 'fr'])}>Set to Dark/French</button>
 *       <button onClick={() => removeValues()}>Reset to defaults</button>
 *     </div>
 *   )
 * }
 * ```
 */
export function useMultiCacheValues<T>(
  keys: string[],
  defaultValues?: T[],
): {
  values: (T | null | undefined)[]
  setValues: (newValues: T[], ttl?: number) => Promise<boolean[]>
  removeValues: () => Promise<boolean[]>
  loading: boolean
  refresh: () => Promise<void>
} {
  const cache = useService<ICache>(ICache.$)
  const [values, setValues] = useState<(T | null | undefined)[]>(
    defaultValues || Array(keys.length).fill(undefined),
  )
  const [loading, setLoading] = useState<boolean>(true)

  // Fetch the values from cache
  const fetchValues = useCallback(async () => {
    setLoading(true)
    try {
      const promises = keys.map((key, index) => cache.get<T>(key, defaultValues?.[index]))
      const cachedValues = await Promise.all(promises)
      setValues(cachedValues)
    } catch (error) {
      console.error(`Error fetching cache values:`, error)
    } finally {
      setLoading(false)
    }
  }, [cache, keys, defaultValues])

  // Fetch the initial values from cache
  useEffect(() => {
    fetchValues()
  }, [fetchValues])

  // Function to set new values in the cache
  const setCacheValues = useCallback(
    async (newValues: T[], ttl?: number): Promise<boolean[]> => {
      try {
        const promises = keys.map((key, index) =>
          cache
            .put(key, newValues[index], ttl)
            .then(() => true)
            .catch(() => false),
        )
        const results = await Promise.all(promises)
        setValues(newValues)
        return results
      } catch (error) {
        console.error(`Error setting cache values:`, error)
        return keys.map(() => false)
      }
    },
    [cache, keys],
  )

  // Function to remove the values from the cache
  const removeCacheValues = useCallback(async (): Promise<boolean[]> => {
    try {
      const promises = keys.map((key) => cache.forget(key))
      const results = await Promise.all(promises)
      setValues(defaultValues || Array(keys.length).fill(null))
      return results
    } catch (error) {
      console.error(`Error removing cache values:`, error)
      return keys.map(() => false)
    }
  }, [cache, keys, defaultValues])

  // Function to refresh the values from the cache
  const refresh = useCallback(async (): Promise<void> => {
    await fetchValues()
  }, [fetchValues])

  return {
    values,
    setValues: setCacheValues,
    removeValues: removeCacheValues,
    loading,
    refresh,
  }
}
