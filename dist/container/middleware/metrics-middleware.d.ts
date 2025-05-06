import { interfaces } from 'inversify';
import { MetricsCollector } from '../metrics/metrics.js';
import '../metrics/metrics.interface.js';

/**
 * Create a metrics middleware for the Inversify container
 *
 * @param collector - The metrics collector
 * @returns The metrics middleware
 */
declare function metricsMiddleware(collector?: MetricsCollector): interfaces.Middleware;

export { metricsMiddleware };
