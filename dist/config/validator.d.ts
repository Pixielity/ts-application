import { IConfigValidator, IConfigSchema } from '@pixielity/ts-types';

/**
 * Configuration validation error
 */
declare class ConfigValidationError extends Error {
    /**
     * The validation errors
     */
    errors: string[];
    /**
     * Create a new configuration validation error
     *
     * @param message - The error message
     * @param errors - The validation errors
     */
    constructor(message: string, errors?: string[]);
    /**
     * Create a new configuration validation error
     *
     * @param message - The error message
     * @param errors - The validation errors
     * @returns A new configuration validation error
     */
    static make(message: string, errors?: string[]): ConfigValidationError;
}
/**
 * Configuration validator with schema auto-detection
 */
declare class ConfigValidator implements IConfigValidator {
    /**
     * The configuration schemas
     */
    private schemas;
    /**
     * Whether to auto-detect schemas from $schema properties
     */
    private autoDetectSchemas;
    /**
     * Create a new configuration validator
     *
     * @param schemas - The configuration schemas
     * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
     */
    constructor(schemas?: Record<string, IConfigSchema>, autoDetectSchemas?: boolean);
    /**
     * Create a new configuration validator
     *
     * @param schemas - The configuration schemas
     * @param autoDetectSchemas - Whether to auto-detect schemas from $schema properties
     * @returns A new configuration validator
     */
    static make(schemas?: Record<string, IConfigSchema>, autoDetectSchemas?: boolean): ConfigValidator;
    /**
     * Set the configuration schemas
     *
     * @param schemas - The configuration schemas
     */
    setSchemas(schemas: Record<string, IConfigSchema>): void;
    /**
     * Add a configuration schema
     *
     * @param key - The schema key
     * @param schema - The schema
     */
    addSchema(key: string, schema: IConfigSchema): void;
    /**
     * Enable or disable schema auto-detection
     *
     * @param enable - Whether to enable schema auto-detection
     */
    setAutoDetectSchemas(enable: boolean): void;
    /**
     * Validate a configuration value against its schema
     *
     * @param key - The configuration key
     * @param value - The configuration value
     * @returns Whether the value is valid
     * @throws ConfigValidationError if validation fails
     */
    validate(key: string, value: any): boolean;
    /**
     * Validate a value against a schema
     *
     * @param value - The value to validate
     * @param schema - The schema to validate against
     * @param path - The current path (for error messages)
     * @returns An array of validation errors
     * @private
     */
    private validateAgainstSchema;
    /**
     * Check if a value matches a type
     *
     * @param value - The value to check
     * @param type - The expected type
     * @returns Whether the value matches the type
     * @private
     */
    private checkType;
}

export { ConfigValidationError, ConfigValidator };
