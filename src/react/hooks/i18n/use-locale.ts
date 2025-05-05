import { useState, useCallback } from "react"
import { useTranslator } from "./use-translator"

/**
 * Hook to get and set the current locale
 *
 * @returns An array with the current locale and a function to set the locale
 *
 * @example
 * ```tsx
 * function LanguageSwitcher() {
 *   const [locale, setLocale] = useLocale()
 *
 *   return (
 *     <div>
 *       <p>Current language: {locale}</p>
 *       <button onClick={() => setLocale('en')}>English</button>
 *       <button onClick={() => setLocale('es')}>Spanish</button>
 *     </div>
 *   )
 * }
 * ```
 */
export function useLocale(): [string, (locale: string) => void] {
  const translator = useTranslator()
  const [locale, setLocaleState] = useState<string>(translator.getLocale())

  const setLocale = useCallback(
    (newLocale: string) => {
      translator.setLocale(newLocale)
      setLocaleState(newLocale)
    },
    [translator],
  )

  return [locale, setLocale]
}
