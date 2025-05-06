/**
 * @pixielity/ts-application v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/config/cache.ts
var ConfigCache = class _ConfigCache {
  /**
   * Create a new configuration cache
   *
   * @param enabled - Whether the cache is enabled
   * @param maxSize - The maximum number of items to store in the cache
   * @param ttl - The time to live for cache items in milliseconds
   */
  constructor(enabled = true, maxSize = 1e3, ttl = 0) {
    /**
     * The cache storage
     */
    this.cache = /* @__PURE__ */ new Map();
    this.enabled = enabled;
    this.maxSize = maxSize;
    this.ttl = ttl;
  }
  /**
   * Create a new configuration cache
   *
   * @param enabled - Whether the cache is enabled
   * @param maxSize - The maximum number of items to store in the cache
   * @param ttl - The time to live for cache items in milliseconds
   * @returns A new configuration cache
   */
  static make(enabled = true, maxSize = 1e3, ttl = 0) {
    return new _ConfigCache(enabled, maxSize, ttl);
  }
  /**
   * Enable or disable the cache
   *
   * @param enabled - Whether to enable the cache
   */
  setEnabled(enabled) {
    this.enabled = enabled;
  }
  /**
   * Set the maximum cache size
   *
   * @param maxSize - The maximum number of items to store in the cache
   */
  setMaxSize(maxSize) {
    this.maxSize = maxSize;
    this.enforceMaxSize();
  }
  /**
   * Set the time to live for cache items
   *
   * @param ttl - The time to live in milliseconds
   */
  setTtl(ttl) {
    this.ttl = ttl;
  }
  /**
   * Get a value from the cache
   *
   * @param key - The cache key
   * @returns The cached value or undefined if not found
   */
  get(key) {
    if (!this.enabled) {
      return void 0;
    }
    const item = this.cache.get(key);
    if (!item) {
      return void 0;
    }
    if (item.expires && item.expires < Date.now()) {
      this.cache.delete(key);
      return void 0;
    }
    return item.value;
  }
  /**
   * Set a value in the cache
   *
   * @param key - The cache key
   * @param value - The value to cache
   */
  set(key, value) {
    if (!this.enabled) {
      return;
    }
    if (!this.cache.has(key) && this.cache.size >= this.maxSize) {
      this.enforceMaxSize();
    }
    const item = {
      value,
      created: 0
    };
    if (this.ttl > 0) {
      item.expires = Date.now() + this.ttl;
    }
    this.cache.set(key, item);
  }
  /**
   * Delete a value from the cache
   *
   * @param key - The cache key
   */
  delete(key) {
    this.cache.delete(key);
  }
  /**
   * Clear the cache
   */
  clear() {
    this.cache.clear();
  }
  /**
   * Get the number of items in the cache
   *
   * @returns The number of items in the cache
   */
  size() {
    return this.cache.size;
  }
  /**
   * Check if a key exists in the cache
   *
   * @param key - The cache key
   * @returns Whether the key exists in the cache
   */
  has(key) {
    if (!this.enabled) {
      return false;
    }
    const item = this.cache.get(key);
    if (!item) {
      return false;
    }
    if (item.expires && item.expires < Date.now()) {
      this.cache.delete(key);
      return false;
    }
    return true;
  }
  /**
   * Enforce the maximum cache size by removing the oldest items
   * @private
   */
  enforceMaxSize() {
    if (this.cache.size <= this.maxSize) {
      return;
    }
    const itemsToRemove = this.cache.size - this.maxSize;
    const keys = Array.from(this.cache.keys());
    for (let i = 0; i < itemsToRemove; i++) {
      this.cache.delete(keys[i]);
    }
  }
};

export { ConfigCache };
//# sourceMappingURL=cache.mjs.map
//# sourceMappingURL=cache.mjs.map