import { ServiceProvider } from '../service-provider'

/**
 * Application service provider that registers core application services.
 */
export class AppServiceProvider extends ServiceProvider {
  /**
   * Register any application services.
   */
  public register(): void {
    // Register application services
  }

  /**
   * Bootstrap any application services.
   */
  public boot(): void {
    // Bootstrap application services
  }
}

export default AppServiceProvider
