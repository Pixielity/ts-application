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

// src/config/loaders/json-config-loader.ts
var JsonConfigLoader = class _JsonConfigLoader {
  /**
   * Create a new JSON config loader
   */
  constructor() {
    /**
     * The configuration cache
     */
    this.configCache = /* @__PURE__ */ new Map();
  }
  /**
   * Create a new JSON config loader
   *
   * @returns A new JSON config loader
   */
  static make() {
    return new _JsonConfigLoader();
  }
  /**
   * Load configuration from a JSON source
   *
   * @param source - The source to load from (path, key, etc.)
   * @returns The loaded configuration
   */
  async load(source) {
    if (this.configCache.has(source)) {
      return this.configCache.get(source) || {};
    }
    try {
      let config = {};
      if (isNode()) {
        const fs = await import('fs');
        if (!fs.existsSync(source)) {
          return {};
        }
        const fileContent = fs.readFileSync(source, "utf8");
        config = JSON.parse(fileContent);
      } else if (isNextJs()) {
        try {
          if (typeof window !== "undefined") {
            const response = await fetch(source);
            config = await response.json();
          } else {
            const fs = await import('fs');
            if (fs.existsSync(source)) {
              const fileContent = fs.readFileSync(source, "utf8");
              config = JSON.parse(fileContent);
            }
          }
        } catch (e) {
          console.warn(`Error loading JSON in Next.js environment: ${e}`);
          return {};
        }
      } else if (isBrowser()) {
        try {
          const response = await fetch(source);
          config = await response.json();
        } catch (e) {
          console.warn(`Error loading JSON in browser environment: ${e}`);
          return {};
        }
      }
      this.configCache.set(source, config);
      return config;
    } catch (error) {
      console.warn(`Error loading JSON configuration from ${source}:`, error);
      return {};
    }
  }
  /**
   * Check if the loader can load from the given source
   *
   * @param source - The source to check
   * @returns Whether the loader can load from the source
   */
  canLoad(source) {
    return source.endsWith(".json");
  }
};
if (typeof module !== "undefined") { module.exports = module.exports.default; }

exports.JsonConfigLoader = JsonConfigLoader;
//# sourceMappingURL=json-config-loader.js.map
//# sourceMappingURL=json-config-loader.js.map