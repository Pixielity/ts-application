import { ConfigEnvironment } from '@pixielity/ts-types'

/**
 * Detect the current environment
 *
 * @returns The detected environment
 */
export function detectEnvironment(): ConfigEnvironment {
  // Check for Node.js
  if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    return ConfigEnvironment.NODE
  }

  // Check for Next.js
  if (
    typeof process !== 'undefined' &&
    process.env &&
    (process.env.__NEXT_RUNTIME || process.env.NEXT_RUNTIME || process.env.NEXT_PUBLIC_RUNTIME)
  ) {
    return ConfigEnvironment.NEXTJS
  }

  // Check for React Native
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return ConfigEnvironment.REACT_NATIVE
  }

  // Check for browser
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    return ConfigEnvironment.BROWSER
  }

  // Unknown environment
  return ConfigEnvironment.UNKNOWN
}

/**
 * Check if the current environment is Node.js
 *
 * @returns Whether the current environment is Node.js
 */
export function isNode(): boolean {
  return detectEnvironment() === ConfigEnvironment.NODE
}

/**
 * Check if the current environment is a browser
 *
 * @returns Whether the current environment is a browser
 */
export function isBrowser(): boolean {
  return detectEnvironment() === ConfigEnvironment.BROWSER
}

/**
 * Check if the current environment is Next.js
 *
 * @returns Whether the current environment is Next.js
 */
export function isNextJs(): boolean {
  return detectEnvironment() === ConfigEnvironment.NEXTJS
}

/**
 * Check if the current environment is React Native
 *
 * @returns Whether the current environment is React Native
 */
export function isReactNative(): boolean {
  return detectEnvironment() === ConfigEnvironment.REACT_NATIVE
}

/**
 * Get the current Node.js environment
 *
 * @returns The current Node.js environment or undefined if not in Node.js
 */
export function getNodeEnv(): string | undefined {
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NODE_ENV
  }
  return undefined
}

/**
 * Check if the current environment is development
 *
 * @returns Whether the current environment is development
 */
export function isDevelopment(): boolean {
  const env = getNodeEnv()
  return env === 'development' || env === undefined
}

/**
 * Check if the current environment is production
 *
 * @returns Whether the current environment is production
 */
export function isProduction(): boolean {
  return getNodeEnv() === 'production'
}

/**
 * Check if the current environment is test
 *
 * @returns Whether the current environment is test
 */
export function isTest(): boolean {
  return getNodeEnv() === 'test'
}
