'use strict';

// src/container/middleware/cache-middleware.ts
function cacheMiddleware(shouldCache = () => true) {
  const cache = /* @__PURE__ */ new Map();
  return (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      if (cache.has(serviceIdentifier)) {
        return cache.get(serviceIdentifier);
      }
      const result = next(args);
      if (shouldCache(serviceIdentifier)) {
        cache.set(serviceIdentifier, result);
      }
      return result;
    };
  };
}
function createCacheMiddleware(shouldCache) {
  const cache = /* @__PURE__ */ new Map();
  const middleware = (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      if (cache.has(serviceIdentifier)) {
        return cache.get(serviceIdentifier);
      }
      const result = next(args);
      if (!shouldCache || shouldCache(serviceIdentifier)) {
        cache.set(serviceIdentifier, result);
      }
      return result;
    };
  };
  const flush = (serviceIdentifier) => {
    if (serviceIdentifier) {
      cache.delete(serviceIdentifier);
    } else {
      cache.clear();
    }
  };
  return { middleware, flush };
}
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.cacheMiddleware = cacheMiddleware;
exports.createCacheMiddleware = createCacheMiddleware;
//# sourceMappingURL=cache-middleware.js.map
//# sourceMappingURL=cache-middleware.js.map