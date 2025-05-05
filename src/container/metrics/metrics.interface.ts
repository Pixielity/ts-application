/**
 * Metrics collector interface
 */
export interface IMetricsCollector {
  /**
   * Record a timing metric
   *
   * @param name - The metric name
   * @param value - The metric value
   * @param tags - The metric tags
   */
  timing(name: string, value: number, tags?: Record<string, string>): void

  /**
   * Increment a counter metric
   *
   * @param name - The metric name
   * @param value - The increment value
   * @param tags - The metric tags
   */
  increment(name: string, value?: number, tags?: Record<string, string>): void
}
