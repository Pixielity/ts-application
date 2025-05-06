import { IConfigCache } from '@pixielity/ts-types';

/**
 * Configuration cache
 */
declare class ConfigCache implements IConfigCache {
    /**
     * The cache storage
     */
    private cache;
    /**
     * Whether the cache is enabled
     */
    private enabled;
    /**
     * The maximum number of items to store in the cache
     */
    private maxSize;
    /**
     * The time to live for cache items in milliseconds
     */
    private ttl;
    /**
     * Create a new configuration cache
     *
     * @param enabled - Whether the cache is enabled
     * @param maxSize - The maximum number of items to store in the cache
     * @param ttl - The time to live for cache items in milliseconds
     */
    constructor(enabled?: boolean, maxSize?: number, ttl?: number);
    /**
     * Create a new configuration cache
     *
     * @param enabled - Whether the cache is enabled
     * @param maxSize - The maximum number of items to store in the cache
     * @param ttl - The time to live for cache items in milliseconds
     * @returns A new configuration cache
     */
    static make(enabled?: boolean, maxSize?: number, ttl?: number): ConfigCache;
    /**
     * Enable or disable the cache
     *
     * @param enabled - Whether to enable the cache
     */
    setEnabled(enabled: boolean): void;
    /**
     * Set the maximum cache size
     *
     * @param maxSize - The maximum number of items to store in the cache
     */
    setMaxSize(maxSize: number): void;
    /**
     * Set the time to live for cache items
     *
     * @param ttl - The time to live in milliseconds
     */
    setTtl(ttl: number): void;
    /**
     * Get a value from the cache
     *
     * @param key - The cache key
     * @returns The cached value or undefined if not found
     */
    get<T>(key: string): T | undefined;
    /**
     * Set a value in the cache
     *
     * @param key - The cache key
     * @param value - The value to cache
     */
    set<T>(key: string, value: T): void;
    /**
     * Delete a value from the cache
     *
     * @param key - The cache key
     */
    delete(key: string): void;
    /**
     * Clear the cache
     */
    clear(): void;
    /**
     * Get the number of items in the cache
     *
     * @returns The number of items in the cache
     */
    size(): number;
    /**
     * Check if a key exists in the cache
     *
     * @param key - The cache key
     * @returns Whether the key exists in the cache
     */
    has(key: string): boolean;
    /**
     * Enforce the maximum cache size by removing the oldest items
     * @private
     */
    private enforceMaxSize;
}

export { ConfigCache };
