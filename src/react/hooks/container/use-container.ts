import { useContext } from 'react'
import type { IContainer } from '@pixielity/ts-types'

import { ContainerContext } from '../../contexts/container.context'

/**
 * Hook to use the Container instance
 *
 * @returns The Container instance
 * @throws Error if used outside of ContainerProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const container = useContainer()
 *   const config = container.make('config')
 *
 *   return <div>App name: {config.get('app.name')}</div>
 * }
 * ```
 */
export function useContainer(): IContainer {
  const context = useContext(ContainerContext)

  if (context === undefined) {
    throw new Error('useContainer must be used within a ContainerProvider')
  }

  return context
}
