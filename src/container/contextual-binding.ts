import type { IContainer, ServiceIdentifier } from '@pixielity/ts-types'
import { ContextualBindingImplementationBuilder } from './contextual-builder'

/**
 * Contextual binding builder for the "needs" part of the binding
 */
export class ContextualBindingBuilder {
  /**
   * The container instance
   */
  private container: IContainer

  /**
   * The concrete implementation that needs a dependency
   */
  private concrete: string | Function

  /**
   * Create a new contextual binding builder
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   */
  constructor(container: IContainer, concrete: string | Function) {
    this.container = container
    this.concrete = concrete
  }

  /**
   * Create a new contextual binding builder instance
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @returns A new contextual binding builder instance
   */
  public static make(container: IContainer, concrete: string | Function): ContextualBindingBuilder {
    return new ContextualBindingBuilder(container, concrete)
  }

  /**
   * Define the abstract type that the contextual binding is for
   *
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns A builder for defining the implementation
   */
  public needs(abstract: ServiceIdentifier | Function): ContextualBindingImplementationBuilder {
    return ContextualBindingImplementationBuilder.make(this.container, this.concrete, abstract)
  }
}
