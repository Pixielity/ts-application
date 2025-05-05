import React from 'react'
import type { NextConfig } from 'next'
import type { AppProps } from 'next/app'
import type { IApplication } from '@pixielity/ts-types'

/**
 * Next.js plugin configuration options
 */
export interface NextJsPluginOptions {
  /**
   * Whether to register the plugin automatically
   * @default true
   */
  autoRegister?: boolean

  /**
   * Whether to initialize the application in getInitialProps
   * @default true
   */
  initializeInGetInitialProps?: boolean

  /**
   * Whether to initialize the application in getServerSideProps
   * @default true
   */
  initializeInGetServerSideProps?: boolean

  /**
   * Whether to initialize the application in getStaticProps
   * @default false
   */
  initializeInGetStaticProps?: boolean

  /**
   * Whether to initialize the application in API routes
   * @default true
   */
  initializeInApiRoutes?: boolean

  /**
   * Custom initialization function
   */
  customInitializer?: (app: IApplication) => Promise<void> | void

  /**
   * Cache configuration for server-side rendering
   */
  cache?: {
    /**
     * Whether to enable cache for server-side rendering
     * @default true
     */
    enabled?: boolean

    /**
     * Cache store to use for server-side rendering
     * @default 'memory'
     */
    store?: 'memory' | 'redis' | string

    /**
     * Cache TTL in seconds
     * @default 60
     */
    ttl?: number
  }

  /**
   * Configuration options for the Next.js config
   */
  nextConfig?: NextConfig
}

/**
 * Default Next.js plugin options
 */
const defaultOptions: NextJsPluginOptions = {
  autoRegister: true,
  initializeInGetInitialProps: true,
  initializeInGetServerSideProps: true,
  initializeInGetStaticProps: false,
  initializeInApiRoutes: true,
  cache: {
    enabled: true,
    store: 'memory',
    ttl: 60,
  },
  nextConfig: {},
}

/**
 * Next.js plugin for the application
 */
export class NextJsPlugin {
  /**
   * The application instance
   */
  private app: IApplication

  /**
   * The plugin options
   */
  private options: NextJsPluginOptions

  /**
   * Create a new Next.js plugin instance
   *
   * @param app - The application instance
   * @param options - The plugin options
   */
  constructor(app: IApplication, options: NextJsPluginOptions = {}) {
    this.app = app
    this.options = { ...defaultOptions, ...options }

    if (this.options.autoRegister) {
      this.register()
    }
  }

  /**
   * Register the plugin with the application
   */
  public register(): void {
    // Register the plugin with the application
    this.app.instance('nextjs', this)

    // Register the Next.js config
    this.app.instance('nextjs.config', this.options.nextConfig)
  }

  /**
   * Initialize the application for Next.js
   */
  public async initialize(): Promise<void> {
    // Initialize the application
    if (!this.app.isBooted()) {
      this.app.boot()
    }

    // Run custom initializer if provided
    if (this.options.customInitializer) {
      await Promise.resolve(this.options.customInitializer(this.app))
    }
  }

  /**
   * Get the Next.js App wrapper
   */
  public withApp(AppComponent: React.ComponentType<AppProps>): React.ComponentType<AppProps> {
    const plugin = this
    const options = this.options

    return class AppWithTsApplication extends React.Component<AppProps> {
      static async getInitialProps(appContext: any) {
        // Initialize the application in getInitialProps if enabled
        if (options.initializeInGetInitialProps) {
          await plugin.initialize()
        }

        // Call the original getInitialProps if it exists
        let appProps = {}
        if (typeof AppComponent === 'function' && 'getInitialProps' in AppComponent) {
          appProps = await (AppComponent as any).getInitialProps(appContext)
        }

        return { ...appProps }
      }

      render() {
        return <AppComponent {...this.props} />
      }
    }
  }

  /**
   * Get the Next.js config with the plugin
   */
  public withConfig(config: NextConfig = {}): NextConfig {
    const mergedConfig: NextConfig = {
      ...this.options.nextConfig,
      ...config,
    }

    return mergedConfig
  }

  /**
   * Create a getServerSideProps function with the application
   */
  public withGetServerSideProps(
    getServerSideProps: (context: any, app: IApplication) => Promise<any>,
  ): (context: any) => Promise<any> {
    const options = this.options

    return async (context: any) => {
      // Initialize the application in getServerSideProps if enabled
      if (options.initializeInGetServerSideProps) {
        await this.initialize()
      }

      // Call the original getServerSideProps
      return await getServerSideProps(context, this.app)
    }
  }

  /**
   * Create a getStaticProps function with the application
   */
  public withGetStaticProps(
    getStaticProps: (context: any, app: IApplication) => Promise<any>,
  ): (context: any) => Promise<any> {
    const options = this.options

    return async (context: any) => {
      // Initialize the application in getStaticProps if enabled
      if (options.initializeInGetStaticProps) {
        await this.initialize()
      }

      // Call the original getStaticProps
      return await getStaticProps(context, this.app)
    }
  }

  /**
   * Create an API route handler with the application
   */
  public withApiRoute(
    handler: (req: any, res: any, app: IApplication) => Promise<void>,
  ): (req: any, res: any) => Promise<void> {
    const options = this.options

    return async (req: any, res: any) => {
      // Initialize the application in API routes if enabled
      if (options.initializeInApiRoutes) {
        await this.initialize()
      }

      // Call the original handler
      return await handler(req, res, this.app)
    }
  }

  /**
   * Get the application instance
   */
  public getApp(): IApplication {
    return this.app
  }

  /**
   * Get the plugin options
   */
  public getOptions(): NextJsPluginOptions {
    return this.options
  }
}

/**
 * Create a Next.js plugin for the application
 *
 * @param app - The application instance
 * @param options - The plugin options
 * @returns The Next.js plugin instance
 */
export function createNextJsPlugin(
  app: IApplication,
  options: NextJsPluginOptions = {},
): NextJsPlugin {
  return new NextJsPlugin(app, options)
}

/**
 * Next.js plugin factory
 */
export const nextjs = {
  /**
   * Create a Next.js plugin for the application
   *
   * @param app - The application instance
   * @param options - The plugin options
   * @returns The Next.js plugin instance
   */
  create: createNextJsPlugin,
}

export default nextjs
