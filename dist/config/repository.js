'use strict';

var tsTypes = require('@pixielity/ts-types');

var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(result)) || result;
  return result;
};
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";

// ../../../node_modules/inversify/es/constants/error_msgs.js
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";

// ../../../node_modules/inversify/es/annotation/injectable.js
function injectable() {
  return function(target) {
    if (Reflect.hasOwnMetadata(PARAM_TYPES, target)) {
      throw new Error(DUPLICATED_INJECTABLE_DECORATOR);
    }
    var types = Reflect.getMetadata(DESIGN_PARAM_TYPES, target) || [];
    Reflect.defineMetadata(PARAM_TYPES, types, target);
    return target;
  };
}
function detectEnvironment() {
  if (typeof process !== "undefined" && process.versions && process.versions.node) {
    return tsTypes.ConfigEnvironment.NODE;
  }
  if (typeof process !== "undefined" && process.env && (process.env.__NEXT_RUNTIME || process.env.NEXT_RUNTIME || process.env.NEXT_PUBLIC_RUNTIME)) {
    return tsTypes.ConfigEnvironment.NEXTJS;
  }
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return tsTypes.ConfigEnvironment.REACT_NATIVE;
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return tsTypes.ConfigEnvironment.BROWSER;
  }
  return tsTypes.ConfigEnvironment.UNKNOWN;
}

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

// src/config/validator.ts
var ConfigValidationError = class _ConfigValidationError extends Error {
  /**
   * Create a new configuration validation error
   *
   * @param message - The error message
   * @param errors - The validation errors
   */
  constructor(message, errors = []) {
    super(message);
    this.name = "ConfigValidationError";
    this.errors = errors;
  }
  /**
   * Create a new configuration validation error
   *
   * @param message - The error message
   * @param errors - The validation errors
   * @returns A new configuration validation error
   */
  static make(message, errors = []) {
    return new _ConfigValidationError(message, errors);
  }
};
var ConfigValidator = class _ConfigValidator {
  /**
   * Create a new configuration validator
   *
   * @param schemas - The configuration schemas
   * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
   */
  constructor(schemas = {}, autoDetectSchemas = true) {
    /**
     * The configuration schemas
     */
    this.schemas = {};
    /**
     * Whether to auto-detect schemas from $schema properties
     */
    this.autoDetectSchemas = true;
    this.schemas = schemas;
    this.autoDetectSchemas = autoDetectSchemas;
  }
  /**
   * Create a new configuration validator
   *
   * @param schemas - The configuration schemas
   * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
   * @returns A new configuration validator
   */
  static make(schemas = {}, autoDetectSchemas = true) {
    return new _ConfigValidator(schemas, autoDetectSchemas);
  }
  /**
   * Set the configuration schemas
   *
   * @param schemas - The configuration schemas
   */
  setSchemas(schemas) {
    this.schemas = schemas;
  }
  /**
   * Add a configuration schema
   *
   * @param key - The schema key
   * @param schema - The schema
   */
  addSchema(key, schema) {
    this.schemas[key] = schema;
  }
  /**
   * Enable or disable schema auto-detection
   *
   * @param enable - Whether to enable schema auto-detection
   */
  setAutoDetectSchemas(enable) {
    this.autoDetectSchemas = enable;
  }
  /**
   * Validate a configuration value against its schema
   *
   * @param key - The configuration key
   * @param value - The configuration value
   * @returns Whether the value is valid
   * @throws ConfigValidationError if validation fails
   */
  validate(key, value) {
    let schema = this.schemas[key];
    if (this.autoDetectSchemas && value && typeof value === "object" && value.$schema) {
      try {
        if (typeof value.$schema === "string") {
          if (this.schemas[value.$schema]) {
            schema = this.schemas[value.$schema];
          } else {
            console.warn(`Schema reference '${value.$schema}' not found in registered schemas`);
          }
        } else if (typeof value.$schema === "object") {
          schema = value.$schema;
        }
      } catch (error) {
        console.warn(`Error processing $schema property: ${error}`);
      }
    }
    if (!schema) {
      return true;
    }
    const errors = this.validateAgainstSchema(value, schema, key);
    if (errors.length > 0) {
      throw ConfigValidationError.make(`Configuration validation failed for '${key}'`, errors);
    }
    return true;
  }
  /**
   * Validate a value against a schema
   *
   * @param value - The value to validate
   * @param schema - The schema to validate against
   * @param path - The current path (for error messages)
   * @returns An array of validation errors
   * @private
   */
  validateAgainstSchema(value, schema, path) {
    const errors = [];
    if (path.endsWith(".$schema")) {
      return errors;
    }
    if (schema.type && !this.checkType(value, schema.type)) {
      errors.push(`${path}: Expected type '${schema.type}', got '${typeof value}'`);
    }
    if (schema.required && (value === void 0 || value === null)) {
      errors.push(`${path}: Required value is missing`);
    }
    if (schema.enum && !schema.enum.includes(value)) {
      errors.push(`${path}: Value must be one of [${schema.enum.join(", ")}]`);
    }
    if (schema.type === "number" || schema.type === "integer") {
      if (schema.minimum !== void 0 && value < schema.minimum) {
        errors.push(`${path}: Value must be >= ${schema.minimum}`);
      }
      if (schema.maximum !== void 0 && value > schema.maximum) {
        errors.push(`${path}: Value must be <= ${schema.maximum}`);
      }
    }
    if (schema.type === "string") {
      if (schema.minLength !== void 0 && value.length < schema.minLength) {
        errors.push(`${path}: String length must be >= ${schema.minLength}`);
      }
      if (schema.maxLength !== void 0 && value.length > schema.maxLength) {
        errors.push(`${path}: String length must be <= ${schema.maxLength}`);
      }
      if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
        errors.push(`${path}: String must match pattern '${schema.pattern}'`);
      }
    }
    if (schema.type === "object" && schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        if (propName === "$schema") {
          return;
        }
        const propPath = `${path}.${propName}`;
        const propValue = value == null ? void 0 : value[propName];
        if (propSchema.required && (propValue === void 0 || propValue === null)) {
          errors.push(`${propPath}: Required property is missing`);
        }
        if (propValue !== void 0 && propValue !== null) {
          errors.push(...this.validateAgainstSchema(propValue, propSchema, propPath));
        }
      });
    }
    if (schema.type === "array" && schema.items && Array.isArray(value)) {
      value.forEach((item, index) => {
        const itemPath = `${path}[${index}]`;
        errors.push(...this.validateAgainstSchema(item, schema.items, itemPath));
      });
    }
    return errors;
  }
  /**
   * Check if a value matches a type
   *
   * @param value - The value to check
   * @param type - The expected type
   * @returns Whether the value matches the type
   * @private
   */
  checkType(value, type) {
    switch (type) {
      case "string":
        return typeof value === "string";
      case "number":
        return typeof value === "number" && !isNaN(value);
      case "integer":
        return typeof value === "number" && !isNaN(value) && Number.isInteger(value);
      case "boolean":
        return typeof value === "boolean";
      case "array":
        return Array.isArray(value);
      case "object":
        return typeof value === "object" && value !== null && !Array.isArray(value);
      case "null":
        return value === null;
      default:
        return true;
    }
  }
};

// src/config/repository.ts
exports.ConfigRepository = class ConfigRepository {
  /**
   * Create a new configuration repository.
   *
   * @param options - The configuration repository options
   */
  constructor(options = {}) {
    /**
     * The configuration items.
     * @private
     */
    this.items = {};
    /**
     * The environment variables.
     * @private
     */
    this.env = {};
    /**
     * The environment variable prefix.
     * @private
     */
    this.envPrefix = "APP_";
    /**
     * Whether to validate configuration values.
     * @private
     */
    this.shouldValidate = false;
    this.items = options.items || {};
    this.envPrefix = options.envPrefix || "APP_";
    this.loadEnvironmentVariables();
    this.environment = detectEnvironment();
    this.cache = ConfigCache.make(options.cache !== false);
    this.validator = ConfigValidator.make(options.schemas || {});
    this.shouldValidate = options.validate === true;
  }
  /**
   * Create a new configuration repository.
   *
   * @param options - The configuration repository options
   * @returns A new configuration repository
   */
  static make(options = {}) {
    return new exports.ConfigRepository(options);
  }
  /**
   * Load environment variables.
   * @private
   */
  loadEnvironmentVariables() {
    if (typeof process !== "undefined" && process.env) {
      this.env = Object.fromEntries(
        Object.entries(process.env).filter(([_, value]) => value !== void 0)
      );
    } else {
      this.env = {};
    }
  }
  /**
   * Get the current environment.
   *
   * @returns The current environment
   */
  getEnvironment() {
    return this.environment;
  }
  /**
   * Set the configuration validator schemas.
   *
   * @param schemas - The configuration schemas
   */
  setSchemas(schemas) {
    this.validator.setSchemas(schemas);
  }
  /**
   * Enable or disable validation.
   *
   * @param enable - Whether to enable validation
   */
  setValidation(enable) {
    this.shouldValidate = enable;
  }
  /**
   * Enable or disable caching.
   *
   * @param enable - Whether to enable caching
   */
  setCaching(enable) {
    this.cache.setEnabled(enable);
  }
  /**
   * Clear the configuration cache.
   */
  clearCache() {
    this.cache.clear();
  }
  /**
   * Determine if the given configuration value exists.
   *
   * @param key - The configuration key
   * @returns True if the configuration value exists, false otherwise
   */
  has(key) {
    return this.get(key) !== void 0;
  }
  /**
   * Get the specified configuration value.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The configuration value or the default value
   * @template T - The type of the configuration value
   */
  get(key, defaultValue) {
    const cachedValue = this.cache.get(key);
    if (cachedValue !== void 0) {
      return cachedValue;
    }
    const envKey = `${this.envPrefix}${key.toUpperCase().replace(/\./g, "_")}`;
    if (this.env[envKey] !== void 0) {
      const value = this.parseEnvValue(this.env[envKey]);
      this.cache.set(key, value);
      return value;
    }
    const segments = key.split(".");
    let current = this.items;
    for (const segment of segments) {
      if (current === void 0 || current === null) {
        this.cache.set(key, defaultValue);
        return defaultValue;
      }
      current = current[segment];
    }
    if (this.shouldValidate && current !== void 0) {
      const rootKey = segments[0];
      this.validator.validate(rootKey, this.items[rootKey]);
    }
    const result = current !== void 0 ? current : defaultValue;
    this.cache.set(key, result);
    return result;
  }
  /**
   * Get a string value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The string value or the default value
   */
  getString(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || "";
    }
    return String(value);
  }
  /**
   * Get a number value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The number value or the default value
   */
  getNumber(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || 0;
    }
    const num = Number(value);
    return isNaN(num) ? defaultValue || 0 : num;
  }
  /**
   * Get an integer value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The integer value or the default value
   */
  getInt(key, defaultValue) {
    const value = this.getNumber(key, defaultValue);
    return Math.floor(value);
  }
  /**
   * Get a float value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The float value or the default value
   */
  getFloat(key, defaultValue) {
    return this.getNumber(key, defaultValue);
  }
  /**
   * Get a boolean value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The boolean value or the default value
   */
  getBoolean(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || false;
    }
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "string") {
      return value.toLowerCase() === "true" || value === "1";
    }
    if (typeof value === "number") {
      return value === 1;
    }
    return Boolean(value);
  }
  /**
   * Get an array value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The array value or the default value
   * @template T - The type of the array elements
   */
  getArray(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || [];
    }
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [value];
      } catch (e) {
        return [value];
      }
    }
    return [value];
  }
  /**
   * Get an object value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   * @returns The object value or the default value
   * @template T - The type of the object
   */
  getObject(key, defaultValue) {
    const value = this.get(key, defaultValue);
    if (value === void 0 || value === null) {
      return defaultValue || {};
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      return value;
    }
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
      } catch (e) {
        return {};
      }
    }
    return {};
  }
  /**
   * Parse an environment variable value.
   *
   * @param value - The environment variable value
   * @returns The parsed value
   * @private
   */
  parseEnvValue(value) {
    if (value.toLowerCase() === "true") return true;
    if (value.toLowerCase() === "false") return false;
    if (/^-?\d+$/.test(value)) return Number.parseInt(value, 10);
    if (/^-?\d+\.\d+$/.test(value)) return Number.parseFloat(value);
    if (value.startsWith("{") && value.endsWith("}") || value.startsWith("[") && value.endsWith("]")) {
      try {
        return JSON.parse(value);
      } catch (e) {
      }
    }
    return value;
  }
  /**
   * Set a given configuration value.
   *
   * @param key - The configuration key
   * @param value - The configuration value
   */
  set(key, value) {
    const segments = key.split(".");
    let current = this.items;
    for (let i = 0; i < segments.length - 1; i++) {
      const segment = segments[i];
      if (current[segment] === void 0) {
        current[segment] = {};
      }
      current = current[segment];
    }
    current[segments[segments.length - 1]] = value;
    if (this.shouldValidate) {
      const rootKey = segments[0];
      this.validator.validate(rootKey, this.items[rootKey]);
    }
    this.cache.delete(key);
  }
  /**
   * Get all of the configuration items.
   *
   * @returns All configuration items
   */
  all() {
    return { ...this.items };
  }
  /**
   * Merge configuration items.
   *
   * @param items - The items to merge
   */
  merge(items) {
    this.items = this.mergeDeep(this.items, items);
    this.clearCache();
  }
  /**
   * Deep merge two objects.
   *
   * @param target - The target object
   * @param source - The source object
   * @returns The merged object
   * @private
   */
  mergeDeep(target, source) {
    const output = { ...target };
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] });
          } else {
            output[key] = this.mergeDeep(target[key], source[key]);
          }
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  }
  /**
   * Check if a value is an object.
   *
   * @param item - The value to check
   * @returns Whether the value is an object
   * @private
   */
  isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
  }
};
exports.ConfigRepository = __decorateClass([
  injectable()
], exports.ConfigRepository);
if (typeof module !== "undefined") { module.exports = module.exports.default; }
//# sourceMappingURL=repository.js.map
//# sourceMappingURL=repository.js.map