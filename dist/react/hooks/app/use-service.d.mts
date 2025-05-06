import { ServiceIdentifier } from '@pixielity/ts-types';

/**
 * Hook to use a service from the Application container
 *
 * @param abstract - The abstract type to resolve
 * @returns The resolved instance
 * @template T - The type of the resolved instance
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const config = useService<ConfigRepository>('config')
 *
 *   return <div>App name: {config.get('app.name')}</div>
 * }
 * ```
 */
declare function useService<T>(abstract: ServiceIdentifier<T>): T;

export { useService };
