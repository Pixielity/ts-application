export { loggerMiddleware } from './logger-middleware.js';
export { cacheMiddleware, createCacheMiddleware } from './cache-middleware.js';
export { metricsMiddleware } from './metrics-middleware.js';
import 'inversify';
import '../metrics/metrics.js';
import '../metrics/metrics.interface.js';
