import type { IConfigCache, ICacheItem } from '@pixielity/ts-types'

/**
 * Configuration cache
 */
export class ConfigCache implements IConfigCache {
  /**
   * The cache storage
   */
  private cache: Map<string, ICacheItem<any>> = new Map()

  /**
   * Whether the cache is enabled
   */
  private enabled: boolean

  /**
   * The maximum number of items to store in the cache
   */
  private maxSize: number

  /**
   * The time to live for cache items in milliseconds
   */
  private ttl: number

  /**
   * Create a new configuration cache
   *
   * @param enabled - Whether the cache is enabled
   * @param maxSize - The maximum number of items to store in the cache
   * @param ttl - The time to live for cache items in milliseconds
   */
  constructor(enabled = true, maxSize = 1000, ttl = 0) {
    this.enabled = enabled
    this.maxSize = maxSize
    this.ttl = ttl
  }

  /**
   * Create a new configuration cache
   *
   * @param enabled - Whether the cache is enabled
   * @param maxSize - The maximum number of items to store in the cache
   * @param ttl - The time to live for cache items in milliseconds
   * @returns A new configuration cache
   */
  public static make(enabled = true, maxSize = 1000, ttl = 0): ConfigCache {
    return new ConfigCache(enabled, maxSize, ttl)
  }

  /**
   * Enable or disable the cache
   *
   * @param enabled - Whether to enable the cache
   */
  public setEnabled(enabled: boolean): void {
    this.enabled = enabled
  }

  /**
   * Set the maximum cache size
   *
   * @param maxSize - The maximum number of items to store in the cache
   */
  public setMaxSize(maxSize: number): void {
    this.maxSize = maxSize
    this.enforceMaxSize()
  }

  /**
   * Set the time to live for cache items
   *
   * @param ttl - The time to live in milliseconds
   */
  public setTtl(ttl: number): void {
    this.ttl = ttl
  }

  /**
   * Get a value from the cache
   *
   * @param key - The cache key
   * @returns The cached value or undefined if not found
   */
  public get<T>(key: string): T | undefined {
    if (!this.enabled) {
      return undefined
    }

    const item = this.cache.get(key)
    if (!item) {
      return undefined
    }

    // Check if the item has expired
    if (item.expires && item.expires < Date.now()) {
      this.cache.delete(key)
      return undefined
    }

    return item.value as T
  }

  /**
   * Set a value in the cache
   *
   * @param key - The cache key
   * @param value - The value to cache
   */
  public set<T>(key: string, value: T): void {
    if (!this.enabled) {
      return
    }

    // Enforce max size before adding a new item
    if (!this.cache.has(key) && this.cache.size >= this.maxSize) {
      this.enforceMaxSize()
    }

    const item: ICacheItem<T> = {
      value,
      created: 0,
    }

    // Set expiration if TTL is configured
    if (this.ttl > 0) {
      item.expires = Date.now() + this.ttl
    }

    this.cache.set(key, item)
  }

  /**
   * Delete a value from the cache
   *
   * @param key - The cache key
   */
  public delete(key: string): void {
    this.cache.delete(key)
  }

  /**
   * Clear the cache
   */
  public clear(): void {
    this.cache.clear()
  }

  /**
   * Get the number of items in the cache
   *
   * @returns The number of items in the cache
   */
  public size(): number {
    return this.cache.size
  }

  /**
   * Check if a key exists in the cache
   *
   * @param key - The cache key
   * @returns Whether the key exists in the cache
   */
  public has(key: string): boolean {
    if (!this.enabled) {
      return false
    }

    const item = this.cache.get(key)
    if (!item) {
      return false
    }

    // Check if the item has expired
    if (item.expires && item.expires < Date.now()) {
      this.cache.delete(key)
      return false
    }

    return true
  }

  /**
   * Enforce the maximum cache size by removing the oldest items
   * @private
   */
  private enforceMaxSize(): void {
    if (this.cache.size <= this.maxSize) {
      return
    }

    // Remove the oldest items
    const itemsToRemove = this.cache.size - this.maxSize
    const keys = Array.from(this.cache.keys())
    for (let i = 0; i < itemsToRemove; i++) {
      this.cache.delete(keys[i])
    }
  }
}
