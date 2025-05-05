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

export { AppServiceProvider, app_service_provider_default as default };
//# sourceMappingURL=app-service-provider.mjs.map
//# sourceMappingURL=app-service-provider.mjs.map