import 'reflect-metadata'
import type { IClassDecoratorOptions } from '@pixielity/ts-types'

/**
 * Create a class decorator that preserves Inversify metadata
 *
 * @param decorator - The decorator function to apply
 * @param options - Options for the decorator
 * @returns A class decorator function
 *
 * @example
 * ```typescript
 * // Create a simple logging decorator
 * export function LogClass() {
 *   return createClassDecorator((target) => {
 *     console.log(`Class ${target.name} was decorated`);
 *     return target;
 *   });
 * }
 *
 * // Create a decorator with options
 * export function Singleton() {
 *   return createClassDecorator((target) => target, {
 *     beforeConstructor: (target) => {
 *       console.log(`Creating singleton instance of ${target.name}`);
 *     }
 *   });
 * }
 * ```
 */
export function createClassDecorator(
  decorator: (target: any) => any,
  options: IClassDecoratorOptions = {},
): ClassDecorator {
  const {
    copyPrototype = true,
    copyStatic = true,
    copyMetadata = true,
    beforeConstructor,
    afterConstructor,
    transformInstance,
  } = options

  return (target: any) => {
    // Apply the decorator to get the modified target
    const decoratedTarget = decorator(target)

    // If the decorator returns undefined or the same target, no need for the proxy
    if (decoratedTarget === undefined || decoratedTarget === target) {
      return target
    }

    // A utility function to generate instances of a class
    function construct(constructor: any, args: any[]) {
      // Run before constructor hook if provided
      if (beforeConstructor) {
        beforeConstructor(constructor, args)
      }

      // Create the instance
      const instance = new constructor(...args)

      // Run after constructor hook if provided
      if (afterConstructor) {
        afterConstructor(instance, constructor, args)
      }

      // Transform the instance if needed
      return transformInstance ? transformInstance(instance, constructor, args) : instance
    }

    // The new constructor behavior
    const newConstructor: any = (...args: any[]) => construct(decoratedTarget, args)

    // Copy prototype so instanceof operator still works
    if (copyPrototype) {
      newConstructor.prototype = decoratedTarget.prototype
    }

    // Copy static properties
    if (copyStatic) {
      Object.getOwnPropertyNames(decoratedTarget).forEach((prop) => {
        if (prop !== 'prototype' && prop !== 'name' && prop !== 'length') {
          const descriptor = Object.getOwnPropertyDescriptor(decoratedTarget, prop)
          if (descriptor) {
            Object.defineProperty(newConstructor, prop, descriptor)
          }
        }
      })
    }

    // Copy metadata
    if (copyMetadata) {
      const metadataKeys = Reflect.getMetadataKeys(target)
      metadataKeys.forEach((metadataKey) => {
        const metadataValue = Reflect.getMetadata(metadataKey, target)
        Reflect.defineMetadata(metadataKey, metadataValue, newConstructor)
      })
    }

    // Return new constructor (will override original)
    return newConstructor
  }
}

/**
 * Create a method decorator
 *
 * @param decorator - The decorator function to apply
 * @returns A method decorator function
 *
 * @example
 * ```typescript
 * // Create a simple logging decorator
 * export function LogMethod() {
 *   return createMethodDecorator((target, propertyKey, descriptor) => {
 *     const original = descriptor.value;
 *     descriptor.value = function(...args: any[]) {
 *       console.log(`Method ${String(propertyKey)} was called with args:`, args);
 *       return original.apply(this, args);
 *     };
 *     return descriptor;
 *   });
 * }
 * ```
 */
export function createMethodDecorator(
  decorator: (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ) => PropertyDescriptor,
): MethodDecorator {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    // Apply the decorator
    return decorator(target, propertyKey, descriptor)
  }
}

/**
 * Create a property decorator
 *
 * @param decorator - The decorator function to apply
 * @returns A property decorator function
 *
 * @example
 * ```typescript
 * // Create a simple logging decorator
 * export function LogProperty() {
 *   return createPropertyDecorator((target, propertyKey) => {
 *     console.log(`Property ${String(propertyKey)} was decorated`);
 *   });
 * }
 * ```
 */
export function createPropertyDecorator(
  decorator: (target: any, propertyKey: string | symbol) => void,
): PropertyDecorator {
  return (target: any, propertyKey: string | symbol) => {
    // Apply the decorator
    decorator(target, propertyKey)
  }
}

/**
 * Create a parameter decorator
 *
 * @param decorator - The decorator function to apply
 * @returns A parameter decorator function
 *
 * @example
 * ```typescript
 * // Create a simple logging decorator
 * export function LogParameter() {
 *   return createParameterDecorator((target, propertyKey, parameterIndex) => {
 *     console.log(`Parameter ${parameterIndex} of ${String(propertyKey)} was decorated`);
 *   });
 * }
 * ```
 */
export function createParameterDecorator(
  decorator: (
    target: any,
    propertyKey: string | symbol | undefined,
    parameterIndex: number,
  ) => void,
): ParameterDecorator {
  return (target: any, propertyKey: string | symbol | undefined, parameterIndex: number) => {
    // Apply the decorator
    decorator(target, propertyKey, parameterIndex)
  }
}

/**
 * Abstract decorator base class that can be extended to create custom decorators
 */
export abstract class AbstractDecorator {
  /**
   * Create a class decorator
   *
   * @param options - Options for the decorator
   * @returns A class decorator function
   */
  protected createClassDecorator(options: IClassDecoratorOptions = {}): ClassDecorator {
    return createClassDecorator((target) => this.decorateClass(target), options)
  }

  /**
   * Create a method decorator
   *
   * @returns A method decorator function
   */
  protected createMethodDecorator(): MethodDecorator {
    return createMethodDecorator((target, propertyKey, descriptor) =>
      this.decorateMethod(target, propertyKey, descriptor),
    )
  }

  /**
   * Create a property decorator
   *
   * @returns A property decorator function
   */
  protected createPropertyDecorator(): PropertyDecorator {
    return createPropertyDecorator((target, propertyKey) =>
      this.decorateProperty(target, propertyKey),
    )
  }

  /**
   * Create a parameter decorator
   *
   * @returns A parameter decorator function
   */
  protected createParameterDecorator(): ParameterDecorator {
    return createParameterDecorator((target, propertyKey, parameterIndex) =>
      this.decorateParameter(target, propertyKey, parameterIndex),
    )
  }

  /**
   * Decorate a class
   *
   * @param target - The class to decorate
   * @returns The decorated class
   */
  protected abstract decorateClass(target: any): any

  /**
   * Decorate a method
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param descriptor - The method descriptor
   * @returns The decorated method descriptor
   */
  protected decorateMethod(
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    return descriptor
  }

  /**
   * Decorate a property
   *
   * @param target - The target object
   * @param propertyKey - The property name
   */
  protected decorateProperty(target: any, propertyKey: string | symbol): void {
    // Default implementation does nothing
  }

  /**
   * Decorate a parameter
   *
   * @param target - The target object
   * @param propertyKey - The method name
   * @param parameterIndex - The parameter index
   */
  protected decorateParameter(
    target: any,
    propertyKey: string | symbol | undefined,
    parameterIndex: number,
  ): void {
    // Default implementation does nothing
  }

  /**
   * Create a new abstract decorator
   *
   * @returns A new abstract decorator
   */
  public static make(): AbstractDecorator {
    throw new Error('Cannot instantiate abstract class')
  }
}
