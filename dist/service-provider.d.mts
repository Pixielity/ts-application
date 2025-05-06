import { IContainer } from '@pixielity/ts-types';

/**
 * Base service provider class that all service providers must extend.
 * Service providers are responsible for binding services into the container
 * and bootstrapping any dependencies.
 *
 * @example
 * ```ts
 * class CacheServiceProvider extends ServiceProvider {
 *   register(): void {
 *     this.app.singleton('cache', () => new ICache(this.app))
 *   }
 * }
 * const provider = CacheServiceProvider.make(app)
 * ```
 */
declare abstract class ServiceProvider {
    /**
     * The application container instance.
     */
    app: IContainer;
    /**
     * Create a new service provider instance.
     *
     * @param app - The application container instance
     */
    constructor(app: IContainer);
    /**
     * Static factory method to create a new instance of the service provider.
     *
     * @param app - The application container instance
     * @param args - Additional arguments to be passed to the subclass constructor
     * @returns A new instance of the subclass
     */
    static make<T extends typeof ServiceProvider>(this: T, app: IContainer, ...args: ConstructorParameters<T>): InstanceType<T>;
    /**
     * Register any application services.
     * This method is called when the service provider is registered with the container.
     */
    abstract register(): void;
    /**
     * Bootstrap any application services.
     * This method is called after all service providers have been registered.
     */
    boot?(): void;
    /**
     * Gracefully terminate services (e.g., close DB, clear jobs).
     * Called during app shutdown, if implemented.
     */
    terminate?(): void;
    /**
     * Publish assets, configs, or resources, if applicable.
     * Typically used for copying files to the consumer project.
     */
    publish?(): void;
}

export { ServiceProvider };
