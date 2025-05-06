/**
 * @pixielity/ts-application v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/service-provider.ts
var ServiceProvider = class _ServiceProvider {
  /**
   * Create a new service provider instance.
   *
   * @param app - The application container instance
   */
  constructor(app) {
    this.app = app;
  }
  /**
   * Static factory method to create a new instance of the service provider.
   *
   * @param app - The application container instance
   * @param args - Additional arguments to be passed to the subclass constructor
   * @returns A new instance of the subclass
   */
  static make(app, ...args) {
    if (this === _ServiceProvider) {
      throw new Error("Cannot instantiate an abstract class directly.");
    }
    return new this(app, ...args);
  }
};

export { ServiceProvider };
//# sourceMappingURL=service-provider.mjs.map
//# sourceMappingURL=service-provider.mjs.map