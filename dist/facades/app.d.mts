import { Facade } from './facade.mjs';
import { IApplication } from '@pixielity/ts-types';

/**
 * App facade that provides static access to the application instance.
 *
 * @example
 * \`\`\`typescript
 * // Get a service from the container
 * const config = App.make('config');
 *
 * // Get the configuration repository
 * const config = App.config();
 *
 * // Get the cache manager
 * const cache = App.cache();
 * \`\`\`
 */
declare class AppFacade extends Facade {
    /**
     * Get the registered name of the component.
     *
     * @returns The registered name of the component
     */
    protected static getFacadeAccessor(): string;
}
declare const App: typeof AppFacade & IApplication;

export { App };
