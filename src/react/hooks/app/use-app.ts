import { useContext } from 'react'
import type { IApplication } from '@pixielity/ts-types'

import { AppContext } from '../../contexts/app.context'

/**
 * Hook to use the Application instance
 *
 * @returns The Application instance
 * @throws Error if used outside of AppProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const app = useApp()
 *   const config = app.config()
 *
 *   return <div>App name: {config.get('app.name')}</div>
 * }
 * ```
 */
export function useApp(): IApplication {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }

  return context
}
