import React from 'react'
import { useContainer } from './use-container'

/**
 * Higher-order component that injects services into a component
 *
 * @param Component - The component to inject services into
 * @param services - The services to inject
 * @returns A new component with the services injected as props
 *
 * @example
 * ```tsx
 * interface MyComponentProps {
 *   config: ConfigRepository
 *   cache: ICache
 * }
 *
 * function MyComponent({ config, cache }: MyComponentProps) {
 *   return <div>App name: {config.get('app.name')}</div>
 * }
 *
 * export default withServices(MyComponent, {
 *   config: 'config',
 *   cache: 'cache'
 * })
 * ```
 */
export function withServices<P extends object, S extends Record<string, string>>(
  Component: React.ComponentType<P>,
  services: S,
): React.FC<Omit<P, keyof S>> {
  return function WithServices(props: Omit<P, keyof S>) {
    const container = useContainer()
    const resolvedServices = Object.entries(services).reduce(
      (acc, [key, abstract]) => {
        acc[key as keyof S] = container.make(abstract)
        return acc
      },
      {} as Record<keyof S, any>,
    )

    return <Component {...(props as any)} {...resolvedServices} />
  }
}
