import { ConfigEnvironment } from '@pixielity/ts-types';

/**
 * Detect the current environment
 *
 * @returns The detected environment
 */
declare function detectEnvironment(): ConfigEnvironment;
/**
 * Check if the current environment is Node.js
 *
 * @returns Whether the current environment is Node.js
 */
declare function isNode(): boolean;
/**
 * Check if the current environment is a browser
 *
 * @returns Whether the current environment is a browser
 */
declare function isBrowser(): boolean;
/**
 * Check if the current environment is Next.js
 *
 * @returns Whether the current environment is Next.js
 */
declare function isNextJs(): boolean;
/**
 * Check if the current environment is React Native
 *
 * @returns Whether the current environment is React Native
 */
declare function isReactNative(): boolean;
/**
 * Get the current Node.js environment
 *
 * @returns The current Node.js environment or undefined if not in Node.js
 */
declare function getNodeEnv(): string | undefined;
/**
 * Check if the current environment is development
 *
 * @returns Whether the current environment is development
 */
declare function isDevelopment(): boolean;
/**
 * Check if the current environment is production
 *
 * @returns Whether the current environment is production
 */
declare function isProduction(): boolean;
/**
 * Check if the current environment is test
 *
 * @returns Whether the current environment is test
 */
declare function isTest(): boolean;

export { detectEnvironment, getNodeEnv, isBrowser, isDevelopment, isNextJs, isNode, isProduction, isReactNative, isTest };
