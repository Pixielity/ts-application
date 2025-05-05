import type { IContainer, ServiceIdentifier } from '@pixielity/ts-types'
import type { interfaces } from 'inversify'

/**
 * Contextual binding builder for the "give" part of the binding
 */
export class ContextualBindingImplementationBuilder {
  /**
   * The container instance
   */
  private container: IContainer

  /**
   * The concrete implementation that needs a dependency
   */
  private concrete: string | Function

  /**
   * The abstract type that the concrete implementation needs
   */
  private abstract: ServiceIdentifier | Function

  /**
   * Create a new contextual binding implementation builder
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   */
  constructor(
    container: IContainer,
    concrete: string | Function,
    abstract: ServiceIdentifier | Function,
  ) {
    this.container = container
    this.concrete = concrete
    this.abstract = abstract
  }

  /**
   * Create a new contextual binding implementation builder instance
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns A new contextual binding implementation builder instance
   */
  public static make(
    container: IContainer,
    concrete: string | Function,
    abstract: ServiceIdentifier | Function,
  ): ContextualBindingImplementationBuilder {
    return new ContextualBindingImplementationBuilder(container, concrete, abstract)
  }

  /**
   * Define the implementation to use for the contextual binding
   *
   * @param implementation - The implementation to use
   * @returns The container instance
   */
  public give(implementation: any): IContainer {
    const abstractKey =
      typeof this.abstract === 'string'
        ? this.abstract
        : typeof this.abstract === 'symbol'
          ? this.abstract.toString()
          : typeof this.abstract === 'function'
            ? this.abstract.name
            : ''
    const concreteKey = typeof this.concrete === 'string' ? this.concrete : this.concrete.name

    // Create a unique tag for this contextual binding
    const tag = `contextual.${concreteKey}.${abstractKey}`

    // Register the implementation with the container
    if (typeof implementation === 'function' && !this.isClass(implementation)) {
      // If it's a factory function, use Inversify's binding system directly
      const symbol = Symbol.for(abstractKey)

      // Unbind if already bound with this tag
      if (this.container.isBoundTagged(symbol, tag, true)) {
        this.container.unbind(symbol)
      }

      // Create a new binding with the tag
      const binding = this.container.bind(symbol) as unknown as interfaces.BindingToSyntax<any>
      binding.toDynamicValue(() => implementation(this.container)).whenTargetTagged(tag, true)
    } else {
      // If it's a class or instance, register it as a constant value
      const instanceKey = `${abstractKey}.${tag}`
      this.container.instance(instanceKey, implementation)

      // Create a binding that resolves to the registered instance
      const symbol = Symbol.for(abstractKey)

      // Unbind if already bound with this tag
      if (this.container.isBoundTagged(symbol, tag, true)) {
        this.container.unbind(symbol)
      }

      const binding = this.container.bind(abstractKey) as unknown as interfaces.BindingToSyntax<any>
      binding
        .toDynamicValue((context: interfaces.Context) => context.container.get(instanceKey))
        .whenTargetTagged(tag, true)
    }

    // Register the contextual binding in the container
    this.container.registerContextualBinding(concreteKey, abstractKey, tag)

    return this.container
  }

  /**
   * Check if a function is a class
   *
   * @param func - The function to check
   * @returns True if the function is a class, false otherwise
   * @private
   */
  private isClass(func: Function): boolean {
    return typeof func === 'function' && /^class\s/.test(Function.prototype.toString.call(func))
  }
}
