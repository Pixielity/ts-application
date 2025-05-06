import { Container as InversifyContainer, type interfaces } from 'inversify'
import 'reflect-metadata'
import type { IContainer, IServiceProvider, ServiceIdentifier } from '@pixielity/ts-types'

/**
 * Service container implementation that provides dependency injection capabilities
 * similar to Laravel's IoC container, using Inversify under the hood.
 */
export class Container implements IContainer {
  /**
   * The underlying Inversify container.
   * @private
   */
  private inversifyContainer: InversifyContainer

  /**
   * The container's registered service providers.
   * @private
   */
  private serviceProviders: IServiceProvider[] = []

  /**
   * The container's aliases.
   * @private
   */
  private aliases: Map<ServiceIdentifier, ServiceIdentifier> = new Map()

  /**
   * The container's contextual bindings.
   * @private
   */
  private contextualBindings: Map<string, Map<ServiceIdentifier, string>> = new Map()

  /**
   * Create a new container instance.
   */
  constructor() {
    this.inversifyContainer = new InversifyContainer()
  }

  /**
   * Create a new container instance.
   *
   * @returns A new container instance
   */
  public static make(): IContainer {
    return new Container() as IContainer
  }

  /**
   * Get the underlying Inversify container.
   *
   * @returns The Inversify container
   */
  public getInversifyContainer(): InversifyContainer {
    return this.inversifyContainer
  }

  /**
   * Determine if the given abstract type has been bound.
   *
   * @param abstract - The abstract type to check
   * @returns True if the abstract type has been bound, false otherwise
   */
  public has(abstract: ServiceIdentifier): boolean {
    const resolvedAbstract = this.getAlias(abstract)

    return this.inversifyContainer.isBound(resolvedAbstract)
  }

  /**
   * Load container modules.
   *
   * @param modules - The container modules to load
   * @returns The container instance
   */
  public load(...modules: interfaces.ContainerModule[]): IContainer {
    this.inversifyContainer.load(...modules)

    return this as IContainer
  }

  /**
   * Load container modules asynchronously.
   *
   * @param modules - The container modules to load
   * @returns A promise that resolves to the container instance
   */
  public async loadAsync(...modules: interfaces.AsyncContainerModule[]): Promise<IContainer> {
    await this.inversifyContainer.loadAsync(...modules)

    return this as IContainer
  }

  /**
   * Unload container modules.
   *
   * @param modules - The container modules to unload
   * @returns The container instance
   */
  public unload(...modules: interfaces.ContainerModuleBase[]): IContainer {
    this.inversifyContainer.unload(...modules)

    return this as IContainer
  }

  /**
   * Unload container modules asynchronously.
   *
   * @param modules - The container modules to unload
   * @returns A promise that resolves to the container instance
   */
  public async unloadAsync(...modules: interfaces.ContainerModuleBase[]): Promise<IContainer> {
    await this.inversifyContainer.unloadAsync(...modules)

    return this as IContainer
  }

  /**
   * Register a binding with the container.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @param shared - Whether the binding should be shared
   * @returns The container instance or binding syntax
   */
  public bind<T>(
    abstract: ServiceIdentifier<T>,
    concrete?: any,
    shared = false,
  ): IContainer | interfaces.BindingToSyntax<T> {
    // Unbind if already bound
    if (this.inversifyContainer.isBound(abstract)) {
      this.inversifyContainer.unbind(abstract)
    }

    if (typeof concrete === 'function') {
      if (shared) {
        this.inversifyContainer
          .bind(abstract)
          .toDynamicValue((context) => {
            return concrete(this)
          })
          .inSingletonScope()
      } else {
        this.inversifyContainer.bind(abstract).toDynamicValue((context) => {
          return concrete(this)
        })
      }
    } else if (concrete !== undefined) {
      if (shared) {
        this.inversifyContainer.bind(abstract).toConstantValue(concrete)
      } else {
        this.inversifyContainer.bind(abstract).toDynamicValue(() => concrete)
      }
    } else {
      // If no concrete implementation is provided, return the binding syntax
      return this.inversifyContainer.bind(abstract)
    }

    return this as IContainer
  }

  /**
   * Rebind a service identifier.
   *
   * @param serviceIdentifier - The service identifier to rebind
   * @returns The binding syntax
   */
  public rebind<T>(serviceIdentifier: ServiceIdentifier<T>): interfaces.BindingToSyntax<T> {
    return this.inversifyContainer.rebind<T>(serviceIdentifier)
  }

  /**
   * Rebind a service identifier asynchronously.
   *
   * @param serviceIdentifier - The service identifier to rebind
   * @returns A promise that resolves to the binding syntax
   */
  public rebindAsync<T>(
    serviceIdentifier: ServiceIdentifier<T>,
  ): Promise<interfaces.BindingToSyntax<T>> {
    return this.inversifyContainer.rebindAsync<T>(serviceIdentifier)
  }

  /**
   * Unbind a service identifier.
   *
   * @param serviceIdentifier - The service identifier to unbind
   */
  public unbind(serviceIdentifier: interfaces.ServiceIdentifier<any>): void {
    this.inversifyContainer.unbind(serviceIdentifier)
  }

  /**
   * Unbind a service identifier asynchronously.
   *
   * @param serviceIdentifier - The service identifier to unbind
   * @returns A promise that resolves when the unbinding is complete
   */
  public unbindAsync(serviceIdentifier: interfaces.ServiceIdentifier<any>): Promise<void> {
    return this.inversifyContainer.unbindAsync(serviceIdentifier)
  }

  /**
   * Unbind all bindings.
   */
  public unbindAll(): void {
    this.inversifyContainer.unbindAll()
  }

  /**
   * Unbind all bindings asynchronously.
   *
   * @returns A promise that resolves when all unbindings are complete
   */
  public unbindAllAsync(): Promise<void> {
    return this.inversifyContainer.unbindAllAsync()
  }

  /**
   * Unbind a tagged binding.
   *
   * @param serviceIdentifier - The service identifier
   * @param key - The tag key
   * @param value - The tag value
   */
  public unbindTagged = <T>(
    serviceIdentifier: ServiceIdentifier<T>,
    key: string,
    value: any,
  ): void => {
    let bindings = this.inversifyContainer['_bindingDictionary'].get(serviceIdentifier)

    for (let binding of bindings) {
      const metadata = binding.constraint.metaData
      if (metadata && metadata.key === key && metadata.value === value) {
        this.inversifyContainer['_deactivateSingletons'](binding)
        let newBindings = bindings.filter((binding: any) => {
          return !(
            binding.constraint.metaData.key === key && binding.constraint.metaData.value === value
          )
        })
        this.inversifyContainer['_bindingDictionary']['_map'].set(serviceIdentifier, newBindings)
      }
    }
  }

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
  public bindTagged<T>(
    abstract: ServiceIdentifier<T>,
    concrete: any,
    tag: string,
    value: any,
    shared = false,
  ): IContainer {
    // Unbind if already bound with this tag
    if (this.inversifyContainer.isBoundTagged(abstract, tag, value)) {
      this.unbindTagged(abstract, tag, value)
    }

    let binding: interfaces.BindingWhenOnSyntax<T>

    if (typeof concrete === 'function') {
      binding = this.inversifyContainer.bind(abstract).toDynamicValue((context) => {
        return concrete(this)
      })

      if (shared) {
        // Fix: Cast to the correct type that has inSingletonScope
        ;(binding as unknown as interfaces.BindingInSyntax<T>).inSingletonScope()
      }
    } else {
      binding = this.inversifyContainer.bind(abstract).toConstantValue(concrete)
    }

    binding.whenTargetTagged(tag, value)

    return this as IContainer
  }

  /**
   * Register a shared binding in the container.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @returns The container instance
   */
  public singleton<T>(abstract: ServiceIdentifier<T>, concrete: any): IContainer {
    return this.bind(abstract, concrete, true) as IContainer
  }

  /**
   * Register an existing instance as shared in the container.
   *
   * @param abstract - The abstract type to bind
   * @param instance - The instance to register
   * @returns The container instance
   */
  public instance<T>(abstract: ServiceIdentifier<T>, instance: T): IContainer {
    // Unbind if already bound
    if (this.inversifyContainer.isBound(abstract)) {
      this.inversifyContainer.unbind(abstract)
    }

    this.inversifyContainer.bind(abstract).toConstantValue(instance)

    return this as IContainer
  }

  /**
   * Alias a type to a different name.
   *
   * @param abstract - The abstract type to alias
   * @param alias - The alias identifier
   * @returns The container instance
   */
  public alias<T>(abstract: ServiceIdentifier<T>, alias: ServiceIdentifier<T>): IContainer {
    this.aliases.set(alias, abstract)

    return this as IContainer
  }

  /**
   * Apply middleware to the container.
   *
   * @param middlewares - The middleware to apply
   * @returns The container instance
   */
  public applyMiddleware(...middlewares: interfaces.Middleware[]): IContainer {
    this.inversifyContainer.applyMiddleware(...middlewares)

    return this as IContainer
  }

  /**
   * Apply a custom metadata reader to the container.
   *
   * @param metadataReader - The metadata reader to apply
   * @returns The container instance
   */
  public applyCustomMetadataReader(metadataReader: interfaces.MetadataReader): IContainer {
    this.inversifyContainer.applyCustomMetadataReader(metadataReader)

    return this as IContainer
  }

  /**
   * Define a contextual binding.
   *
   * @param concrete - The concrete implementation that needs a dependency
   * @returns A builder for defining the contextual binding
   */
  public when(concrete: string | Function): any {
    // Note: Returning any since ContextualBindingBuilder is not defined in this file
    return { needs: (abstract: ServiceIdentifier) => ({ give: (implementation: any) => this }) }
  }

  /**
   * Register a contextual binding in the container.
   *
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   * @param tag - The tag for the binding
   * @returns The container instance
   * @internal
   */
  public registerContextualBinding(
    concrete: string,
    abstract: ServiceIdentifier,
    tag: string,
  ): IContainer {
    if (!this.contextualBindings.has(concrete)) {
      this.contextualBindings.set(concrete, new Map())
    }

    this.contextualBindings.get(concrete)!.set(abstract, tag)

    return this as IContainer
  }

  /**
   * Get the tag for a contextual binding.
   *
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns The tag for the binding, or undefined if not found
   * @private
   */
  private getContextualTag(concrete: string, abstract: ServiceIdentifier): string | undefined {
    return this.contextualBindings.get(concrete)?.get(abstract)
  }

  /**
   * Register an activation handler for a service.
   *
   * @param serviceIdentifier - The service identifier
   * @param onActivation - The activation handler
   */
  public onActivation<T>(
    serviceIdentifier: ServiceIdentifier<T>,
    onActivation: interfaces.BindingActivation<T>,
  ): void {
    this.inversifyContainer.onActivation(serviceIdentifier, onActivation)
  }

  /**
   * Register a deactivation handler for a service.
   *
   * @param serviceIdentifier - The service identifier
   * @param onDeactivation - The deactivation handler
   */
  public onDeactivation<T>(
    serviceIdentifier: ServiceIdentifier<T>,
    onDeactivation: interfaces.BindingDeactivation<T>,
  ): void {
    this.inversifyContainer.onDeactivation(serviceIdentifier, onDeactivation)
  }

  /**
   * Check if a service identifier is bound.
   *
   * @param serviceIdentifier - The service identifier to check
   * @returns True if the service identifier is bound, false otherwise
   */
  public isBound(serviceIdentifier: interfaces.ServiceIdentifier<unknown>): boolean {
    return this.inversifyContainer.isBound(serviceIdentifier)
  }

  /**
   * Check if a service identifier is bound in the current container (not in ancestors).
   *
   * @param serviceIdentifier - The service identifier to check
   * @returns True if the service identifier is bound in the current container, false otherwise
   */
  public isCurrentBound<T>(serviceIdentifier: ServiceIdentifier<T>): boolean {
    return this.inversifyContainer.isCurrentBound(serviceIdentifier)
  }

  /**
   * Check if a named binding is bound.
   *
   * @param serviceIdentifier - The service identifier to check
   * @param named - The name to check
   * @returns True if the named binding is bound, false otherwise
   */
  public isBoundNamed(
    serviceIdentifier: interfaces.ServiceIdentifier<any>,
    named: string | number | symbol,
  ): boolean {
    return this.inversifyContainer.isBoundNamed(serviceIdentifier, named)
  }

  /**
   * Check if a tagged binding is bound.
   *
   * @param serviceIdentifier - The service identifier to check
   * @param key - The tag key
   * @param value - The tag value
   * @returns True if the tagged binding is bound, false otherwise
   */
  public isBoundTagged(
    serviceIdentifier: interfaces.ServiceIdentifier<any>,
    key: string | number | symbol,
    value: unknown,
  ): boolean {
    return this.inversifyContainer.isBoundTagged(serviceIdentifier, key, value)
  }

  /**
   * Create a snapshot of the container's state.
   */
  public snapshot(): void {
    this.inversifyContainer.snapshot()
  }

  /**
   * Restore the container's state from a snapshot.
   */
  public restore(): void {
    this.inversifyContainer.restore()
  }

  /**
   * Create a child container.
   *
   * @param containerOptions - The container options
   * @returns A new child container
   */
  public createChild(containerOptions?: interfaces.ContainerOptions): IContainer {
    const childInversifyContainer = this.inversifyContainer.createChild(containerOptions)
    const childContainer = Container.make()

    // Replace the child's Inversify container with the one created by the parent
    Object.defineProperty(childContainer, 'inversifyContainer', {
      value: childInversifyContainer,
      writable: false,
      configurable: true,
    })

    return childContainer
  }

  /**
   * Resolve the given type from the container.
   *
   * @param abstract - The abstract type to resolve
   * @param parameters - Optional parameters to pass to the constructor (not used with Inversify)
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  public make<T>(abstract: ServiceIdentifier<T>, parameters: any[] = []): T {
    const resolvedAbstract = this.getAlias(abstract)

    if (!this.inversifyContainer.isBound(resolvedAbstract)) {
      throw new Error(`Binding not found for ${String(abstract)}`)
    }

    // Check for contextual binding
    const callerInfo = this.getCallerInfo()
    if (callerInfo) {
      const tag = this.getContextualTag(callerInfo, resolvedAbstract)
      if (tag) {
        return this.inversifyContainer.getTagged<T>(resolvedAbstract, tag, true)
      }
    }

    return this.inversifyContainer.get<T>(resolvedAbstract)
  }

  /**
   * Resolve the given type from the container asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @returns A promise that resolves to the resolved instance
   * @template T - The type of the resolved instance
   */
  public async makeAsync<T>(abstract: ServiceIdentifier<T>): Promise<T> {
    const resolvedAbstract = this.getAlias(abstract)

    if (!this.inversifyContainer.isBound(resolvedAbstract)) {
      throw new Error(`Binding not found for ${String(abstract)}`)
    }

    // Check for contextual binding
    const callerInfo = this.getCallerInfo()
    if (callerInfo) {
      const tag = this.getContextualTag(callerInfo, resolvedAbstract)
      if (tag) {
        return this.inversifyContainer.getTaggedAsync<T>(resolvedAbstract, tag, true)
      }
    }

    return this.inversifyContainer.getAsync<T>(resolvedAbstract)
  }

  /**
   * Get information about the caller.
   *
   * @returns The caller class name or undefined
   * @private
   */
  private getCallerInfo(): string | undefined {
    // This is a simplified implementation and may not work in all cases
    // A more robust implementation would use source maps or other techniques
    try {
      const stack = new Error().stack || ''
      const stackLines = stack.split('\n')

      // Skip the first few lines which are this method and make()
      for (let i = 3; i < stackLines.length; i++) {
        const line = stackLines[i]
        const match = line.match(/at\s+([\w.]+)/)
        if (match && match[1]) {
          return match[1].split('.')[0]
        }
      }
    } catch (e) {
      // Ignore errors in stack trace parsing
    }

    return undefined
  }

  /**
   * Resolve a tagged binding from the container.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  public makeTagged<T>(abstract: ServiceIdentifier<T>, tag: string, value: any): T {
    const resolvedAbstract = this.getAlias(abstract)

    if (!this.inversifyContainer.isBoundTagged(resolvedAbstract, tag, value)) {
      throw new Error(`Tagged binding not found for ${String(abstract)} with tag ${tag}=${value}`)
    }

    return this.inversifyContainer.getTagged<T>(resolvedAbstract, tag, value)
  }

  /**
   * Resolve a tagged binding from the container asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns A promise that resolves to the resolved instance
   * @template T - The type of the resolved instance
   */
  public async makeTaggedAsync<T>(
    abstract: ServiceIdentifier<T>,
    tag: string,
    value: any,
  ): Promise<T> {
    const resolvedAbstract = this.getAlias(abstract)

    if (!this.inversifyContainer.isBoundTagged(resolvedAbstract, tag, value)) {
      throw new Error(`Tagged binding not found for ${String(abstract)} with tag ${tag}=${value}`)
    }

    return this.inversifyContainer.getTaggedAsync<T>(resolvedAbstract, tag, value)
  }

  /**
   * Resolve a named binding from the container.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  public makeNamed<T>(abstract: ServiceIdentifier<T>, named: string | number | symbol): T {
    const resolvedAbstract = this.getAlias(abstract)

    if (!this.inversifyContainer.isBoundNamed(resolvedAbstract, named)) {
      throw new Error(`Named binding not found for ${String(abstract)} with name ${String(named)}`)
    }

    return this.inversifyContainer.getNamed<T>(resolvedAbstract, named)
  }

  /**
   * Resolve a named binding from the container asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns A promise that resolves to the resolved instance
   * @template T - The type of the resolved instance
   */
  public async makeNamedAsync<T>(
    abstract: ServiceIdentifier<T>,
    named: string | number | symbol,
  ): Promise<T> {
    const resolvedAbstract = this.getAlias(abstract)

    if (!this.inversifyContainer.isBoundNamed(resolvedAbstract, named)) {
      throw new Error(`Named binding not found for ${String(abstract)} with name ${String(named)}`)
    }

    return this.inversifyContainer.getNamedAsync<T>(resolvedAbstract, named)
  }

  /**
   * Resolve all bindings for a service identifier.
   *
   * @param abstract - The abstract type to resolve
   * @returns All resolved instances
   * @template T - The type of the resolved instances
   */
  public makeAll<T>(abstract: ServiceIdentifier<T>): T[] {
    const resolvedAbstract = this.getAlias(abstract)

    return this.inversifyContainer.getAll<T>(resolvedAbstract)
  }

  /**
   * Resolve all bindings for a service identifier asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @returns A promise that resolves to all resolved instances
   * @template T - The type of the resolved instances
   */
  public async makeAllAsync<T>(abstract: ServiceIdentifier<T>): Promise<T[]> {
    const resolvedAbstract = this.getAlias(abstract)

    return this.inversifyContainer.getAllAsync<T>(resolvedAbstract)
  }

  /**
   * Resolve all tagged bindings for a service identifier.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns All resolved instances
   * @template T - The type of the resolved instances
   */
  public makeAllTagged<T>(abstract: ServiceIdentifier<T>, tag: string, value: any): T[] {
    const resolvedAbstract = this.getAlias(abstract)

    return this.inversifyContainer.getAllTagged<T>(resolvedAbstract, tag, value)
  }

  /**
   * Resolve all tagged bindings for a service identifier asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param tag - The tag name
   * @param value - The tag value
   * @returns A promise that resolves to all resolved instances
   * @template T - The type of the resolved instances
   */
  public async makeAllTaggedAsync<T>(
    abstract: ServiceIdentifier<T>,
    tag: string,
    value: any,
  ): Promise<T[]> {
    const resolvedAbstract = this.getAlias(abstract)

    return this.inversifyContainer.getAllTaggedAsync<T>(resolvedAbstract, tag, value)
  }

  /**
   * Resolve all named bindings for a service identifier.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns All resolved instances
   * @template T - The type of the resolved instances
   */
  public makeAllNamed<T>(abstract: ServiceIdentifier<T>, named: string | number | symbol): T[] {
    const resolvedAbstract = this.getAlias(abstract)

    return this.inversifyContainer.getAllNamed<T>(resolvedAbstract, named)
  }

  /**
   * Resolve all named bindings for a service identifier asynchronously.
   *
   * @param abstract - The abstract type to resolve
   * @param named - The name
   * @returns A promise that resolves to all resolved instances
   * @template T - The type of the resolved instances
   */
  public async makeAllNamedAsync<T>(
    abstract: ServiceIdentifier<T>,
    named: string | number | symbol,
  ): Promise<T[]> {
    const resolvedAbstract = this.getAlias(abstract)

    return this.inversifyContainer.getAllNamedAsync<T>(resolvedAbstract, named)
  }

  /**
   * Resolve a class constructor.
   *
   * @param constructorFunction - The constructor function to resolve
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  public resolve<T>(constructorFunction: interfaces.Newable<T>): T {
    return this.inversifyContainer.resolve<T>(constructorFunction)
  }

  /**
   * Get the alias for an abstract if it exists.
   *
   * @param abstract - The abstract type
   * @returns The alias or the original abstract
   * @private
   */
  private getAlias<T>(abstract: ServiceIdentifier<T>): ServiceIdentifier<T> {
    return this.aliases.has(abstract)
      ? (this.aliases.get(abstract) as ServiceIdentifier<T>)
      : abstract
  }

  /**
   * Register a service provider with the container.
   *
   * @param provider - The service provider to register
   * @returns The container instance
   */
  public register(provider: IServiceProvider): IContainer {
    // Don't register the same provider twice
    if (this.serviceProviders.includes(provider)) {
      return this as IContainer
    }

    // Register the provider
    this.serviceProviders.push(provider)

    // Call the register method on the provider
    provider.register()

    return this as IContainer
  }

  /**
   * Boot the registered service providers.
   *
   * @returns The container instance
   */
  public boot(): IContainer {
    // Boot each service provider
    for (const provider of this.serviceProviders) {
      if (typeof provider.boot === 'function') {
        provider.boot()
      }
    }

    return this as IContainer
  }

  /**
   * Call the given callback with the container instance.
   *
   * @param callback - The callback to call
   * @returns The result of the callback
   * @template T - The return type of the callback
   */
  public call<T>(callback: (container: IContainer) => T): T {
    return callback(this as IContainer)
  }

  /**
   * Get all bindings registered in the container.
   *
   * @param serviceIdentifier - Optional service identifier to filter bindings
   * @returns An array of bindings
   */
  public getBindings(serviceIdentifier?: ServiceIdentifier<any>): interfaces.Binding<any>[] {
    // Access the internal binding dictionary from the Inversify container
    const bindingDictionary = (this.inversifyContainer as any)._bindingDictionary

    if (!bindingDictionary) {
      return []
    }

    if (serviceIdentifier) {
      // If a service identifier is provided, return only bindings for that service
      return bindingDictionary.hasKey(serviceIdentifier)
        ? bindingDictionary.get(serviceIdentifier)
        : []
    } else {
      // Otherwise, return all bindings
      const allBindings: interfaces.Binding<any>[] = []

      // Get all keys from the binding dictionary
      const keys = bindingDictionary.keys()

      // Collect all bindings for each key
      for (const key of keys) {
        const bindings = bindingDictionary.get(key)
        allBindings.push(...bindings)
      }

      return allBindings
    }
  }
}
