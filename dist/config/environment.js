'use strict';

var tsTypes = require('@pixielity/ts-types');

// src/config/environment.ts
function detectEnvironment() {
  if (typeof process !== "undefined" && process.versions && process.versions.node) {
    return tsTypes.ConfigEnvironment.NODE;
  }
  if (typeof process !== "undefined" && process.env && (process.env.__NEXT_RUNTIME || process.env.NEXT_RUNTIME || process.env.NEXT_PUBLIC_RUNTIME)) {
    return tsTypes.ConfigEnvironment.NEXTJS;
  }
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return tsTypes.ConfigEnvironment.REACT_NATIVE;
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return tsTypes.ConfigEnvironment.BROWSER;
  }
  return tsTypes.ConfigEnvironment.UNKNOWN;
}
function isNode() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.NODE;
}
function isBrowser() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.BROWSER;
}
function isNextJs() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.NEXTJS;
}
function isReactNative() {
  return detectEnvironment() === tsTypes.ConfigEnvironment.REACT_NATIVE;
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
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.detectEnvironment = detectEnvironment;
exports.getNodeEnv = getNodeEnv;
exports.isBrowser = isBrowser;
exports.isDevelopment = isDevelopment;
exports.isNextJs = isNextJs;
exports.isNode = isNode;
exports.isProduction = isProduction;
exports.isReactNative = isReactNative;
exports.isTest = isTest;
//# sourceMappingURL=environment.js.map
//# sourceMappingURL=environment.js.map