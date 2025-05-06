import { interfaces } from 'inversify';
import { MetricsCollector } from '../metrics/metrics.mjs';
import '../metrics/metrics.interface.mjs';

/**
 * Create a metrics middleware for the Inversify container
 *
 * @param collector - The metrics collector
 * @returns The metrics middleware
 */
declare function metricsMiddleware(collector?: MetricsCollector): interfaces.Middleware;

export { metricsMiddleware };
