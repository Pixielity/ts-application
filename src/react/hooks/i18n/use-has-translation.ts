import { useTranslator } from "./use-translator"

/**
 * Hook to check if a translation exists
 *
 * @param key - The translation key
 * @param options - The translation options
 * @returns Whether the translation exists
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const hasWelcome = useHasTranslation('welcome')
 *
 *   return (
 *     <div>
 *       {hasWelcome ? (
 *         <p>{useTranslate('welcome')}</p>
 *       ) : (
 *         <p>Welcome message not available</p>
 *       )}
 *     </div>
 *   )
 * }
 * ```
 */
export function useHasTranslation(
  key: string,
  options: {
    locale?: string
    fallbackLocale?: string
  } = {},
): boolean {
  const translator = useTranslator()
  return translator.has(key, options)
}
