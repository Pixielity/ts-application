import { Container as Container$1, interfaces } from 'inversify';
import { IContainer, ServiceIdentifier, IServiceProvider } from '@pixielity/ts-types';

/**
 * Service container implementation that provides dependency injection capabilities
 * similar to Laravel's IoC container, using Inversify under the hood.
 */
declare class Container implements IContainer {
    /**
     * The underlying Inversify container.
     * @private
     */
    private inversifyContainer;
    /**
     * The container's registered service providers.
     * @private
     */
    private serviceProviders;
    /**
     * The container's aliases.
     * @private
     */
    private aliases;
    /**
     * The container's contextual bindings.
     * @private
     */
    private contextualBindings;
    /**
     * Create a new container instance.
     */
    constructor();
    /**
     * Create a new container instance.
     *
     * @returns A new container instance
     */
    static make(): IContainer;
    /**
     * Get the underlying Inversify container.
     *
     * @returns The Inversify container
     */
    getInversifyContainer(): Container$1;
    /**
     * Determine if the given abstract type has been bound.
     *
     * @param abstract - The abstract type to check
     * @returns True if the abstract type has been bound, false otherwise
     */
    has(abstract: ServiceIdentifier): boolean;
    /**
     * Load container modules.
     *
     * @param modules - The container modules to load
     * @returns The container instance
     */
    load(...modules: interfaces.ContainerModule[]): IContainer;
    /**
     * Load container modules asynchronously.
     *
     * @param modules - The container modules to load
     * @returns A promise that resolves to the container instance
     */
    loadAsync(...modules: interfaces.AsyncContainerModule[]): Promise<IContainer>;
    /**
     * Unload container modules.
     *
     * @param modules - The container modules to unload
     * @returns The container instance
     */
    unload(...modules: interfaces.ContainerModuleBase[]): IContainer;
    /**
     * Unload container modules asynchronously.
     *
     * @param modules - The container modules to unload
     * @returns A promise that resolves to the container instance
     */
    unloadAsync(...modules: interfaces.ContainerModuleBase[]): Promise<IContainer>;
    /**
     * Register a binding with the container.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     * @param shared - Whether the binding should be shared
     * @returns The container instance or binding syntax
     */
    bind<T>(abstract: ServiceIdentifier<T>, concrete?: any, shared?: boolean): IContainer | interfaces.BindingToSyntax<T>;
    /**
     * Rebind a service identifier.
     *
     * @param serviceIdentifier - The service identifier to rebind
     * @returns The binding syntax
     */
    rebind<T>(serviceIdentifier: ServiceIdentifier<T>): interfaces.BindingToSyntax<T>;
    /**
     * Rebind a service identifier asynchronously.
     *
     * @param serviceIdentifier - The service identifier to rebind
     * @returns A promise that resolves to the binding syntax
     */
    rebindAsync<T>(serviceIdentifier: ServiceIdentifier<T>): Promise<interfaces.BindingToSyntax<T>>;
    /**
     * Unbind a service identifier.
     *
     * @param serviceIdentifier - The service identifier to unbind
     */
    unbind(serviceIdentifier: interfaces.ServiceIdentifier<any>): void;
    /**
     * Unbind a service identifier asynchronously.
     *
     * @param serviceIdentifier - The service identifier to unbind
     * @returns A promise that resolves when the unbinding is complete
     */
    unbindAsync(serviceIdentifier: interfaces.ServiceIdentifier<any>): Promise<void>;
    /**
     * Unbind all bindings.
     */
    unbindAll(): void;
    /**
     * Unbind all bindings asynchronously.
     *
     * @returns A promise that resolves when all unbindings are complete
     */
    unbindAllAsync(): Promise<void>;
    /**
     * Unbind a tagged binding.
     *
     * @param serviceIdentifier - The service identifier
     * @param key - The tag key
     * @param value - The tag value
     */
    unbindTagged: <T>(serviceIdentifier: ServiceIdentifier<T>, key: string, value: any) => void;
    /**
     * Register a binding with a tag.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     * @param tag - The tag name
     * @param value - The tag value
     * @param shared - Whether the binding should be shared
     * @returns The container instance
     */
    bindTagged<T>(abstract: ServiceIdentifier<T>, concrete: any, tag: string, value: any, shared?: boolean): IContainer;
    /**
     * Register a shared binding in the container.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     * @returns The container instance
     */
    singleton<T>(abstract: ServiceIdentifier<T>, concrete: any): IContainer;
    /**
     * Register an existing instance as shared in the container.
     *
     * @param abstract - The abstract type to bind
     * @param instance - The instance to register
     * @returns The container instance
     */
    instance<T>(abstract: ServiceIdentifier<T>, instance: T): IContainer;
    /**
     * Alias a type to a different name.
     *
     * @param abstract - The abstract type to alias
     * @param alias - The alias identifier
     * @returns The container instance
     */
    alias<T>(abstract: ServiceIdentifier<T>, alias: ServiceIdentifier<T>): IContainer;
    /**
     * Apply middleware to the container.
     *
     * @param middlewares - The middleware to apply
     * @returns The container instance
     */
    applyMiddleware(...middlewares: interfaces.Middleware[]): IContainer;
    /**
     * Apply a custom metadata reader to the container.
     *
     * @param metadataReader - The metadata reader to apply
     * @returns The container instance
     */
    applyCustomMetadataReader(metadataReader: interfaces.MetadataReader): IContainer;
    /**
     * Define a contextual binding.
     *
     * @param concrete - The concrete implementation that needs a dependency
     * @returns A builder for defining the contextual binding
     */
    when(concrete: string | Function): any;
    /**
     * Register a contextual binding in the container.
     *
     * @param concrete - The concrete implementation that needs a dependency
     * @param abstract - The abstract type that the concrete implementation needs
     * @param tag - The tag for the binding
     * @returns The container instance
     * @internal
     */
    registerContextualBinding(concrete: string, abstract: ServiceIdentifier, tag: string): IContainer;
    /**
     * Get the tag for a contextual binding.
     *
     * @param concrete - The concrete implementation that needs a dependency
     * @param abstract - The abstract type that the concrete implementation needs
     * @returns The tag for the binding, or undefined if not found
     * @private
     */
    private getContextualTag;
    /**
     * Register an activation handler for a service.
     *
     * @param serviceIdentifier - The service identifier
     * @param onActivation - The activation handler
     */
    onActivation<T>(serviceIdentifier: ServiceIdentifier<T>, onActivation: interfaces.BindingActivation<T>): void;
    /**
     * Register a deactivation handler for a service.
     *
     * @param serviceIdentifier - The service identifier
     * @param onDeactivation - The deactivation handler
     */
    onDeactivation<T>(serviceIdentifier: ServiceIdentifier<T>, onDeactivation: interfaces.BindingDeactivation<T>): void;
    /**
     * Check if a service identifier is bound.
     *
     * @param serviceIdentifier - The service identifier to check
     * @returns True if the service identifier is bound, false otherwise
     */
    isBound(serviceIdentifier: interfaces.ServiceIdentifier<unknown>): boolean;
    /**
     * Check if a service identifier is bound in the current container (not in ancestors).
     *
     * @param serviceIdentifier - The service identifier to check
     * @returns True if the service identifier is bound in the current container, false otherwise
     */
    isCurrentBound<T>(serviceIdentifier: ServiceIdentifier<T>): boolean;
    /**
     * Check if a named binding is bound.
     *
     * @param serviceIdentifier - The service identifier to check
     * @param named - The name to check
     * @returns True if the named binding is bound, false otherwise
     */
    isBoundNamed(serviceIdentifier: interfaces.ServiceIdentifier<any>, named: string | number | symbol): boolean;
    /**
     * Check if a tagged binding is bound.
     *
     * @param serviceIdentifier - The service identifier to check
     * @param key - The tag key
     * @param value - The tag value
     * @returns True if the tagged binding is bound, false otherwise
     */
    isBoundTagged(serviceIdentifier: interfaces.ServiceIdentifier<any>, key: string | number | symbol, value: unknown): boolean;
    /**
     * Create a snapshot of the container's state.
     */
    snapshot(): void;
    /**
     * Restore the container's state from a snapshot.
     */
    restore(): void;
    /**
     * Create a child container.
     *
     * @param containerOptions - The container options
     * @returns A new child container
     */
    createChild(containerOptions?: interfaces.ContainerOptions): IContainer;
    /**
     * Resolve the given type from the container.
     *
     * @param abstract - The abstract type to resolve
     * @param parameters - Optional parameters to pass to the constructor (not used with Inversify)
     * @returns The resolved instance
     * @template T - The type of the resolved instance
     */
    make<T>(abstract: ServiceIdentifier<T>, parameters?: any[]): T;
    /**
     * Resolve the given type from the container asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @returns A promise that resolves to the resolved instance
     * @template T - The type of the resolved instance
     */
    makeAsync<T>(abstract: ServiceIdentifier<T>): Promise<T>;
    /**
     * Get information about the caller.
     *
     * @returns The caller class name or undefined
     * @private
     */
    private getCallerInfo;
    /**
     * Resolve a tagged binding from the container.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     * @returns The resolved instance
     * @template T - The type of the resolved instance
     */
    makeTagged<T>(abstract: ServiceIdentifier<T>, tag: string, value: any): T;
    /**
     * Resolve a tagged binding from the container asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     * @returns A promise that resolves to the resolved instance
     * @template T - The type of the resolved instance
     */
    makeTaggedAsync<T>(abstract: ServiceIdentifier<T>, tag: string, value: any): Promise<T>;
    /**
     * Resolve a named binding from the container.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     * @returns The resolved instance
     * @template T - The type of the resolved instance
     */
    makeNamed<T>(abstract: ServiceIdentifier<T>, named: string | number | symbol): T;
    /**
     * Resolve a named binding from the container asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     * @returns A promise that resolves to the resolved instance
     * @template T - The type of the resolved instance
     */
    makeNamedAsync<T>(abstract: ServiceIdentifier<T>, named: string | number | symbol): Promise<T>;
    /**
     * Resolve all bindings for a service identifier.
     *
     * @param abstract - The abstract type to resolve
     * @returns All resolved instances
     * @template T - The type of the resolved instances
     */
    makeAll<T>(abstract: ServiceIdentifier<T>): T[];
    /**
     * Resolve all bindings for a service identifier asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @returns A promise that resolves to all resolved instances
     * @template T - The type of the resolved instances
     */
    makeAllAsync<T>(abstract: ServiceIdentifier<T>): Promise<T[]>;
    /**
     * Resolve all tagged bindings for a service identifier.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     * @returns All resolved instances
     * @template T - The type of the resolved instances
     */
    makeAllTagged<T>(abstract: ServiceIdentifier<T>, tag: string, value: any): T[];
    /**
     * Resolve all tagged bindings for a service identifier asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     * @returns A promise that resolves to all resolved instances
     * @template T - The type of the resolved instances
     */
    makeAllTaggedAsync<T>(abstract: ServiceIdentifier<T>, tag: string, value: any): Promise<T[]>;
    /**
     * Resolve all named bindings for a service identifier.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     * @returns All resolved instances
     * @template T - The type of the resolved instances
     */
    makeAllNamed<T>(abstract: ServiceIdentifier<T>, named: string | number | symbol): T[];
    /**
     * Resolve all named bindings for a service identifier asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     * @returns A promise that resolves to all resolved instances
     * @template T - The type of the resolved instances
     */
    makeAllNamedAsync<T>(abstract: ServiceIdentifier<T>, named: string | number | symbol): Promise<T[]>;
    /**
     * Resolve a class constructor.
     *
     * @param constructorFunction - The constructor function to resolve
     * @returns The resolved instance
     * @template T - The type of the resolved instance
     */
    resolve<T>(constructorFunction: interfaces.Newable<T>): T;
    /**
     * Get the alias for an abstract if it exists.
     *
     * @param abstract - The abstract type
     * @returns The alias or the original abstract
     * @private
     */
    private getAlias;
    /**
     * Register a service provider with the container.
     *
     * @param provider - The service provider to register
     * @returns The container instance
     */
    register(provider: IServiceProvider): IContainer;
    /**
     * Boot the registered service providers.
     *
     * @returns The container instance
     */
    boot(): IContainer;
    /**
     * Call the given callback with the container instance.
     *
     * @param callback - The callback to call
     * @returns The result of the callback
     * @template T - The return type of the callback
     */
    call<T>(callback: (container: IContainer) => T): T;
    /**
     * Get all bindings registered in the container.
     *
     * @param serviceIdentifier - Optional service identifier to filter bindings
     * @returns An array of bindings
     */
    getBindings(serviceIdentifier?: ServiceIdentifier<any>): interfaces.Binding<any>[];
}

export { Container };
