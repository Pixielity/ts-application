import type { interfaces } from 'inversify'
import { MetricsCollector } from '../metrics'

/**
 * Create a metrics middleware for the Inversify container
 *
 * @param collector - The metrics collector
 * @returns The metrics middleware
 */
export function metricsMiddleware(
  collector: MetricsCollector = MetricsCollector.make(),
): interfaces.Middleware {
  return (next: interfaces.Next) => {
    return (args: interfaces.NextArgs) => {
      const { serviceIdentifier } = args
      const id = serviceIdentifier.toString()

      // Increment the resolution counter
      collector.increment('container.resolution', 1, {
        service: id,
      })

      // Measure the resolution time
      const startTime = Date.now()

      const result = next(args)

      const endTime = Date.now()
      const duration = endTime - startTime

      // Record the resolution time
      collector.timing('container.resolution_time', duration, {
        service: id,
      })

      return result
    }
  }
}
