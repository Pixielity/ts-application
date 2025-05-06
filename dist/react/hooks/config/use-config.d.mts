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
declare function useConfig<T>(key: string, defaultValue?: T, options?: {
    watch?: boolean;
    transform?: (value: T) => T;
}): T;

export { useConfig };
