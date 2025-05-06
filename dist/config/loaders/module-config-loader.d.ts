import { IConfigLoader } from '@pixielity/ts-types';

/**
 * Module config loader implementation
 */
declare class ModuleConfigLoader implements IConfigLoader {
    /**
     * The configuration cache
     */
    private configCache;
    /**
     * Create a new module config loader
     */
    constructor();
    /**
     * Create a new module config loader
     *
     * @returns A new module config loader
     */
    static make(): ModuleConfigLoader;
    /**
     * Load configuration from a module source
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
    /**
     * Load configuration dynamically based on the environment
     *
     * @param source - The source to load from
     * @returns The loaded configuration
     * @private
     */
    private loadConfigDynamically;
    /**
     * Normalize a path for browser usage
     *
     * @param source - The source path
     * @returns The normalized path
     * @private
     */
    private normalizeBrowserPath;
}

export { ModuleConfigLoader };
