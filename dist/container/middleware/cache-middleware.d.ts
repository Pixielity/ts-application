import { interfaces } from 'inversify';

/**
 * Create a cache middleware for the Inversify container
 *
 * @param shouldCache - Function to determine if a service should be cached (defaults to true for all)
 * @returns The cache middleware
 */
declare function cacheMiddleware(shouldCache?: (serviceIdentifier: interfaces.ServiceIdentifier<any>) => boolean): interfaces.Middleware;
/**
 * Create a cache middleware with a flush method
 *
 * @param shouldCache - Function to determine if a service should be cached
 * @returns The cache middleware and flush function
 */
declare function createCacheMiddleware(shouldCache?: (serviceIdentifier: interfaces.ServiceIdentifier<any>) => boolean): {
    middleware: interfaces.Middleware;
    flush: (serviceIdentifier?: interfaces.ServiceIdentifier<any>) => void;
};

export { cacheMiddleware, createCacheMiddleware };
