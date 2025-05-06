import { ServiceProvider } from '../service-provider.js';
import '@pixielity/ts-types';

/**
 * Application service provider that registers core application services.
 */
declare class AppServiceProvider extends ServiceProvider {
    /**
     * Register any application services.
     */
    register(): void;
    /**
     * Bootstrap any application services.
     */
    boot(): void;
}

export { AppServiceProvider, AppServiceProvider as default };
