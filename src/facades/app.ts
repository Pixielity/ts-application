import { Facade, createFacadeProxy } from "./facade"
import type { IApplication } from "@pixielity/ts-types"

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
class AppFacade extends Facade {
  /**
   * Get the registered name of the component.
   *
   * @returns The registered name of the component
   */
  protected static getFacadeAccessor(): string {
    return "app"
  }
}

// Create and export the facade proxy
export const App = createFacadeProxy(AppFacade) as typeof AppFacade & IApplication
