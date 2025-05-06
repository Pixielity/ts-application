/**
 * @pixielity/ts-application v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


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

export { cacheMiddleware, createCacheMiddleware };
//# sourceMappingURL=cache-middleware.mjs.map
//# sourceMappingURL=cache-middleware.mjs.map