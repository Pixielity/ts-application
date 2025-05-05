import 'reflect-metadata';

// src/decorators/abstract-decorator.ts
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

// src/decorators/singleton-decorator.ts
var singletonInstances = /* @__PURE__ */ new Map();
function Singleton() {
  return createClassDecorator((target) => target, {
    beforeConstructor: (target) => {
    },
    transformInstance: (instance, target, args) => {
      if (singletonInstances.has(target)) {
        return singletonInstances.get(target);
      }
      singletonInstances.set(target, instance);
      return instance;
    }
  });
}
var SingletonDecorator = class _SingletonDecorator extends AbstractDecorator {
  /**
   * Decorate a class to make it a singleton
   *
   * @param target - The class to decorate
   * @returns The decorated class
   */
  decorateClass(target) {
    const originalConstructor = target;
    const newConstructor = (...args) => {
      if (singletonInstances.has(originalConstructor)) {
        return singletonInstances.get(originalConstructor);
      }
      const instance = new originalConstructor(...args);
      singletonInstances.set(originalConstructor, instance);
      return instance;
    };
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
  }
  /**
   * Create a singleton decorator
   *
   * @returns A class decorator function
   */
  static create() {
    const decorator = new _SingletonDecorator();
    return decorator.createClassDecorator();
  }
};
if (typeof module !== "undefined") { module.exports = module.exports.default; }

export { Singleton, SingletonDecorator };
//# sourceMappingURL=singleton-decorator.mjs.map
//# sourceMappingURL=singleton-decorator.mjs.map