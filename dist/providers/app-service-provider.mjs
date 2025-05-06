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

// src/providers/app-service-provider.ts
var AppServiceProvider = class extends ServiceProvider {
  /**
   * Register any application services.
   */
  register() {
  }
  /**
   * Bootstrap any application services.
   */
  boot() {
  }
};
var app_service_provider_default = AppServiceProvider;

export { AppServiceProvider, app_service_provider_default as default };
//# sourceMappingURL=app-service-provider.mjs.map
//# sourceMappingURL=app-service-provider.mjs.map