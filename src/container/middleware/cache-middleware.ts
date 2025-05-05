import type { interfaces } from 'inversify'

/**
 * Create a cache middleware for the Inversify container
 *
 * @param shouldCache - Function to determine if a service should be cached (defaults to true for all)
 * @returns The cache middleware
 */
export function cacheMiddleware(
  shouldCache: (serviceIdentifier: interfaces.ServiceIdentifier<any>) => boolean = () => true,
): interfaces.Middleware {
  const cache = new Map<interfaces.ServiceIdentifier<any>, any>()

  return (next: interfaces.Next) => {
    return (args: interfaces.NextArgs) => {
      const { serviceIdentifier } = args

      // Check if the service is already cached
      if (cache.has(serviceIdentifier)) {
        return cache.get(serviceIdentifier)
      }

      // Get the result from the next middleware
      const result = next(args)

      // Cache the result if needed
      if (shouldCache(serviceIdentifier)) {
        cache.set(serviceIdentifier, result)
      }

      return result
    }
  }
}

/**
 * Create a cache middleware with a flush method
 *
 * @param shouldCache - Function to determine if a service should be cached
 * @returns The cache middleware and flush function
 */
export function createCacheMiddleware(
  shouldCache?: (serviceIdentifier: interfaces.ServiceIdentifier<any>) => boolean,
): {
  middleware: interfaces.Middleware
  flush: (serviceIdentifier?: interfaces.ServiceIdentifier<any>) => void
} {
  const cache = new Map<interfaces.ServiceIdentifier<any>, any>()

  const middleware = (next: interfaces.Next) => {
    return (args: interfaces.NextArgs) => {
      const { serviceIdentifier } = args

      // Check if the service is already cached
      if (cache.has(serviceIdentifier)) {
        return cache.get(serviceIdentifier)
      }

      // Get the result from the next middleware
      const result = next(args)

      // Cache the result if needed
      if (!shouldCache || shouldCache(serviceIdentifier)) {
        cache.set(serviceIdentifier, result)
      }

      return result
    }
  }

  const flush = (serviceIdentifier?: interfaces.ServiceIdentifier<any>) => {
    if (serviceIdentifier) {
      cache.delete(serviceIdentifier)
    } else {
      cache.clear()
    }
  }

  return { middleware, flush }
}
