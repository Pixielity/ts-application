import { IMetricsCollector } from './metrics.interface'

/**
 * Default metrics collector that logs to console
 */
export class MetricsCollector implements IMetricsCollector {
  /**
   * Create a new Metrics Collector instance.
   *
   * @returns A new Metrics Collector instance
   */
  public static make(): IMetricsCollector {
    return new MetricsCollector()
  }

  /**
   * Record a timing metric
   *
   * @param name - The metric name
   * @param value - The metric value
   * @param tags - The metric tags
   */
  public timing(name: string, value: number, tags: Record<string, string> = {}): void {
    const tagsString = Object.entries(tags)
      .map(([key, value]) => `${key}=${value}`)
      .join(',')

    console.log(`TIMING ${name}=${value}ms ${tagsString}`)
  }

  /**
   * Increment a counter metric
   *
   * @param name - The metric name
   * @param value - The increment value
   * @param tags - The metric tags
   */
  public increment(name: string, value = 1, tags: Record<string, string> = {}): void {
    const tagsString = Object.entries(tags)
      .map(([key, value]) => `${key}=${value}`)
      .join(',')

    console.log(`COUNT ${name}=${value} ${tagsString}`)
  }
}
