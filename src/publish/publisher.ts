import { injectable } from 'inversify'
import * as fs from 'fs'
import * as path from 'path'
import { IPublisher, IPublisherOptions } from './publisher.interface'

/**
 * Publisher for publishing assets, views, and translations
 */
@injectable()
export class Publisher implements IPublisher {
  /**
   * The registered publishers
   */
  private publishers: Map<
    string,
    (source: string, target: string, options: IPublisherOptions) => Promise<boolean>
  > = new Map()

  /**
   * Create a new publisher
   */
  constructor() {
    // Register default publishers
    this.registerDefaultPublishers()
  }

  /**
   * Create a new publisher
   *
   * @returns A new publisher
   */
  public static make(): IPublisher {
    return new Publisher()
  }

  /**
   * Register default publishers
   * @private
   */
  private registerDefaultPublishers(): void {
    // Register asset publisher
    this.register('assets', this.publishAssets.bind(this))

    // Register views publisher
    this.register('views', this.publishViews.bind(this))

    // Register translations publisher
    this.register('translations', this.publishTranslations.bind(this))

    // Register config publisher
    this.register('config', this.publishConfig.bind(this))
  }

  /**
   * Register a publisher
   *
   * @param name - The publisher name
   * @param publisher - The publisher function
   * @returns The publisher instance
   */
  public register(
    name: string,
    publisher: (source: string, target: string, options: IPublisherOptions) => Promise<boolean>,
  ): IPublisher {
    this.publishers.set(name, publisher)
    return this
  }

  /**
   * Publish assets
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  public async publishAssets(
    source: string,
    target: string,
    options: IPublisherOptions = {},
  ): Promise<boolean> {
    return this.publishDirectory(source, target, options)
  }

  /**
   * Publish views
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  public async publishViews(
    source: string,
    target: string,
    options: IPublisherOptions = {},
  ): Promise<boolean> {
    return this.publishDirectory(source, target, options)
  }

  /**
   * Publish translations
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  public async publishTranslations(
    source: string,
    target: string,
    options: IPublisherOptions = {},
  ): Promise<boolean> {
    return this.publishDirectory(source, target, options)
  }

  /**
   * Publish configuration
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  public async publishConfig(
    source: string,
    target: string,
    options: IPublisherOptions = {},
  ): Promise<boolean> {
    return this.publishDirectory(source, target, options)
  }

  /**
   * Publish a directory
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   * @private
   */
  private async publishDirectory(
    source: string,
    target: string,
    options: IPublisherOptions = {},
  ): Promise<boolean> {
    try {
      // Create the target directory if it doesn't exist
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true })
      }

      // Get all files in the source directory
      const files = this.getFiles(source)

      // Publish each file
      for (const file of files) {
        const relativePath = path.relative(source, file)
        const targetPath = path.join(target, relativePath)

        // Create the target directory if it doesn't exist
        const targetDir = path.dirname(targetPath)
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true })
        }

        // Skip if the file exists and force is not enabled
        if (fs.existsSync(targetPath) && !options.force) {
          console.log(`Skipping ${targetPath} (already exists)`)
          continue
        }

        // Copy the file
        fs.copyFileSync(file, targetPath)
        console.log(`Published ${targetPath}`)
      }

      return true
    } catch (error) {
      console.error(`Error publishing directory ${source} to ${target}:`, error)
      return false
    }
  }

  /**
   * Get all files in a directory recursively
   *
   * @param directory - The directory to get files from
   * @returns The files in the directory
   * @private
   */
  private getFiles(directory: string): string[] {
    const files: string[] = []

    // Get all entries in the directory
    const entries = fs.readdirSync(directory, { withFileTypes: true })

    // Process each entry
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name)

      if (entry.isDirectory()) {
        // Recursively get files from subdirectories
        files.push(...this.getFiles(fullPath))
      } else {
        // Add the file
        files.push(fullPath)
      }
    }

    return files
  }

  /**
   * Publish using a registered publisher
   *
   * @param name - The publisher name
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  public async publish(
    name: string,
    source: string,
    target: string,
    options: IPublisherOptions = {},
  ): Promise<boolean> {
    const publisher = this.publishers.get(name)

    if (!publisher) {
      throw new Error(`Publisher "${name}" not found`)
    }

    return publisher(source, target, options)
  }
}
