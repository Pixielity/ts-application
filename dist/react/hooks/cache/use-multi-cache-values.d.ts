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
declare function useMultiCacheValues<T>(keys: string[], defaultValues?: T[]): {
    values: (T | null | undefined)[];
    setValues: (newValues: T[], ttl?: number) => Promise<boolean[]>;
    removeValues: () => Promise<boolean[]>;
    loading: boolean;
    refresh: () => Promise<void>;
};

export { useMultiCacheValues };
