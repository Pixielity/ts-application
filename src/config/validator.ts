import type { IConfigValidator, IConfigSchema } from '@pixielity/ts-types'

/**
 * Configuration validation error
 */
export class ConfigValidationError extends Error {
  /**
   * The validation errors
   */
  public errors: string[]

  /**
   * Create a new configuration validation error
   *
   * @param message - The error message
   * @param errors - The validation errors
   */
  constructor(message: string, errors: string[] = []) {
    super(message)
    this.name = 'ConfigValidationError'
    this.errors = errors
  }

  /**
   * Create a new configuration validation error
   *
   * @param message - The error message
   * @param errors - The validation errors
   * @returns A new configuration validation error
   */
  public static make(message: string, errors: string[] = []): ConfigValidationError {
    return new ConfigValidationError(message, errors)
  }
}

/**
 * Configuration validator with schema auto-detection
 */
export class ConfigValidator implements IConfigValidator {
  /**
   * The configuration schemas
   */
  private schemas: Record<string, IConfigSchema> = {}

  /**
   * Whether to auto-detect schemas from $schema properties
   */
  private autoDetectSchemas = true

  /**
   * Create a new configuration validator
   *
   * @param schemas - The configuration schemas
   * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
   */
  constructor(schemas: Record<string, IConfigSchema> = {}, autoDetectSchemas = true) {
    this.schemas = schemas
    this.autoDetectSchemas = autoDetectSchemas
  }

  /**
   * Create a new configuration validator
   *
   * @param schemas - The configuration schemas
   * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
   * @returns A new configuration validator
   */
  public static make(
    schemas: Record<string, IConfigSchema> = {},
    autoDetectSchemas = true,
  ): ConfigValidator {
    return new ConfigValidator(schemas, autoDetectSchemas)
  }

  /**
   * Set the configuration schemas
   *
   * @param schemas - The configuration schemas
   */
  public setSchemas(schemas: Record<string, IConfigSchema>): void {
    this.schemas = schemas
  }

  /**
   * Add a configuration schema
   *
   * @param key - The schema key
   * @param schema - The schema
   */
  public addSchema(key: string, schema: IConfigSchema): void {
    this.schemas[key] = schema
  }

  /**
   * Enable or disable schema auto-detection
   *
   * @param enable - Whether to enable schema auto-detection
   */
  public setAutoDetectSchemas(enable: boolean): void {
    this.autoDetectSchemas = enable
  }

  /**
   * Validate a configuration value against its schema
   *
   * @param key - The configuration key
   * @param value - The configuration value
   * @returns Whether the value is valid
   * @throws ConfigValidationError if validation fails
   */
  public validate(key: string, value: any): boolean {
    // Check for auto-detected schema in the value itself
    let schema = this.schemas[key]

    if (this.autoDetectSchemas && value && typeof value === 'object' && value.$schema) {
      // If the value has a $schema property, use it for validation
      try {
        // The $schema could be a direct schema object or a reference to a schema
        if (typeof value.$schema === 'string') {
          // If it's a string, check if we have this schema registered
          if (this.schemas[value.$schema]) {
            schema = this.schemas[value.$schema]
          } else {
            console.warn(`Schema reference '${value.$schema}' not found in registered schemas`)
          }
        } else if (typeof value.$schema === 'object') {
          // If it's an object, use it directly as the schema
          schema = value.$schema
        }
      } catch (error) {
        console.warn(`Error processing $schema property: ${error}`)
      }
    }

    if (!schema) {
      // No schema defined for this key, so validation passes
      return true
    }

    const errors = this.validateAgainstSchema(value, schema, key)
    if (errors.length > 0) {
      throw ConfigValidationError.make(`Configuration validation failed for '${key}'`, errors)
    }

    return true
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
  private validateAgainstSchema(value: any, schema: IConfigSchema, path: string): string[] {
    const errors: string[] = []

    // Skip validation for the $schema property itself
    if (path.endsWith('.$schema')) {
      return errors
    }

    // Check type
    if (schema.type && !this.checkType(value, schema.type)) {
      errors.push(`${path}: Expected type '${schema.type}', got '${typeof value}'`)
    }

    // Check required
    if (schema.required && (value === undefined || value === null)) {
      errors.push(`${path}: Required value is missing`)
    }

    // Check enum
    if (schema.enum && !schema.enum.includes(value)) {
      errors.push(`${path}: Value must be one of [${schema.enum.join(', ')}]`)
    }

    // Check min/max for numbers
    if (schema.type === 'number' || schema.type === 'integer') {
      if (schema.minimum !== undefined && value < schema.minimum) {
        errors.push(`${path}: Value must be >= ${schema.minimum}`)
      }
      if (schema.maximum !== undefined && value > schema.maximum) {
        errors.push(`${path}: Value must be <= ${schema.maximum}`)
      }
    }

    // Check minLength/maxLength for strings
    if (schema.type === 'string') {
      if (schema.minLength !== undefined && value.length < schema.minLength) {
        errors.push(`${path}: String length must be >= ${schema.minLength}`)
      }
      if (schema.maxLength !== undefined && value.length > schema.maxLength) {
        errors.push(`${path}: String length must be <= ${schema.maxLength}`)
      }
      if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
        errors.push(`${path}: String must match pattern '${schema.pattern}'`)
      }
    }

    // Check properties for objects
    if (schema.type === 'object' && schema.properties) {
      Object.entries(schema.properties).forEach(([propName, propSchema]) => {
        // Skip validation for the $schema property
        if (propName === '$schema') {
          return
        }

        const propPath = `${path}.${propName}`
        const propValue = value?.[propName]

        // Check if property is required
        if (propSchema.required && (propValue === undefined || propValue === null)) {
          errors.push(`${propPath}: Required property is missing`)
        }

        // Validate property if it exists
        if (propValue !== undefined && propValue !== null) {
          errors.push(...this.validateAgainstSchema(propValue, propSchema, propPath))
        }
      })
    }

    // Check items for arrays
    if (schema.type === 'array' && schema.items && Array.isArray(value)) {
      value.forEach((item, index) => {
        const itemPath = `${path}[${index}]`
        errors.push(...this.validateAgainstSchema(item, schema.items!, itemPath))
      })
    }

    return errors
  }

  /**
   * Check if a value matches a type
   *
   * @param value - The value to check
   * @param type - The expected type
   * @returns Whether the value matches the type
   * @private
   */
  private checkType(value: any, type: string): boolean {
    switch (type) {
      case 'string':
        return typeof value === 'string'
      case 'number':
        return typeof value === 'number' && !isNaN(value)
      case 'integer':
        return typeof value === 'number' && !isNaN(value) && Number.isInteger(value)
      case 'boolean':
        return typeof value === 'boolean'
      case 'array':
        return Array.isArray(value)
      case 'object':
        return typeof value === 'object' && value !== null && !Array.isArray(value)
      case 'null':
        return value === null
      default:
        return true
    }
  }
}
