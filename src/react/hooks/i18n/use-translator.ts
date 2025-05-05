import { useService } from "../app/use-service"
import type { ITranslator } from "../../../i18n/translator"

/**
 * Hook to use the translator
 *
 * @returns The translator instance
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const translator = useTranslator()
 *   const welcome = translator.translate('welcome')
 *
 *   return <div>{welcome}</div>
 * }
 * ```
 */
export function useTranslator(): Translator {
  return useService<Translator>("translator")
}
