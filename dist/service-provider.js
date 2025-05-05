'use strict';

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
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.ServiceProvider = ServiceProvider;
//# sourceMappingURL=service-provider.js.map
//# sourceMappingURL=service-provider.js.map