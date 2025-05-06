/**
 * Hook to get and set a configuration value
 *
 * @param key - The configuration key
 * @param defaultValue - The default value to return if the key doesn't exist
 * @returns An object with the value and a setter function
 * @template T - The type of the configuration value
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const [appName, setAppName] = useConfigState<string>('app.name', 'Default App Name')
 *
 *   return (
 *     <div>
 *       <h1>{appName}</h1>
 *       <input
 *         type="text"
 *         value={appName}
 *         onChange={(e) => setAppName(e.target.value)}
 *       />
 *     </div>
 *   )
 * }
 * ```
 */
declare function useConfigState<T>(key: string, defaultValue?: T): [T, (newValue: T) => void];

export { useConfigState };
