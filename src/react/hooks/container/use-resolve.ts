import { ServiceIdentifier } from '@pixielity/ts-types'
import { useContainer } from './use-container'

/**
 * Hook to resolve a service from the Container
 *
 * @param abstract - The abstract type to resolve
 * @returns The resolved instance
 * @template T - The type of the resolved instance
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const config = useResolve<ConfigRepository>('config')
 *
 *   return <div>App name: {config.get('app.name')}</div>
 * }
 * ```
 */
export function useResolve<T>(abstract: ServiceIdentifier<T>): T {
  const container = useContainer()
  return container.make<T>(abstract)
}
