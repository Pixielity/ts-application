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
declare function useHasConfig(key: string): boolean;

export { useHasConfig };
