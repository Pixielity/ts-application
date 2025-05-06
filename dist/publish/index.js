'use strict';

var fs = require('fs');
var path = require('path');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var fs__namespace = /*#__PURE__*/_interopNamespace(fs);
var path__namespace = /*#__PURE__*/_interopNamespace(path);

/**
 * @pixielity/ts-mixins v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */

var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (decorator(result)) || result;
  return result;
};
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";

// ../../../node_modules/inversify/es/constants/error_msgs.js
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";

// ../../../node_modules/inversify/es/annotation/injectable.js
function injectable() {
  return function(target) {
    if (Reflect.hasOwnMetadata(PARAM_TYPES, target)) {
      throw new Error(DUPLICATED_INJECTABLE_DECORATOR);
    }
    var types = Reflect.getMetadata(DESIGN_PARAM_TYPES, target) || [];
    Reflect.defineMetadata(PARAM_TYPES, types, target);
    return target;
  };
}
exports.Publisher = class Publisher {
  /**
   * Create a new publisher
   */
  constructor() {
    /**
     * The registered publishers
     */
    this.publishers = /* @__PURE__ */ new Map();
    this.registerDefaultPublishers();
  }
  /**
   * Create a new publisher
   *
   * @returns A new publisher
   */
  static make() {
    return new exports.Publisher();
  }
  /**
   * Register default publishers
   * @private
   */
  registerDefaultPublishers() {
    this.register("assets", this.publishAssets.bind(this));
    this.register("views", this.publishViews.bind(this));
    this.register("translations", this.publishTranslations.bind(this));
    this.register("config", this.publishConfig.bind(this));
  }
  /**
   * Register a publisher
   *
   * @param name - The publisher name
   * @param publisher - The publisher function
   * @returns The publisher instance
   */
  register(name, publisher) {
    this.publishers.set(name, publisher);
    return this;
  }
  /**
   * Publish assets
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishAssets(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish views
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishViews(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish translations
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishTranslations(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish configuration
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publishConfig(source, target, options = {}) {
    return this.publishDirectory(source, target, options);
  }
  /**
   * Publish a directory
   *
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   * @private
   */
  async publishDirectory(source, target, options = {}) {
    try {
      if (!fs__namespace.existsSync(target)) {
        fs__namespace.mkdirSync(target, { recursive: true });
      }
      const files = this.getFiles(source);
      for (const file of files) {
        const relativePath = path__namespace.relative(source, file);
        const targetPath = path__namespace.join(target, relativePath);
        const targetDir = path__namespace.dirname(targetPath);
        if (!fs__namespace.existsSync(targetDir)) {
          fs__namespace.mkdirSync(targetDir, { recursive: true });
        }
        if (fs__namespace.existsSync(targetPath) && !options.force) {
          console.log(`Skipping ${targetPath} (already exists)`);
          continue;
        }
        fs__namespace.copyFileSync(file, targetPath);
        console.log(`Published ${targetPath}`);
      }
      return true;
    } catch (error) {
      console.error(`Error publishing directory ${source} to ${target}:`, error);
      return false;
    }
  }
  /**
   * Get all files in a directory recursively
   *
   * @param directory - The directory to get files from
   * @returns The files in the directory
   * @private
   */
  getFiles(directory) {
    const files = [];
    const entries = fs__namespace.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path__namespace.join(directory, entry.name);
      if (entry.isDirectory()) {
        files.push(...this.getFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    return files;
  }
  /**
   * Publish using a registered publisher
   *
   * @param name - The publisher name
   * @param source - The source directory
   * @param target - The target directory
   * @param options - The publisher options
   * @returns Whether the publishing was successful
   */
  async publish(name, source, target, options = {}) {
    const publisher = this.publishers.get(name);
    if (!publisher) {
      throw new Error(`Publisher "${name}" not found`);
    }
    return publisher(source, target, options);
  }
};
exports.Publisher = __decorateClass([
  injectable()
], exports.Publisher);

// src/service-provider.ts
var ServiceProvider = class {
  /**
   * Create a new service provider instance.
   *
   * @param app - The application container instance
   */
  constructor(app) {
    this.app = app;
  }
};

// src/publish/publisher.interface.ts
var IPublisher;
((IPublisher2) => {
  IPublisher2.$ = Symbol.for("IPublisher");
})(IPublisher || (IPublisher = {}));

// src/publish/publish-service-provider.ts
var PublishServiceProvider = class extends ServiceProvider {
  /**
   * Register the service provider
   */
  register() {
    this.app.singleton(IPublisher.$, () => {
      return exports.Publisher.make();
    });
  }
  /**
   * Bootstrap the service provider
   */
  boot() {
  }
};

exports.PublishServiceProvider = PublishServiceProvider;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map