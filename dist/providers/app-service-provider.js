'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// src/service-provider.ts
var ServiceProvider = class {
  /**
   * Create a new service provider instance.
   *
   * @param app - The application container instance
   */
  constructor(app) {
    this.app = app;
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
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.AppServiceProvider = AppServiceProvider;
exports.default = app_service_provider_default;
//# sourceMappingURL=app-service-provider.js.map
//# sourceMappingURL=app-service-provider.js.map