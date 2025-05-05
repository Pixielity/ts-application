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

export { metricsMiddleware };
//# sourceMappingURL=metrics-middleware.mjs.map
//# sourceMappingURL=metrics-middleware.mjs.map