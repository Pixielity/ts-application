import { IContainer, ServiceIdentifier } from '@pixielity/ts-types';

/**
 * Contextual binding builder for the "give" part of the binding
 */
declare class ContextualBindingImplementationBuilder {
    /**
     * The container instance
     */
    private container;
    /**
     * The concrete implementation that needs a dependency
     */
    private concrete;
    /**
     * The abstract type that the concrete implementation needs
     */
    private abstract;
    /**
     * Create a new contextual binding implementation builder
     *
     * @param container - The container instance
     * @param concrete - The concrete implementation that needs a dependency
     * @param abstract - The abstract type that the concrete implementation needs
     */
    constructor(container: IContainer, concrete: string | Function, abstract: ServiceIdentifier | Function);
    /**
     * Create a new contextual binding implementation builder instance
     *
     * @param container - The container instance
     * @param concrete - The concrete implementation that needs a dependency
     * @param abstract - The abstract type that the concrete implementation needs
     * @returns A new contextual binding implementation builder instance
     */
    static make(container: IContainer, concrete: string | Function, abstract: ServiceIdentifier | Function): ContextualBindingImplementationBuilder;
    /**
     * Define the implementation to use for the contextual binding
     *
     * @param implementation - The implementation to use
     * @returns The container instance
     */
    give(implementation: any): IContainer;
    /**
     * Check if a function is a class
     *
     * @param func - The function to check
     * @returns True if the function is a class, false otherwise
     * @private
     */
    private isClass;
}

export { ContextualBindingImplementationBuilder };
