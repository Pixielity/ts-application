import type { IContainer } from '@pixielity/ts-types'

/**
 * Base service provider class that all service providers must extend.
 * Service providers are responsible for binding services into the container
 * and bootstrapping any dependencies.
 *
 * @example
 * ```typescript
 * class CacheServiceProvider extends ServiceProvider {
 *   register(): void {
 *     this.app.singleton('cache', () => {
 *       return new ICache(this.app);
 *     });
 *   }
 *
 *   boot(): void {
 *     // Bootstrap the cache service
 *   }
 *
 *   terminate(): void {
 *     // Graceful shutdown logic
 *   }
 *
 *   publish(): void {
 *     // Optional logic for publishing configuration/files
 *   }
 * }
 * ```
 */
export abstract class ServiceProvider {
  /**
   * The application instance.
   */
  public app: IContainer

  /**
   * Create a new service provider instance.
   *
   * @param app - The application container instance
   */
  constructor(app: IContainer) {
    this.app = app
  }

  /**
   * Register any application services.
   * This method is called when the service provider is registered with the container.
   */
  abstract register(): void

  /**
   * Bootstrap any application services.
   * This method is called after all service providers have been registered.
   */
  boot?(): void

  /**
   * Gracefully terminate services (e.g., close DB, clear jobs).
   * Called during app shutdown, if implemented.
   */
  terminate?(): void

  /**
   * Publish assets, configs, or resources, if applicable.
   * Typically used for copying files to the consumer project.
   */
  publish?(): void
}
