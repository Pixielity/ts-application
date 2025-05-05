import React from 'react'
import type { ReactNode } from 'react'
import { type IApplication } from '@pixielity/ts-types'

import { AppContext } from '../contexts'

/**
 * Provider component for the IApplication context
 *
 * @example
 * \`\`\`tsx
 * import { getApplication } from '../bootstrap/app'
 *
 * function MyApp({ Component, pageProps }) {
 *   const app = getApplication()
 *
 *   return (
 *     <AppProvider app={app}>
 *       <Component {...pageProps} />
 *     </AppProvider>
 *   )
 * }
 * \`\`\`
 */
export function AppProvider({ app, children }: { app: IApplication; children: ReactNode }) {
  return <AppContext.Provider value={app}>{children}</AppContext.Provider>
}
