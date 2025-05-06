import React from 'react';

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
declare function withServices<P extends object, S extends Record<string, string>>(Component: React.ComponentType<P>, services: S): React.FC<Omit<P, keyof S>>;

export { withServices };
