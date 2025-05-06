'use strict';

/**
 * @pixielity/ts-application v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


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

exports.ConfigValidationError = ConfigValidationError;
exports.ConfigValidator = ConfigValidator;
//# sourceMappingURL=validator.js.map
//# sourceMappingURL=validator.js.map