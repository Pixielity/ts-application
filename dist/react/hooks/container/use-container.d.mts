import { IContainer } from '@pixielity/ts-types';

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
declare function useContainer(): IContainer;

export { useContainer };
