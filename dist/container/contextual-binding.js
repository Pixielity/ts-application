'use strict';

// src/container/contextual-builder.ts
var ContextualBindingImplementationBuilder = class _ContextualBindingImplementationBuilder {
  /**
   * Create a new contextual binding implementation builder
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   */
  constructor(container, concrete, abstract) {
    this.container = container;
    this.concrete = concrete;
    this.abstract = abstract;
  }
  /**
   * Create a new contextual binding implementation builder instance
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns A new contextual binding implementation builder instance
   */
  static make(container, concrete, abstract) {
    return new _ContextualBindingImplementationBuilder(container, concrete, abstract);
  }
  /**
   * Define the implementation to use for the contextual binding
   *
   * @param implementation - The implementation to use
   * @returns The container instance
   */
  give(implementation) {
    const abstractKey = typeof this.abstract === "string" ? this.abstract : typeof this.abstract === "symbol" ? this.abstract.toString() : typeof this.abstract === "function" ? this.abstract.name : "";
    const concreteKey = typeof this.concrete === "string" ? this.concrete : this.concrete.name;
    const tag = `contextual.${concreteKey}.${abstractKey}`;
    if (typeof implementation === "function" && !this.isClass(implementation)) {
      const symbol = Symbol.for(abstractKey);
      if (this.container.isBoundTagged(symbol, tag, true)) {
        this.container.unbind(symbol);
      }
      const binding = this.container.bind(symbol);
      binding.toDynamicValue(() => implementation(this.container)).whenTargetTagged(tag, true);
    } else {
      const instanceKey = `${abstractKey}.${tag}`;
      this.container.instance(instanceKey, implementation);
      const symbol = Symbol.for(abstractKey);
      if (this.container.isBoundTagged(symbol, tag, true)) {
        this.container.unbind(symbol);
      }
      const binding = this.container.bind(abstractKey);
      binding.toDynamicValue((context) => context.container.get(instanceKey)).whenTargetTagged(tag, true);
    }
    this.container.registerContextualBinding(concreteKey, abstractKey, tag);
    return this.container;
  }
  /**
   * Check if a function is a class
   *
   * @param func - The function to check
   * @returns True if the function is a class, false otherwise
   * @private
   */
  isClass(func) {
    return typeof func === "function" && /^class\s/.test(Function.prototype.toString.call(func));
  }
};

// src/container/contextual-binding.ts
var ContextualBindingBuilder = class _ContextualBindingBuilder {
  /**
   * Create a new contextual binding builder
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   */
  constructor(container, concrete) {
    this.container = container;
    this.concrete = concrete;
  }
  /**
   * Create a new contextual binding builder instance
   *
   * @param container - The container instance
   * @param concrete - The concrete implementation that needs a dependency
   * @returns A new contextual binding builder instance
   */
  static make(container, concrete) {
    return new _ContextualBindingBuilder(container, concrete);
  }
  /**
   * Define the abstract type that the contextual binding is for
   *
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns A builder for defining the implementation
   */
  needs(abstract) {
    return ContextualBindingImplementationBuilder.make(this.container, this.concrete, abstract);
  }
};
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.ContextualBindingBuilder = ContextualBindingBuilder;
//# sourceMappingURL=contextual-binding.js.map
//# sourceMappingURL=contextual-binding.js.map