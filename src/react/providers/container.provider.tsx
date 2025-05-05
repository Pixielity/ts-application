import React from 'react'
import type { ReactNode } from 'react'
import type { IContainer } from '@pixielity/ts-types'

import { ContainerContext } from '../contexts'

/**
 * Provider component for the Container context
 *
 * @example
 * \`\`\`tsx
 * import { Container } from '../../container/container'
 *
 * function MyApp({ Component, pageProps }) {
 *   const container = new Container()
 *
 *   return (
 *     <ContainerProvider container={container}>
 *       <Component {...pageProps} />
 *     </ContainerProvider>
 *   )
 * }
 * \`\`\`
 */
export function ContainerProvider({
  container,
  children,
}: {
  container: IContainer
  children: ReactNode
}) {
  return <ContainerContext.Provider value={container}>{children}</ContainerContext.Provider>
}
