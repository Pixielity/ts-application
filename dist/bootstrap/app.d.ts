import { IApplication } from '@pixielity/ts-types';
export { getApplication } from '../application.js';
import 'inversify';

/**
 * Helper function to access the global app instance
 * This provides a type-safe way to access the global app
 *
 * @returns The global application instance
 */
declare function app(): IApplication;

export { app };
