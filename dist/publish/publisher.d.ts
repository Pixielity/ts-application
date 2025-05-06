import { IPublisher, IPublisherOptions } from './publisher.interface.js';

/**
 * Publisher for publishing assets, views, and translations
 */
declare class Publisher implements IPublisher {
    /**
     * The registered publishers
     */
    private publishers;
    /**
     * Create a new publisher
     */
    constructor();
    /**
     * Create a new publisher
     *
     * @returns A new publisher
     */
    static make(): IPublisher;
    /**
     * Register default publishers
     * @private
     */
    private registerDefaultPublishers;
    /**
     * Register a publisher
     *
     * @param name - The publisher name
     * @param publisher - The publisher function
     * @returns The publisher instance
     */
    register(name: string, publisher: (source: string, target: string, options: IPublisherOptions) => Promise<boolean>): IPublisher;
    /**
     * Publish assets
     *
     * @param source - The source directory
     * @param target - The target directory
     * @param options - The publisher options
     * @returns Whether the publishing was successful
     */
    publishAssets(source: string, target: string, options?: IPublisherOptions): Promise<boolean>;
    /**
     * Publish views
     *
     * @param source - The source directory
     * @param target - The target directory
     * @param options - The publisher options
     * @returns Whether the publishing was successful
     */
    publishViews(source: string, target: string, options?: IPublisherOptions): Promise<boolean>;
    /**
     * Publish translations
     *
     * @param source - The source directory
     * @param target - The target directory
     * @param options - The publisher options
     * @returns Whether the publishing was successful
     */
    publishTranslations(source: string, target: string, options?: IPublisherOptions): Promise<boolean>;
    /**
     * Publish configuration
     *
     * @param source - The source directory
     * @param target - The target directory
     * @param options - The publisher options
     * @returns Whether the publishing was successful
     */
    publishConfig(source: string, target: string, options?: IPublisherOptions): Promise<boolean>;
    /**
     * Publish a directory
     *
     * @param source - The source directory
     * @param target - The target directory
     * @param options - The publisher options
     * @returns Whether the publishing was successful
     * @private
     */
    private publishDirectory;
    /**
     * Get all files in a directory recursively
     *
     * @param directory - The directory to get files from
     * @returns The files in the directory
     * @private
     */
    private getFiles;
    /**
     * Publish using a registered publisher
     *
     * @param name - The publisher name
     * @param source - The source directory
     * @param target - The target directory
     * @param options - The publisher options
     * @returns Whether the publishing was successful
     */
    publish(name: string, source: string, target: string, options?: IPublisherOptions): Promise<boolean>;
}

export { Publisher };
