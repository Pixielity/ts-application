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
declare function useAllConfig(options?: {
    watch?: boolean;
}): Record<string, any>;

export { useAllConfig };
