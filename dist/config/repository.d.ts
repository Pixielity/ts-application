import { IConfigRepository, IConfigRepositoryOptions, ConfigEnvironment, IConfigSchema } from '@pixielity/ts-types';

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
declare class ConfigRepository implements IConfigRepository {
    /**
     * The configuration items.
     * @private
     */
    private items;
    /**
     * The environment variables.
     * @private
     */
    private env;
    /**
     * The environment variable prefix.
     * @private
     */
    private envPrefix;
    /**
     * The configuration cache.
     * @private
     */
    private cache;
    /**
     * The configuration validator.
     * @private
     */
    private validator;
    /**
     * The current environment.
     * @private
     */
    private environment;
    /**
     * Whether to validate configuration values.
     * @private
     */
    private shouldValidate;
    /**
     * Create a new configuration repository.
     *
     * @param options - The configuration repository options
     */
    constructor(options?: IConfigRepositoryOptions);
    /**
     * Create a new configuration repository.
     *
     * @param options - The configuration repository options
     * @returns A new configuration repository
     */
    static make(options?: IConfigRepositoryOptions): ConfigRepository;
    /**
     * Load environment variables.
     * @private
     */
    private loadEnvironmentVariables;
    /**
     * Get the current environment.
     *
     * @returns The current environment
     */
    getEnvironment(): ConfigEnvironment;
    /**
     * Set the configuration validator schemas.
     *
     * @param schemas - The configuration schemas
     */
    setSchemas(schemas: Record<string, IConfigSchema>): void;
    /**
     * Enable or disable validation.
     *
     * @param enable - Whether to enable validation
     */
    setValidation(enable: boolean): void;
    /**
     * Enable or disable caching.
     *
     * @param enable - Whether to enable caching
     */
    setCaching(enable: boolean): void;
    /**
     * Clear the configuration cache.
     */
    clearCache(): void;
    /**
     * Determine if the given configuration value exists.
     *
     * @param key - The configuration key
     * @returns True if the configuration value exists, false otherwise
     */
    has(key: string): boolean;
    /**
     * Get the specified configuration value.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The configuration value or the default value
     * @template T - The type of the configuration value
     */
    get<T>(key: string, defaultValue?: T): T;
    /**
     * Get a string value from the configuration.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The string value or the default value
     */
    getString(key: string, defaultValue?: string): string;
    /**
     * Get a number value from the configuration.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The number value or the default value
     */
    getNumber(key: string, defaultValue?: number): number;
    /**
     * Get an integer value from the configuration.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The integer value or the default value
     */
    getInt(key: string, defaultValue?: number): number;
    /**
     * Get a float value from the configuration.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The float value or the default value
     */
    getFloat(key: string, defaultValue?: number): number;
    /**
     * Get a boolean value from the configuration.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The boolean value or the default value
     */
    getBoolean(key: string, defaultValue?: boolean): boolean;
    /**
     * Get an array value from the configuration.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The array value or the default value
     * @template T - The type of the array elements
     */
    getArray<T = any>(key: string, defaultValue?: T[]): T[];
    /**
     * Get an object value from the configuration.
     *
     * @param key - The configuration key
     * @param defaultValue - The default value to return if the key doesn't exist
     * @returns The object value or the default value
     * @template T - The type of the object
     */
    getObject<T = Record<string, any>>(key: string, defaultValue?: T): T;
    /**
     * Parse an environment variable value.
     *
     * @param value - The environment variable value
     * @returns The parsed value
     * @private
     */
    private parseEnvValue;
    /**
     * Set a given configuration value.
     *
     * @param key - The configuration key
     * @param value - The configuration value
     */
    set(key: string, value: any): void;
    /**
     * Get all of the configuration items.
     *
     * @returns All configuration items
     */
    all(): Record<string, any>;
    /**
     * Merge configuration items.
     *
     * @param items - The items to merge
     */
    merge(items: Record<string, any>): void;
    /**
     * Deep merge two objects.
     *
     * @param target - The target object
     * @param source - The source object
     * @returns The merged object
     * @private
     */
    private mergeDeep;
    /**
     * Check if a value is an object.
     *
     * @param item - The value to check
     * @returns Whether the value is an object
     * @private
     */
    private isObject;
}

export { ConfigRepository };
