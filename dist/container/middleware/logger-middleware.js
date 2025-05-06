'use strict';

/**
 * @pixielity/ts-mixins v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


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

exports.loggerMiddleware = loggerMiddleware;
//# sourceMappingURL=logger-middleware.js.map
//# sourceMappingURL=logger-middleware.js.map