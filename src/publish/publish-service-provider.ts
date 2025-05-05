import { ServiceProvider } from '../service-provider'
import { Publisher } from './publisher'
import { IPublisher } from './publisher.interface'

/**
 * Publish service provider
 */
export class PublishServiceProvider extends ServiceProvider {
  /**
   * Register the service provider
   */
  public register(): void {
    this.app.singleton(IPublisher.$, () => {
      return Publisher.make()
    })
  }

  /**
   * Bootstrap the service provider
   */
  public boot(): void {
    // No boot actions needed
  }
}
