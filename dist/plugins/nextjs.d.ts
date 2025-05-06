import React from 'react';
import { NextConfig } from 'next';
import { AppProps } from 'next/app';
import { IApplication } from '@pixielity/ts-types';

/**
 * Next.js plugin configuration options
 */
interface NextJsPluginOptions {
    /**
     * Whether to register the plugin automatically
     * @default true
     */
    autoRegister?: boolean;
    /**
     * Whether to initialize the application in getInitialProps
     * @default true
     */
    initializeInGetInitialProps?: boolean;
    /**
     * Whether to initialize the application in getServerSideProps
     * @default true
     */
    initializeInGetServerSideProps?: boolean;
    /**
     * Whether to initialize the application in getStaticProps
     * @default false
     */
    initializeInGetStaticProps?: boolean;
    /**
     * Whether to initialize the application in API routes
     * @default true
     */
    initializeInApiRoutes?: boolean;
    /**
     * Custom initialization function
     */
    customInitializer?: (app: IApplication) => Promise<void> | void;
    /**
     * Cache configuration for server-side rendering
     */
    cache?: {
        /**
         * Whether to enable cache for server-side rendering
         * @default true
         */
        enabled?: boolean;
        /**
         * Cache store to use for server-side rendering
         * @default 'memory'
         */
        store?: 'memory' | 'redis' | string;
        /**
         * Cache TTL in seconds
         * @default 60
         */
        ttl?: number;
    };
    /**
     * Configuration options for the Next.js config
     */
    nextConfig?: NextConfig;
}
/**
 * Next.js plugin for the application
 */
declare class NextJsPlugin {
    /**
     * The application instance
     */
    private app;
    /**
     * The plugin options
     */
    private options;
    /**
     * Create a new Next.js plugin instance
     *
     * @param app - The application instance
     * @param options - The plugin options
     */
    constructor(app: IApplication, options?: NextJsPluginOptions);
    /**
     * Register the plugin with the application
     */
    register(): void;
    /**
     * Initialize the application for Next.js
     */
    initialize(): Promise<void>;
    /**
     * Get the Next.js App wrapper
     */
    withApp(AppComponent: React.ComponentType<AppProps>): React.ComponentType<AppProps>;
    /**
     * Get the Next.js config with the plugin
     */
    withConfig(config?: NextConfig): NextConfig;
    /**
     * Create a getServerSideProps function with the application
     */
    withGetServerSideProps(getServerSideProps: (context: any, app: IApplication) => Promise<any>): (context: any) => Promise<any>;
    /**
     * Create a getStaticProps function with the application
     */
    withGetStaticProps(getStaticProps: (context: any, app: IApplication) => Promise<any>): (context: any) => Promise<any>;
    /**
     * Create an API route handler with the application
     */
    withApiRoute(handler: (req: any, res: any, app: IApplication) => Promise<void>): (req: any, res: any) => Promise<void>;
    /**
     * Get the application instance
     */
    getApp(): IApplication;
    /**
     * Get the plugin options
     */
    getOptions(): NextJsPluginOptions;
}
/**
 * Create a Next.js plugin for the application
 *
 * @param app - The application instance
 * @param options - The plugin options
 * @returns The Next.js plugin instance
 */
declare function createNextJsPlugin(app: IApplication, options?: NextJsPluginOptions): NextJsPlugin;
/**
 * Next.js plugin factory
 */
declare const nextjs: {
    /**
     * Create a Next.js plugin for the application
     *
     * @param app - The application instance
     * @param options - The plugin options
     * @returns The Next.js plugin instance
     */
    create: typeof createNextJsPlugin;
};

export { NextJsPlugin, type NextJsPluginOptions, createNextJsPlugin, nextjs as default, nextjs };
