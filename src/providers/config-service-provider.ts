import * as path from 'path'
import { IConfig, IConfigRepository } from '@pixielity/ts-types'

import { ServiceProvider } from '../service-provider'
import { ConfigRepository } from '../config/repository'
import { JsonConfigLoader } from '../config/loaders/json-config-loader'
import { ModuleConfigLoader } from '../config/loaders/module-config-loader'
import { isNode, isNextJs } from '../config/environment'

/**
 * Configuration service provider that registers the configuration repository.
 */
export class ConfigServiceProvider extends ServiceProvider {
  /**
   * Register any application services.
   */
  public register(): void {
    // Register the config repository as a singleton
    this.app.singleton(IConfig.$, async () => {
      // Aggregate all configuration files first
      const configItems = await this.loadConfigurationFiles()

      // Create the config repository with the aggregated items
      const config = ConfigRepository.make({
        items: configItems,
        cache: true,
        validate: false, // Enable validation if needed
      })

      return config
    })

    // Make the config repository available globally
    try {
      // @ts-ignore
      global.config = this.app.make<IConfigRepository>(IConfig.$)
    } catch (error) {
      console.warn('Error setting global config:', error)
    }
  }

  /**
   * Load all configuration files and aggregate them.
   *
   * @returns The aggregated configuration items
   */
  private async loadConfigurationFiles(): Promise<Record<string, any>> {
    const items: Record<string, any> = {}

    try {
      // Get the config directory path
      const configPath = this.getConfigPath()

      // Create loaders
      const jsonLoader = JsonConfigLoader.make()
      const moduleLoader = ModuleConfigLoader.make()

      // Get the current environment
      const env = process.env.NODE_ENV || 'development'

      // Get all config files
      const files = await this.getConfigFiles(configPath)

      // Process each file
      for (const file of files) {
        // Skip environment-specific files, we'll handle them separately
        if (file.includes(`.${env}.`)) {
          continue
        }

        // Get the config key from the filename (e.g., "app" from "app.js")
        const key = path.basename(file, path.extname(file))

        // Load the configuration based on file type
        let config: Record<string, any> = {}

        if (jsonLoader.canLoad(file)) {
          config = await jsonLoader.load(file)
        } else if (moduleLoader.canLoad(file)) {
          config = await moduleLoader.load(file)
        }

        // Store the configuration under its key
        items[key] = config

        // Check for environment-specific override
        const extname = path.extname(file)
        const basename = path.basename(file, extname)
        const envFile = path.join(path.dirname(file), `${basename}.${env}${extname}`)

        // If an environment-specific file exists, merge it with the base config
        let envConfig: Record<string, any> = {}

        if (jsonLoader.canLoad(envFile)) {
          envConfig = await jsonLoader.load(envFile)
        } else if (moduleLoader.canLoad(envFile)) {
          envConfig = await moduleLoader.load(envFile)
        }

        if (Object.keys(envConfig).length > 0) {
          items[key] = this.mergeDeep(items[key], envConfig)
        }
      }
    } catch (error) {
      console.warn('Error loading configuration files:', error)
    }

    return items
  }

  /**
   * Get the configuration directory path.
   *
   * @returns The configuration directory path
   */
  private getConfigPath(): string {
    // Default config path
    let configPath = 'config'

    // In Node.js, use path.resolve
    if (isNode()) {
      configPath = path.resolve(process.cwd(), 'config')
    }
    // In Next.js, handle both client and server
    else if (isNextJs()) {
      if (typeof process !== 'undefined' && process.cwd) {
        configPath = path.resolve(process.cwd(), 'config')
      } else {
        configPath = '/config' // Client-side path
      }
    }

    return configPath
  }

  /**
   * Get all configuration files.
   *
   * @param directory - The directory to scan
   * @returns An array of file paths
   */
  private async getConfigFiles(directory: string): Promise<string[]> {
    const files: string[] = []

    try {
      // In Node.js, we can use fs
      if (isNode()) {
        const fs = await import('fs')

        // Check if the directory exists
        if (!fs.existsSync(directory)) {
          return files
        }

        // Get all entries in the directory
        const entries = fs.readdirSync(directory, { withFileTypes: true })

        // Process each entry
        for (const entry of entries) {
          const fullPath = path.join(directory, entry.name)

          if (entry.isDirectory()) {
            // Recursively get files from subdirectories
            const subFiles = await this.getConfigFiles(fullPath)
            files.push(...subFiles)
          } else if (entry.isFile()) {
            // Add the file if it's a supported type
            const ext = path.extname(entry.name).toLowerCase()
            if (['.js', '.json', '.ts', '.mjs'].includes(ext)) {
              files.push(fullPath)
            }
          }
        }
      }
      // In Next.js or browser, we might need to use a different approach
      else {
        // This is a simplified approach for client-side
        // In a real app, you might want to use a manifest or API endpoint
        // to get the list of config files
        console.warn('Getting config files in browser environment is not fully supported')
      }
    } catch (error) {
      console.warn(`Error scanning directory ${directory}:`, error)
    }

    return files
  }

  /**
   * Deep merge two objects.
   *
   * @param target - The target object
   * @param source - The source object
   * @returns The merged object
   */
  private mergeDeep(target: any, source: any): any {
    const output = { ...target }

    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (this.isObject(source[key])) {
          if (!(key in target)) {
            Object.assign(output, { [key]: source[key] })
          } else {
            output[key] = this.mergeDeep(target[key], source[key])
          }
        } else {
          Object.assign(output, { [key]: source[key] })
        }
      })
    }

    return output
  }

  /**
   * Check if a value is an object.
   *
   * @param item - The value to check
   * @returns Whether the value is an object
   */
  private isObject(item: any): boolean {
    return item && typeof item === 'object' && !Array.isArray(item)
  }

  /**
   * Bootstrap any application services.
   */
  public boot(): void {
    // No boot actions needed
  }
}

export default ConfigServiceProvider
