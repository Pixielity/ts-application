import { ConfigEnvironment } from '@pixielity/ts-types';

/**
 * @pixielity/ts-mixins v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */

var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
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

// src/config/loaders/module-config-loader.ts
var ModuleConfigLoader = class _ModuleConfigLoader {
  /**
   * Create a new module config loader
   */
  constructor() {
    /**
     * The configuration cache
     */
    this.configCache = /* @__PURE__ */ new Map();
  }
  /**
   * Create a new module config loader
   *
   * @returns A new module config loader
   */
  static make() {
    return new _ModuleConfigLoader();
  }
  /**
   * Load configuration from a module source
   *
   * @param source - The source to load from (path, key, etc.)
   * @returns The loaded configuration
   */
  async load(source) {
    if (this.configCache.has(source)) {
      return this.configCache.get(source) || {};
    }
    try {
      if (isNode()) {
        const fs = await import('fs');
        if (!fs.existsSync(source)) {
          return {};
        }
      }
      const config = await this.loadConfigDynamically(source);
      this.configCache.set(source, config);
      return config;
    } catch (error) {
      console.warn(`Error loading module configuration from ${source}:`, error);
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
    return source.endsWith(".ts") || source.endsWith(".js") || source.endsWith(".mjs");
  }
  /**
   * Load configuration dynamically based on the environment
   *
   * @param source - The source to load from
   * @returns The loaded configuration
   * @private
   */
  async loadConfigDynamically(source) {
    try {
      if (isNode()) {
        try {
          const module = await import(source);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        } catch (e) {
          const module = __require(source);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        }
      }
      if (isNextJs()) {
        try {
          const module = await import(source);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        } catch (e) {
          console.warn(`Error importing module in Next.js environment: ${e}`);
          return {};
        }
      }
      if (isBrowser()) {
        try {
          const normalizedPath = this.normalizeBrowserPath(source);
          const module = await import(normalizedPath);
          const config = module.default || module;
          return typeof config === "function" ? await config() : config;
        } catch (e) {
          console.warn(`Error importing module in browser environment: ${e}`);
          return {};
        }
      }
      return {};
    } catch (error) {
      console.warn(`Error dynamically importing configuration from ${source}:`, error);
      return {};
    }
  }
  /**
   * Normalize a path for browser usage
   *
   * @param source - The source path
   * @returns The normalized path
   * @private
   */
  normalizeBrowserPath(source) {
    if (source.startsWith("http://") || source.startsWith("https://")) {
      return source;
    }
    if (typeof window !== "undefined" && window.location) {
      const baseUrl = window.location.origin;
      return new URL(source, baseUrl).toString();
    }
    return source;
  }
};

export { JsonConfigLoader, ModuleConfigLoader };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map