import { ConfigEnvironment } from '@pixielity/ts-types';

/**
 * @pixielity/ts-application v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */

function detectEnvironment() {
  if (typeof process !== "undefined" && process.versions && process.versions.node) {
    return ConfigEnvironment.NODE;
  }
  if (typeof process !== "undefined" && process.env && (process.env.__NEXT_RUNTIME || process.env.NEXT_RUNTIME || process.env.NEXT_PUBLIC_RUNTIME)) {
    return ConfigEnvironment.NEXTJS;
  }
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return ConfigEnvironment.REACT_NATIVE;
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return ConfigEnvironment.BROWSER;
  }
  return ConfigEnvironment.UNKNOWN;
}
function isNode() {
  return detectEnvironment() === ConfigEnvironment.NODE;
}
function isBrowser() {
  return detectEnvironment() === ConfigEnvironment.BROWSER;
}
function isNextJs() {
  return detectEnvironment() === ConfigEnvironment.NEXTJS;
}
function isReactNative() {
  return detectEnvironment() === ConfigEnvironment.REACT_NATIVE;
}
function getNodeEnv() {
  if (typeof process !== "undefined" && process.env) {
    return process.env.NODE_ENV;
  }
  return void 0;
}
function isDevelopment() {
  const env = getNodeEnv();
  return env === "development" || env === void 0;
}
function isProduction() {
  return getNodeEnv() === "production";
}
function isTest() {
  return getNodeEnv() === "test";
}

export { detectEnvironment, getNodeEnv, isBrowser, isDevelopment, isNextJs, isNode, isProduction, isReactNative, isTest };
//# sourceMappingURL=environment.mjs.map
//# sourceMappingURL=environment.mjs.map