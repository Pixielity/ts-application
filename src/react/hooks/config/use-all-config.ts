import { useState, useEffect } from 'react'
import { IConfig } from '@pixielity/ts-types'
import type { IConfigRepository } from '@pixielity/ts-types'

import { useService } from '../app/use-service'

/**
 * Hook to get all configuration items
 *
 * @param options - Additional options for the hook
 * @returns All configuration items
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const allConfig = useAllConfig()
 *
 *   return (
 *     <div>
 *       <pre>{JSON.stringify(allConfig, null, 2)}</pre>
 *     </div>
 *   )
 * }
 * ```
 */
export function useAllConfig(
  options: {
    watch?: boolean
  } = {},
): Record<string, any> {
  const config = useService<IConfigRepository>(IConfig.$)
  const [allConfig, setAllConfig] = useState<Record<string, any>>(config.all())

  // Watch for changes to all configuration items
  useEffect(() => {
    if (!options.watch) return

    // This is a simplified implementation
    // In a real app, you would need to implement a way to watch for config changes
    const intervalId = setInterval(() => {
      const newAllConfig = config.all()
      if (JSON.stringify(newAllConfig) !== JSON.stringify(allConfig)) {
        setAllConfig(newAllConfig)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [config, allConfig, options.watch])

  return allConfig
}
