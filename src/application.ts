import { interfaces } from 'inversify'
import { Container } from './container/container'
import { ConfigServiceProvider } from './providers/config-service-provider'
import {
  type IConfigRepository,
  type IContainer,
  type ServiceIdentifier,
  ICache,
  IConfig,
  IApplication,
} from '@pixielity/ts-types'

/**
 * Application class that bootstraps and manages the application.
 */
export class Application implements IApplication {
  /**
   * The service container instance.
   * @private
   */
  private container: IContainer

  /**
   * The bootstrapped state of the application.
   * @private
   */
  private booted = false

  /**
   * Create a new application instance.
   */
  constructor() {
    this.container = Container.make()
  }

  /**
   * Create a new application instance.
   *
   * @returns A new application instance
   */
  public static make(): Application {
    return new Application()
  }

  /**
   * Get the service container.
   *
   * @returns The service container
   */
  public getContainer(): IContainer {
    return this.container
  }

  /**
   * Register the core service providers.
   *
   * @returns The application instance
   */
  public registerCoreProviders(): Application {
    // Register the config service provider
    this.container.register(new ConfigServiceProvider(this.container))

    return this
  }

  /**
   * Register a service provider.
   *
   * @param provider - The service provider to register
   * @returns The application instance
   */
  public register(provider: any): Application {
    this.container.register(
      typeof provider === 'function' ? new provider(this.container) : provider,
    )

    return this
  }

  /**
   * Boot the application.
   *
   * @returns The application instance
   */
  public boot(): Application {
    if (this.booted) {
      return this
    }

    // Boot the service providers
    this.container.boot()

    this.booted = true

    return this
  }

  /**
   * Determine if the application has been bootstrapped.
   *
   * @returns True if the application has been bootstrapped, false otherwise
   */
  public isBooted(): boolean {
    return this.booted
  }

  /**
   * Get a service from the container.
   *
   * @param abstract - The abstract type to resolve
   * @returns The resolved instance
   * @template T - The type of the resolved instance
   */
  public make<T>(abstract: ServiceIdentifier<T>): T {
    return this.container.make<T>(abstract)
  }

  /**
   * Register a binding with the container.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @param shared - Whether the binding should be shared
   */
  bind<T>(
    abstract: ServiceIdentifier<T>,
    concrete?: any,
    shared?: boolean,
  ): IContainer | interfaces.BindingToSyntax<T> {
    return this.container.bind<T>(abstract, concrete, shared)
  }

  /**
   * Register an existing instance as shared in the container.
   *
   * @param abstract - The abstract type to bind
   * @param instance - The instance to register
   * @returns The container instance
   */
  instance<T>(abstract: ServiceIdentifier<T>, instance: T): IContainer {
    return this.container.instance<T>(abstract, instance)
  }

  /**
   * Get the configuration repository.
   *
   * @returns The configuration repository
   */
  public config(): IConfigRepository {
    return this.container.make<IConfigRepository>(IConfig.$)
  }

  /**
   * Get the cache manager.
   *
   * @returns The cache manager
   */
  public cache(): ICache {
    return this.container.make<ICache>(ICache.$)
  }
}

// Create a singleton instance of the application
let appInstance: Application | null = null

/**
 * Get the application instance.
 *
 * @returns The application instance
 */
export function getApplication(): Application {
  if (!appInstance) {
    appInstance = Application.make()
    appInstance.registerCoreProviders()
    appInstance.boot()
  }

  return appInstance
}
