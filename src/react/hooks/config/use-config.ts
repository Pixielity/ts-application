import { useState, useEffect } from "react"
import { useService } from "../app/use-service"
import { IConfig, type IConfigRepository } from '@pixielity/ts-types'

/**
 * Hook to get a configuration value
 *
 * @param key - The configuration key
 * @param defaultValue - The default value to return if the key doesn't exist
 * @param options - Additional options for the hook
 * @returns The configuration value
 * @template T - The type of the configuration value
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const appName = useConfig<string>('app.name', 'Default App Name')
 *   const debug = useConfig<boolean>('app.debug', false)
 *
 *   return (
 *     <div>
 *       <h1>{appName}</h1>
 *       {debug && <div>Debug mode is enabled</div>}
 *     </div>
 *   )
 * }
 * ```
 */
export function useConfig<T>(
  key: string,
  defaultValue?: T,
  options: {
    watch?: boolean
    transform?: (value: T) => T
  } = {},
): T {
  const config = useService<IConfigRepository>(IConfig.$)
  const [value, setValue] = useState<T>(config.get<T>(key, defaultValue))

  // Apply transform function if provided
  const transformedValue = options.transform ? options.transform(value) : value

  // Watch for changes to the configuration value
  useEffect(() => {
    if (!options.watch) return

    // This is a simplified implementation
    // In a real app, you would need to implement a way to watch for config changes
    const intervalId = setInterval(() => {
      const newValue = config.get<T>(key, defaultValue)
      if (JSON.stringify(newValue) !== JSON.stringify(value)) {
        setValue(newValue)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [config, key, defaultValue, value, options.watch])

  return transformedValue
}
