import { AbstractDecorator, createClassDecorator } from './abstract-decorator'

/**
 * Singleton instances cache
 */
const singletonInstances = new Map<any, any>()

/**
 * Singleton decorator that ensures only one instance of a class is created
 *
 * @example
 * ```typescript
 * @injectable()
 * @Singleton()
 * class Database {
 *   constructor() {
 *     console.log('Database instance created');
 *   }
 *
 *   query(sql: string): Promise<any[]> {
 *     // ...
 *   }
 * }
 * ```
 */
export function Singleton() {
  return createClassDecorator((target) => target, {
    beforeConstructor: (target) => {
      // This runs before the constructor is called
    },
    transformInstance: (instance, target, args) => {
      // Check if we already have an instance of this class
      if (singletonInstances.has(target)) {
        // Return the existing instance
        return singletonInstances.get(target)
      }

      // Store the new instance
      singletonInstances.set(target, instance)
      return instance
    },
  })
}

/**
 * Singleton decorator class implementation
 */
export class SingletonDecorator extends AbstractDecorator {
  /**
   * Decorate a class to make it a singleton
   *
   * @param target - The class to decorate
   * @returns The decorated class
   */
  protected decorateClass(target: any): any {
    // Store the original constructor
    const originalConstructor = target

    // Create a new constructor function
    const newConstructor: any = (...args: any[]) => {
      // Check if we already have an instance of this class
      if (singletonInstances.has(originalConstructor)) {
        return singletonInstances.get(originalConstructor)
      }

      // Create a new instance
      const instance = new originalConstructor(...args)

      // Store the instance
      singletonInstances.set(originalConstructor, instance)

      return instance
    }

    // Copy prototype so instanceof operator still works
    newConstructor.prototype = originalConstructor.prototype

    return newConstructor
  }

  /**
   * Create a singleton decorator
   *
   * @returns A class decorator function
   */
  public static create(): ClassDecorator {
    const decorator = new SingletonDecorator()
    return decorator.createClassDecorator()
  }
}
