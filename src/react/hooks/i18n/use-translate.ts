import { useTranslator } from "./use-translator"

/**
 * Hook to translate a key
 *
 * @param key - The translation key
 * @param options - The translation options
 * @returns The translated string
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const welcome = useTranslate('welcome')
 *   const hello = useTranslate('hello', { parameters: { name: 'John' } })
 *
 *   return (
 *     <div>
 *       <h1>{welcome}</h1>
 *       <p>{hello}</p>
 *     </div>
 *   )
 * }
 * ```
 */
export function useTranslate(
  key: string,
  options: {
    locale?: string
    fallbackLocale?: string
    parameters?: Record<string, any>
  } = {},
): string {
  const translator = useTranslator()
  return translator.translate(key, options)
}
