import { ServiceProvider } from '../service-provider.js';
import '@pixielity/ts-types';

/**
 * Publish service provider
 */
declare class PublishServiceProvider extends ServiceProvider {
    /**
     * Register the service provider
     */
    register(): void;
    /**
     * Bootstrap the service provider
     */
    boot(): void;
}

export { PublishServiceProvider };
