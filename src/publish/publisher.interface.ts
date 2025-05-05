/**
 * IPublisher options
 */
export interface IPublisherOptions {
  /**
   * Whether to force overwrite existing files
   */
  force?: boolean
}

/**
 * Interface for the Publisher service.
 */
export interface IPublisher {
  /**
   * Register a publisher function under a given name.
   *
   * @param name - The publisher name
   * @param publisher - The publishing function
   */
  register(
    name: string,
    publisher: (source: string, target: string, options: IPublisherOptions) => Promise<boolean>,
  ): IPublisher

  /**
   * Publish using a registered publisher.
   *
   * @param name - The publisher name
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   */
  publish(
    name: string,
    source: string,
    target: string,
    options?: IPublisherOptions,
  ): Promise<boolean>

  /**
   * Publish assets.
   */
  publishAssets(source: string, target: string, options?: IPublisherOptions): Promise<boolean>

  /**
   * Publish views.
   */
  publishViews(source: string, target: string, options?: IPublisherOptions): Promise<boolean>

  /**
   * Publish translations.
   */
  publishTranslations(source: string, target: string, options?: IPublisherOptions): Promise<boolean>

  /**
   * Publish configuration files.
   */
  publishConfig(source: string, target: string, options?: IPublisherOptions): Promise<boolean>
}

/**
 * IApplication options
 */
export namespace IPublisher {
  export const $ = Symbol.for('IPublisher')
}
