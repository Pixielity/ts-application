import { ServiceProvider } from '../service-provider.js';
import '@pixielity/ts-types';

/**
 * Configuration service provider that registers the configuration repository.
 */
declare class ConfigServiceProvider extends ServiceProvider {
    /**
     * Register any application services.
     */
    register(): void;
    /**
     * Load all configuration files and aggregate them.
     *
     * @returns The aggregated configuration items
     */
    private loadConfigurationFiles;
    /**
     * Get the configuration directory path.
     *
     * @returns The configuration directory path
     */
    private getConfigPath;
    /**
     * Get all configuration files.
     *
     * @param directory - The directory to scan
     * @returns An array of file paths
     */
    private getConfigFiles;
    /**
     * Deep merge two objects.
     *
     * @param target - The target object
     * @param source - The source object
     * @returns The merged object
     */
    private mergeDeep;
    /**
     * Check if a value is an object.
     *
     * @param item - The value to check
     * @returns Whether the value is an object
     */
    private isObject;
    /**
     * Bootstrap any application services.
     */
    boot(): void;
}

export { ConfigServiceProvider, ConfigServiceProvider as default };
