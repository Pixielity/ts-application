import { IConfigLoader } from '@pixielity/ts-types';

/**
 * JSON config loader implementation
 */
declare class JsonConfigLoader implements IConfigLoader {
    /**
     * The configuration cache
     */
    private configCache;
    /**
     * Create a new JSON config loader
     */
    constructor();
    /**
     * Create a new JSON config loader
     *
     * @returns A new JSON config loader
     */
    static make(): JsonConfigLoader;
    /**
     * Load configuration from a JSON source
     *
     * @param source - The source to load from (path, key, etc.)
     * @returns The loaded configuration
     */
    load(source: string): Promise<Record<string, any>>;
    /**
     * Check if the loader can load from the given source
     *
     * @param source - The source to check
     * @returns Whether the loader can load from the source
     */
    canLoad(source: string): boolean;
}

export { JsonConfigLoader };
