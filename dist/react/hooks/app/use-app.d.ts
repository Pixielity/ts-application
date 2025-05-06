import { IApplication } from '@pixielity/ts-types';

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
declare function useApp(): IApplication;

export { useApp };
