import { interfaces } from 'inversify';

/**
 * Create a logger middleware for the Inversify container
 *
 * @param logger - The logger function (defaults to console.log)
 * @returns The logger middleware
 */
declare function loggerMiddleware(logger?: (message: string) => void): interfaces.Middleware;

export { loggerMiddleware };
