import type { IConfigLoader } from '@pixielity/ts-types'
import { isNode, isBrowser, isNextJs } from '../environment'

/**
 * Module config loader implementation
 */
export class ModuleConfigLoader implements IConfigLoader {
  /**
   * The configuration cache
   */
  private configCache: Map<string, Record<string, any>> = new Map()

  /**
   * Create a new module config loader
   */
  constructor() {
    // Initialize the loader
  }

  /**
   * Create a new module config loader
   *
   * @returns A new module config loader
   */
  public static make(): ModuleConfigLoader {
    return new ModuleConfigLoader()
  }

  /**
   * Load configuration from a module source
   *
   * @param source - The source to load from (path, key, etc.)
   * @returns The loaded configuration
   */
  public async load(source: string): Promise<Record<string, any>> {
    // Check if the configuration is already cached
    if (this.configCache.has(source)) {
      return this.configCache.get(source) || {}
    }

    try {
      // Check if the file exists before trying to load it
      if (isNode()) {
        const fs = await import('fs')
        if (!fs.existsSync(source)) {
          return {}
        }
      }

      // Load the configuration based on the environment
      const config = await this.loadConfigDynamically(source)

      // Cache the configuration
      this.configCache.set(source, config)

      return config
    } catch (error) {
      console.warn(`Error loading module configuration from ${source}:`, error)
      return {}
    }
  }

  /**
   * Check if the loader can load from the given source
   *
   * @param source - The source to check
   * @returns Whether the loader can load from the source
   */
  public canLoad(source: string): boolean {
    return source.endsWith('.ts') || source.endsWith('.js') || source.endsWith('.mjs')
  }

  /**
   * Load configuration dynamically based on the environment
   *
   * @param source - The source to load from
   * @returns The loaded configuration
   * @private
   */
  private async loadConfigDynamically(source: string): Promise<Record<string, any>> {
    try {
      // Node.js environment
      if (isNode()) {
        // In Node.js, we can use require or dynamic import
        try {
          // Try dynamic import first (works with ESM)
          const module = await import(source)
          const config = module.default || module
          return typeof config === 'function' ? await config() : config
        } catch (e) {
          // Fallback to require for CommonJS
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const module = require(source)
          const config = module.default || module
          return typeof config === 'function' ? await config() : config
        }
      }

      // Next.js environment
      if (isNextJs()) {
        // In Next.js, we can use dynamic import
        try {
          // For Next.js, we need to handle both client and server environments
          const module = await import(source)
          const config = module.default || module
          return typeof config === 'function' ? await config() : config
        } catch (e) {
          console.warn(`Error importing module in Next.js environment: ${e}`)
          return {}
        }
      }

      // Browser environment
      if (isBrowser()) {
        // In a browser, we can use dynamic import for ES modules
        try {
          // For browsers, we need to ensure the path is correct
          const normalizedPath = this.normalizeBrowserPath(source)
          const module = await import(normalizedPath)
          const config = module.default || module
          return typeof config === 'function' ? await config() : config
        } catch (e) {
          console.warn(`Error importing module in browser environment: ${e}`)
          return {}
        }
      }

      // Unknown environment - return empty object
      return {}
    } catch (error) {
      console.warn(`Error dynamically importing configuration from ${source}:`, error)
      return {}
    }
  }

  /**
   * Normalize a path for browser usage
   *
   * @param source - The source path
   * @returns The normalized path
   * @private
   */
  private normalizeBrowserPath(source: string): string {
    // In browsers, we need to ensure the path is relative to the base URL
    // or is an absolute URL
    if (source.startsWith('http://') || source.startsWith('https://')) {
      return source
    }

    // If it's a relative path, make it relative to the base URL
    if (typeof window !== 'undefined' && window.location) {
      const baseUrl = window.location.origin
      return new URL(source, baseUrl).toString()
    }

    return source
  }
}
