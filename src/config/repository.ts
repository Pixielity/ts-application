import { injectable } from 'inversify'
import { detectEnvironment } from './environment'
import { ConfigCache } from './cache'
import { ConfigValidator } from './validator'
import type { ConfigEnvironment } from '@pixielity/ts-types'
import type {
  IConfigRepository,
  IConfigRepositoryOptions,
  IConfigSchema,
} from '@pixielity/ts-types'

/**
 * Production-ready configuration repository that provides access to application configuration values.
 *
 * @example
 * ```typescript
 * const config = ConfigRepository.make({
 *   items: {
 *     app: {
 *       name: 'My App',
 *       debug: true
 *     }
 *   },
 *   validate: true,
 *   schemas: {
 *     app: {
 *       type: 'object',
 *       properties: {
 *         name: { type: 'string' },
 *         debug: { type: 'boolean' }
 *       }
 *     }
 *   }
 * });
 *
 * const appName = config.getString('app.name'); // 'My App'
 * const debug = config.getBoolean('app.debug'); // true
 * ```
 */
@injectable()
export class ConfigRepository implements IConfigRepository {
  /**
   * The configuration items.
   * @private
   */
  private items: Record<string, any> = {}

  /**
   * The environment variables.
   * @private
   */
  private env: Record<string, string> = {}

  /**
   * The environment variable prefix.
   * @private
   */
  private envPrefix = 'APP_'

  /**
   * The configuration cache.
   * @private
   */
  private cache: ConfigCache

  /**
   * The configuration validator.
   * @private
   */
  private validator: ConfigValidator

  /**
   * The current environment.
   * @private
   */
  private environment: ConfigEnvironment

  /**
   * Whether to validate configuration values.
   * @private
   */
  private shouldValidate = false

  /**
   * Create a new configuration repository.
   *
   * @param options - The configuration repository options
   */
  constructor(options: IConfigRepositoryOptions = {}) {
    // Set initial items
    this.items = options.items || {}

    // Set environment variable prefix
    this.envPrefix = options.envPrefix || 'APP_'

    // Load environment variables
    this.loadEnvironmentVariables()

    // Detect environment
    this.environment = detectEnvironment()

    // Initialize cache
    this.cache = ConfigCache.make(options.cache !== false)

    // Initialize validator
    this.validator = ConfigValidator.make(options.schemas || {})
    this.shouldValidate = options.validate === true
  }

  /**
   * Create a new configuration repository.
   *
   * @param options - The configuration repository options
   * @returns A new configuration repository
   */
  public static make(options: IConfigRepositoryOptions = {}): ConfigRepository {
    return new ConfigRepository(options)
  }

  /**
   * Load environment variables.
   * @private
   */
  private loadEnvironmentVariables(): void {
    // In a browser or Next.js environment, we can't use dotenv
    // Instead, we'll use process.env directly
    if (typeof process !== 'undefined' && process.env) {
      this.env = Object.fromEntries(
        Object.entries(process.env).filter(([_, value]) => value !== undefined) as [
          string,
          string,
        ][],
      )
    } else {
      // In a pure browser environment, env vars might be exposed differently
      // or not at all, so we use an empty object
      this.env = {}
    }
  }

  /**
   * Get the current environment.
   *
   * @returns The current environment
   */
  public getEnvironment(): ConfigEnvironment {
    return this.environment
  }

  /**
   * Set the configuration validator schemas.
   *
   * @param schemas - The configuration schemas
   */
  public setSchemas(schemas: Record<string, IConfigSchema>): void {
    this.validator.setSchemas(schemas)
  }

  /**
   * Enable or disable validation.
   *
   * @param enable - Whether to enable validation
   */
  public setValidation(enable: boolean): void {
    this.shouldValidate = enable
  }

  /**
   * Enable or disable caching.
   *
   * @param enable - Whether to enable caching
   */
  public setCaching(enable: boolean): void {
    this.cache.setEnabled(enable)
  }

  /**
   * Clear the configuration cache.
   */
  public clearCache(): void {
    this.cache.clear()
  }

  /**
   * Determine if the given configuration value exists.
   *
   * @param key - The configuration key
   * @returns True if the configuration value exists, false otherwise
   */
  public has(key: string): boolean {
    return this.get(key) !== undefined
  }

  /**
   * Get the specified configuration value.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The configuration value or the default value
   * @template T - The type of the configuration value
   */
  public get<T>(key: string, defaultValue?: T): T {
    // Check cache first if enabled
    const cachedValue = this.cache.get<T>(key)
    if (cachedValue !== undefined) {
      return cachedValue
    }

    // Check for environment variable first (with configured prefix)
    const envKey = `${this.envPrefix}${key.toUpperCase().replace(/\./g, '_')}`
    if (this.env[envKey] !== undefined) {
      const value = this.parseEnvValue(this.env[envKey]) as T
      this.cache.set(key, value)
      return value
    }

    // Handle dot notation
    const segments = key.split('.')
    let current: any = this.items

    for (const segment of segments) {
      if (current === undefined || current === null) {
        this.cache.set(key, defaultValue)
        return defaultValue as T
      }

      current = current[segment]
    }

    // Validate if enabled
    if (this.shouldValidate && current !== undefined) {
      const rootKey = segments[0]
      this.validator.validate(rootKey, this.items[rootKey])
    }

    const result = current !== undefined ? current : (defaultValue as T)
    this.cache.set(key, result)
    return result
  }

  /**
   * Get a string value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The string value or the default value
   */
  public getString(key: string, defaultValue?: string): string {
    const value = this.get<any>(key, defaultValue)
    if (value === undefined || value === null) {
      return defaultValue || ''
    }
    return String(value)
  }

  /**
   * Get a number value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The number value or the default value
   */
  public getNumber(key: string, defaultValue?: number): number {
    const value = this.get<any>(key, defaultValue)
    if (value === undefined || value === null) {
      return defaultValue || 0
    }
    const num = Number(value)
    return isNaN(num) ? defaultValue || 0 : num
  }

  /**
   * Get an integer value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The integer value or the default value
   */
  public getInt(key: string, defaultValue?: number): number {
    const value = this.getNumber(key, defaultValue)
    return Math.floor(value)
  }

  /**
   * Get a float value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The float value or the default value
   */
  public getFloat(key: string, defaultValue?: number): number {
    return this.getNumber(key, defaultValue)
  }

  /**
   * Get a boolean value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The boolean value or the default value
   */
  public getBoolean(key: string, defaultValue?: boolean): boolean {
    const value = this.get<any>(key, defaultValue)
    if (value === undefined || value === null) {
      return defaultValue || false
    }
    if (typeof value === 'boolean') {
      return value
    }
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true' || value === '1'
    }
    if (typeof value === 'number') {
      return value === 1
    }
    return Boolean(value)
  }

  /**
   * Get an array value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The array value or the default value
   * @template T - The type of the array elements
   */
  public getArray<T = any>(key: string, defaultValue?: T[]): T[] {
    const value = this.get<any>(key, defaultValue)
    if (value === undefined || value === null) {
      return defaultValue || []
    }
    if (Array.isArray(value)) {
      return value
    }
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value)
        return Array.isArray(parsed) ? parsed : [value as unknown as T]
      } catch (e) {
        return [value as unknown as T]
      }
    }
    return [value as T]
  }

  /**
   * Get an object value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The object value or the default value
   * @template T - The type of the object
   */
  public getObject<T = Record<string, any>>(key: string, defaultValue?: T): T {
    const value = this.get<any>(key, defaultValue)
    if (value === undefined || value === null) {
      return defaultValue || ({} as T)
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
      return value as T
    }
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value)
        return typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : ({} as T)
      } catch (e) {
        return {} as T
      }
    }
    return {} as T
  }

  /**
   * Parse an environment variable value.
   *
   * @param value - The environment variable value
   * @returns The parsed value
   * @private
   */
  private parseEnvValue(value: string): any {
    // Convert "true" and "false" strings to booleans
    if (value.toLowerCase() === 'true') return true
    if (value.toLowerCase() === 'false') return false

    // Convert numeric strings to numbers
    if (/^-?\d+$/.test(value)) return Number.parseInt(value, 10)
    if (/^-?\d+\.\d+$/.test(value)) return Number.parseFloat(value)

    // Parse JSON if the value looks like JSON
    if (
      (value.startsWith('{') && value.endsWith('}')) ||
      (value.startsWith('[') && value.endsWith(']'))
    ) {
      try {
        return JSON.parse(value)
      } catch (e) {
        // If parsing fails, return the original string
      }
    }

    // Return the original string for all other values
    return value
  }

  /**
   * Set a given configuration value.
   *
   * @param key - The configuration key
   * @param value - The configuration value
   */
  public set(key: string, value: any): void {
    // Handle dot notation
    const segments = key.split('.')
    let current = this.items

    // Navigate to the correct location
    for (let i = 0; i < segments.length - 1; i++) {
      const segment = segments[i]

      // Create nested objects if they don't exist
      if (current[segment] === undefined) {
        current[segment] = {}
      }

      current = current[segment]
    }

    // Set the value
    current[segments[segments.length - 1]] = value

    // Validate if enabled
    if (this.shouldValidate) {
      const rootKey = segments[0]
      this.validator.validate(rootKey, this.items[rootKey])
    }

    // Clear the cache for this key
    this.cache.delete(key)
  }

  /**
   * Get all of the configuration items.
   *
   * @returns All configuration items
   */
  public all(): Record<string, any> {
    return { ...this.items }
  }

  /**
   * Merge configuration items.
   *
   * @param items - The items to merge
   */
  public merge(items: Record<string, any>): void {
    this.items = this.mergeDeep(this.items, items)
    this.clearCache()
  }

  /**
   * Deep merge two objects.
   *
   * @param target - The target object
   * @param source - The source object
   * @returns The merged object
   * @private
   */
  private mergeDeep(target: any, source: any): any {
    const output = { ...target }

    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] })
          } else {
            output[key] = this.mergeDeep(target[key], source[key])
          }
        } else {
          Object.assign(output, { [key]: source[key] })
        }
      })
    }

    return output
  }

  /**
   * Check if a value is an object.
   *
   * @param item - The value to check
   * @returns Whether the value is an object
   * @private
   */
  private isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item)
  }
}
