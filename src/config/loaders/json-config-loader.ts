/**
 * @file json-config-loader.ts
 * @description Production-ready JSON config loader implementation
 */
import type { IConfigLoader } from '@pixielity/ts-types'

import { isNode, isBrowser, isNextJs } from '../environment'

/**
 * JSON config loader implementation
 */
export class JsonConfigLoader implements IConfigLoader {
  /**
   * The configuration cache
   */
  private configCache: Map<string, Record<string, any>> = new Map()

  /**
   * Create a new JSON config loader
   */
  constructor() {
    // Initialize the loader
  }

  /**
   * Create a new JSON config loader
   *
   * @returns A new JSON config loader
   */
  public static make(): JsonConfigLoader {
    return new JsonConfigLoader()
  }

  /**
   * Load configuration from a JSON source
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
      let config: Record<string, any> = {}

      // Node.js environment
      if (isNode()) {
        const fs = await import('fs')

        // Check if the file exists
        if (!fs.existsSync(source)) {
          return {}
        }

        // Read the file
        const fileContent = fs.readFileSync(source, 'utf8')
        config = JSON.parse(fileContent)
      }
      // Next.js environment
      else if (isNextJs()) {
        try {
          // For Next.js, we can use fetch in the browser or fs in Node.js
          if (typeof window !== 'undefined') {
            const response = await fetch(source)
            config = await response.json()
          } else {
            const fs = await import('fs')
            if (fs.existsSync(source)) {
              const fileContent = fs.readFileSync(source, 'utf8')
              config = JSON.parse(fileContent)
            }
          }
        } catch (e) {
          console.warn(`Error loading JSON in Next.js environment: ${e}`)
          return {}
        }
      }
      // Browser environment
      else if (isBrowser()) {
        try {
          // In a browser, we can use fetch
          const response = await fetch(source)
          config = await response.json()
        } catch (e) {
          console.warn(`Error loading JSON in browser environment: ${e}`)
          return {}
        }
      }

      // Cache the configuration
      this.configCache.set(source, config)

      return config
    } catch (error) {
      console.warn(`Error loading JSON configuration from ${source}:`, error)
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
    return source.endsWith('.json')
  }
}
