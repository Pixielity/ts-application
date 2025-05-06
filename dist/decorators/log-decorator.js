'use strict';

require('reflect-metadata');

/**
 * @pixielity/ts-mixins v1.0.0
 * 
 * Advanced TypeScript application package with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */

function createClassDecorator(decorator, options = {}) {
  const {
    copyPrototype = true,
    copyStatic = true,
    copyMetadata = true,
    beforeConstructor,
    afterConstructor,
    transformInstance
  } = options;
  return (target) => {
    const decoratedTarget = decorator(target);
    if (decoratedTarget === void 0 || decoratedTarget === target) {
      return target;
    }
    function construct(constructor, args) {
      if (beforeConstructor) {
        beforeConstructor(constructor, args);
      }
      const instance = new constructor(...args);
      if (afterConstructor) {
        afterConstructor(instance, constructor, args);
      }
      return transformInstance ? transformInstance(instance, constructor, args) : instance;
    }
    const newConstructor = (...args) => construct(decoratedTarget, args);
    if (copyPrototype) {
      newConstructor.prototype = decoratedTarget.prototype;
    }
    if (copyStatic) {
      Object.getOwnPropertyNames(decoratedTarget).forEach((prop) => {
        if (prop !== "prototype" && prop !== "name" && prop !== "length") {
          const descriptor = Object.getOwnPropertyDescriptor(decoratedTarget, prop);
          if (descriptor) {
            Object.defineProperty(newConstructor, prop, descriptor);
          }
        }
      });
    }
    if (copyMetadata) {
      const metadataKeys = Reflect.getMetadataKeys(target);
      metadataKeys.forEach((metadataKey) => {
        const metadataValue = Reflect.getMetadata(metadataKey, target);
        Reflect.defineMetadata(metadataKey, metadataValue, newConstructor);
      });
    }
    return newConstructor;
  };
}
function createMethodDecorator(decorator) {
  return (target, propertyKey, descriptor) => {
    return decorator(target, propertyKey, descriptor);
  };
}
function createPropertyDecorator(decorator) {
  return (target, propertyKey) => {
    decorator(target, propertyKey);
  };
}
function createParameterDecorator(decorator) {
  return (target, propertyKey, parameterIndex) => {
    decorator(target, propertyKey, parameterIndex);
  };
}
var AbstractDecorator = class {
  /**
   * Create a class decorator
   *
   * @param options - Options for the decorator
   * @returns A class decorator function
   */
  createClassDecorator(options = {}) {
    return createClassDecorator((target) => this.decorateClass(target), options);
  }
  /**
   * Create a method decorator
   *
   * @returns A method decorator function
   */
  createMethodDecorator() {
    return createMethodDecorator(
      (target, propertyKey, descriptor) => this.decorateMethod(target, propertyKey, descriptor)
    );
  }
  /**
   * Create a property decorator
   *
   * @returns A property decorator function
   */
  createPropertyDecorator() {
    return createPropertyDecorator(
      (target, propertyKey) => this.decorateProperty(target, propertyKey)
    );
  }
  /**
   * Create a parameter decorator
   *
   * @returns A parameter decorator function
   */
  createParameterDecorator() {
    return createParameterDecorator(
      (target, propertyKey, parameterIndex) => this.decorateParameter(target, propertyKey, parameterIndex)
    );
  }
  /**
   * Decorate a method
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param descriptor - The method descriptor
   * @returns The decorated method descriptor
   */
  decorateMethod(target, propertyKey, descriptor) {
    return descriptor;
  }
  /**
   * Decorate a property
   *
   * @param target - The target object
   * @param propertyKey - The property name
   */
  decorateProperty(target, propertyKey) {
  }
  /**
   * Decorate a parameter
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param parameterIndex - The parameter index
   */
  decorateParameter(target, propertyKey, parameterIndex) {
  }
  /**
   * Create a new abstract decorator
   *
   * @returns A new abstract decorator
   */
  static make() {
    throw new Error("Cannot instantiate abstract class");
  }
};

// src/decorators/log-decorator.ts
function LogClass(options = {}) {
  return createClassDecorator(
    (target) => {
      console.log(`[${options.level || "info"}] Class ${target.name} was decorated`);
      return target;
    },
    {
      beforeConstructor: (target, args) => {
        console.log(`[${options.level || "info"}] Creating instance of ${target.name}`);
      }
    }
  );
}
function LogMethod(options = {}) {
  const { level = "info", logArgs = true, logReturn = true, logTime = true } = options;
  return createMethodDecorator((target, propertyKey, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      console.log(`[${level}] Calling ${String(propertyKey)}`);
      if (logArgs && args.length > 0) {
        console.log(`[${level}] Arguments:`, args);
      }
      const startTime = logTime ? Date.now() : 0;
      const result = originalMethod.apply(this, args);
      if (logTime) {
        const endTime = Date.now();
        console.log(`[${level}] Execution time: ${endTime - startTime}ms`);
      }
      if (result instanceof Promise) {
        return result.then((value) => {
          if (logReturn) {
            console.log(`[${level}] Return value:`, value);
          }
          return value;
        });
      }
      if (logReturn) {
        console.log(`[${level}] Return value:`, result);
      }
      return result;
    };
    return descriptor;
  });
}
var LogDecorator = class _LogDecorator extends AbstractDecorator {
  /**
   * Create a new log decorator
   *
   * @param options - The log options
   */
  constructor(options = {}) {
    super();
    this.options = {
      level: options.level || "info",
      logArgs: options.logArgs !== false,
      logReturn: options.logReturn !== false,
      logTime: options.logTime !== false
    };
  }
  /**
   * Create a new log decorator
   *
   * @param options - The log options
   * @returns A new log decorator
   */
  static make(options = {}) {
    return new _LogDecorator(options);
  }
  /**
   * Decorate a class to add logging
   *
   * @param target - The class to decorate
   * @returns The decorated class
   */
  decorateClass(target) {
    console.log(`[${this.options.level}] Class ${target.name} was decorated`);
    return target;
  }
  /**
   * Decorate a method to add logging
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param descriptor - The method descriptor
   * @returns The decorated method descriptor
   */
  decorateMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    const options = this.options;
    descriptor.value = function(...args) {
      console.log(`[${options.level}] Calling ${String(propertyKey)}`);
      if (options.logArgs && args.length > 0) {
        console.log(`[${options.level}] Arguments:`, args);
      }
      const startTime = options.logTime ? Date.now() : 0;
      const result = originalMethod.apply(this, args);
      if (options.logTime) {
        const endTime = Date.now();
        console.log(`[${options.level}] Execution time: ${endTime - startTime}ms`);
      }
      if (result instanceof Promise) {
        return result.then((value) => {
          if (options.logReturn) {
            console.log(`[${options.level}] Return value:`, value);
          }
          return value;
        });
      }
      if (options.logReturn) {
        console.log(`[${options.level}] Return value:`, result);
      }
      return result;
    };
    return descriptor;
  }
  /**
   * Create a log class decorator
   *
   * @param options - The log options
   * @returns A class decorator function
   */
  static createClassDecorator(options = {}) {
    const decorator = _LogDecorator.make(options);
    return decorator.createClassDecorator();
  }
  /**
   * Create a log method decorator
   *
   * @param options - The log options
   * @returns A method decorator function
   */
  static createMethodDecorator(options = {}) {
    const decorator = _LogDecorator.make(options);
    return decorator.createMethodDecorator();
  }
};

exports.LogClass = LogClass;
exports.LogDecorator = LogDecorator;
exports.LogMethod = LogMethod;
//# sourceMappingURL=log-decorator.js.map
//# sourceMappingURL=log-decorator.js.map