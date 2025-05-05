import { useState, useEffect } from 'react'
import { IConfig, IConfigRepository } from '@pixielity/ts-types'

import { useService } from '../app/use-service'

/**
 * Hook to check if a configuration value exists
 *
 * @param key - The configuration key
 * @returns True if the configuration value exists, false otherwise
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const hasDebug = useHasConfig('app.debug')
 *
 *   return (
 *     <div>
 *       {hasDebug ? 'Debug config exists' : 'Debug config does not exist'}
 *     </div>
 *   )
 * }
 * ```
 */
export function useHasConfig(key: string): boolean {
  const config = useService<IConfigRepository>(IConfig.$)
  const [exists, setExists] = useState<boolean>(config.has(key))

  // Watch for changes to whether the configuration value exists
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newExists = config.has(key)
      if (newExists !== exists) {
        setExists(newExists)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [config, key, exists])

  return exists
}
