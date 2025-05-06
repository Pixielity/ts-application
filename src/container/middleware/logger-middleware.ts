import type { interfaces } from 'inversify'

/**
 * Create a logger middleware for the Inversify container
 *
 * @param logger - The logger function (defaults to console.log)
 * @returns The logger middleware
 */
export function loggerMiddleware(
  logger: (message: string) => void = console.log,
): interfaces.Middleware {
  return (next: interfaces.Next) => {
    return (args: interfaces.NextArgs) => {
      const { serviceIdentifier } = args
      const id = serviceIdentifier.toString()

      logger(`Resolving: ${id}`)

      const result = next(args)

      logger(`Resolved: ${id}`)

      return result
    }
  }
}
