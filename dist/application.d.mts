import { interfaces } from 'inversify';
import { IApplication, IContainer, ServiceIdentifier, IConfigRepository, ICache } from '@pixielity/ts-types';

/**
 * Application class that bootstraps and manages the application.
 */
declare class Application implements IApplication {
    /**
     * The service container instance.
     * @private
     */
    private container;
    /**
     * The bootstrapped state of the application.
     * @private
     */
    private booted;
    /**
     * Create a new application instance.
     */
    constructor();
    /**
     * Create a new application instance.
     *
     * @returns A new application instance
     */
    static make(): Application;
    /**
     * Get the service container.
     *
     * @returns The service container
     */
    getContainer(): IContainer;
    /**
     * Register the core service providers.
     *
     * @returns The application instance
     */
    registerCoreProviders(): Application;
    /**
     * Register a service provider.
     *
     * @param provider - The service provider to register
     * @returns The application instance
     */
    register(provider: any): Application;
    /**
     * Boot the application.
     *
     * @returns The application instance
     */
    boot(): Application;
    /**
     * Determine if the application has been bootstrapped.
     *
     * @returns True if the application has been bootstrapped, false otherwise
     */
    isBooted(): boolean;
    /**
     * Get a service from the container.
     *
     * @param abstract - The abstract type to resolve
     * @returns The resolved instance
     * @template T - The type of the resolved instance
     */
    make<T>(abstract: ServiceIdentifier<T>): T;
    /**
     * Register a binding with the container.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     * @param shared - Whether the binding should be shared
     */
    bind<T>(abstract: ServiceIdentifier<T>, concrete?: any, shared?: boolean): IContainer | interfaces.BindingToSyntax<T>;
    /**
     * Register an existing instance as shared in the container.
     *
     * @param abstract - The abstract type to bind
     * @param instance - The instance to register
     * @returns The container instance
     */
    instance<T>(abstract: ServiceIdentifier<T>, instance: T): IContainer;
    /**
     * Get the configuration repository.
     *
     * @returns The configuration repository
     */
    config(): IConfigRepository;
    /**
     * Get the cache manager.
     *
     * @returns The cache manager
     */
    cache(): ICache;
}
/**
 * Get the application instance.
 *
 * @returns The application instance
 */
declare function getApplication(): Application;

export { Application, getApplication };
