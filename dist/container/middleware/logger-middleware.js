'use strict';

// src/container/middleware/logger-middleware.ts
function loggerMiddleware(logger = console.log) {
  return (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      const id = serviceIdentifier.toString();
      logger(`Resolving: ${id}`);
      const result = next(args);
      logger(`Resolved: ${id}`);
      return result;
    };
  };
}
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=logger-middleware.js.map
//# sourceMappingURL=logger-middleware.js.map