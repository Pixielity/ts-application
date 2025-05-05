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

// src/container/metrics/metrics.ts
var MetricsCollector = class _MetricsCollector {
  /**
   * Create a new Metrics Collector instance.
   *
   * @returns A new Metrics Collector instance
   */
  static make() {
    return new _MetricsCollector();
  }
  /**
   * Record a timing metric
   *
   * @param name - The metric name
   * @param value - The metric value
   * @param tags - The metric tags
   */
  timing(name, value, tags = {}) {
    const tagsString = Object.entries(tags).map(([key, value2]) => `${key}=${value2}`).join(",");
    console.log(`TIMING ${name}=${value}ms ${tagsString}`);
  }
  /**
   * Increment a counter metric
   *
   * @param name - The metric name
   * @param value - The increment value
   * @param tags - The metric tags
   */
  increment(name, value = 1, tags = {}) {
    const tagsString = Object.entries(tags).map(([key, value2]) => `${key}=${value2}`).join(",");
    console.log(`COUNT ${name}=${value} ${tagsString}`);
  }
};

// src/container/middleware/metrics-middleware.ts
function metricsMiddleware(collector = MetricsCollector.make()) {
  return (next) => {
    return (args) => {
      const { serviceIdentifier } = args;
      const id = serviceIdentifier.toString();
      collector.increment("container.resolution", 1, {
        service: id
      });
      const startTime = Date.now();
      const result = next(args);
      const endTime = Date.now();
      const duration = endTime - startTime;
      collector.timing("container.resolution_time", duration, {
        service: id
      });
      return result;
    };
  };
}
if (typeof module !== "undefined") { module.exports = module.exports.default; }

export { cacheMiddleware, createCacheMiddleware, loggerMiddleware, metricsMiddleware };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map