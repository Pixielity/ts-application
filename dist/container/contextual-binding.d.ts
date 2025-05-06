import { IContainer, ServiceIdentifier } from '@pixielity/ts-types';
import { ContextualBindingImplementationBuilder } from './contextual-builder.js';

/**
 * Contextual binding builder for the "needs" part of the binding
 */
declare class ContextualBindingBuilder {
    /**
     * The container instance
     */
    private container;
    /**
     * The concrete implementation that needs a dependency
     */
    private concrete;
    /**
     * Create a new contextual binding builder
     *
     * @param container - The container instance
     * @param concrete - The concrete implementation that needs a dependency
     */
    constructor(container: IContainer, concrete: string | Function);
    /**
     * Create a new contextual binding builder instance
     *
     * @param container - The container instance
     * @param concrete - The concrete implementation that needs a dependency
     * @returns A new contextual binding builder instance
     */
    static make(container: IContainer, concrete: string | Function): ContextualBindingBuilder;
    /**
     * Define the abstract type that the contextual binding is for
     *
     * @param abstract - The abstract type that the concrete implementation needs
     * @returns A builder for defining the implementation
     */
    needs(abstract: ServiceIdentifier | Function): ContextualBindingImplementationBuilder;
}

export { ContextualBindingBuilder };
