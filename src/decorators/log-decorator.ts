import {
  AbstractDecorator,
  createClassDecorator,
  createMethodDecorator,
} from './abstract-decorator'
import type { ILogOptions } from '@pixielity/ts-types'

/**
 * Log decorator for classes
 *
 * @param options - The log options
 * @returns A class decorator function
 *
 * @example
 * ```typescript
 * @injectable()
 * @LogClass()
 * class UserService {
 *   getUsers(): User[] {
 *     // ...
 *   }
 * }
 * ```
 */
export function LogClass(options: ILogOptions = {}) {
  return createClassDecorator(
    (target) => {
      console.log(`[${options.level || 'info'}] Class ${target.name} was decorated`)
      return target
    },
    {
      beforeConstructor: (target: { name: any }, args: any) => {
        console.log(`[${options.level || 'info'}] Creating instance of ${target.name}`)
      },
    },
  )
}

/**
 * Log decorator for methods
 *
 * @param options - The log options
 * @returns A method decorator function
 *
 * @example
 * ```typescript
 * class UserService {
 *   @LogMethod()
 *   getUsers(): User[] {
 *     // ...
 *   }
 * }
 * ```
 */
export function LogMethod(options: ILogOptions = {}) {
  const { level = 'info', logArgs = true, logReturn = true, logTime = true } = options

  return createMethodDecorator((target, propertyKey, descriptor) => {
    // Store the original method
    const originalMethod = descriptor.value

    // Replace the method with a new one
    descriptor.value = function (...args: any[]) {
      // Log method call
      console.log(`[${level}] Calling ${String(propertyKey)}`)

      // Log arguments if enabled
      if (logArgs && args.length > 0) {
        console.log(`[${level}] Arguments:`, args)
      }

      // Measure execution time if enabled
      const startTime = logTime ? Date.now() : 0

      // Call the original method
      const result = originalMethod.apply(this, args)

      // Log execution time if enabled
      if (logTime) {
        const endTime = Date.now()
        console.log(`[${level}] Execution time: ${endTime - startTime}ms`)
      }

      // Handle promises
      if (result instanceof Promise) {
        return result.then((value) => {
          // Log return value if enabled
          if (logReturn) {
            console.log(`[${level}] Return value:`, value)
          }
          return value
        })
      }

      // Log return value if enabled
      if (logReturn) {
        console.log(`[${level}] Return value:`, result)
      }

      return result
    }

    return descriptor
  })
}

/**
 * Log decorator class implementation
 */
export class LogDecorator extends AbstractDecorator {
  /**
   * The log options
   */
  private options: ILogOptions

  /**
   * Create a new log decorator
   *
   * @param options - The log options
   */
  constructor(options: ILogOptions = {}) {
    super()
    this.options = {
      level: options.level || 'info',
      logArgs: options.logArgs !== false,
      logReturn: options.logReturn !== false,
      logTime: options.logTime !== false,
    }
  }

  /**
   * Create a new log decorator
   *
   * @param options - The log options
   * @returns A new log decorator
   */
  public static make(options: ILogOptions = {}): LogDecorator {
    return new LogDecorator(options)
  }

  /**
   * Decorate a class to add logging
   *
   * @param target - The class to decorate
   * @returns The decorated class
   */
  protected decorateClass(target: any): any {
    console.log(`[${this.options.level}] Class ${target.name} was decorated`)
    return target
  }

  /**
   * Decorate a method to add logging
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
    // Store the original method
    const originalMethod = descriptor.value
    const options = this.options

    // Replace the method with a new one
    descriptor.value = function (...args: any[]) {
      // Log method call
      console.log(`[${options.level}] Calling ${String(propertyKey)}`)

      // Log arguments if enabled
      if (options.logArgs && args.length > 0) {
        console.log(`[${options.level}] Arguments:`, args)
      }

      // Measure execution time if enabled
      const startTime = options.logTime ? Date.now() : 0

      // Call the original method
      const result = originalMethod.apply(this, args)

      // Log execution time if enabled
      if (options.logTime) {
        const endTime = Date.now()
        console.log(`[${options.level}] Execution time: ${endTime - startTime}ms`)
      }

      // Handle promises
      if (result instanceof Promise) {
        return result.then((value) => {
          // Log return value if enabled
          if (options.logReturn) {
            console.log(`[${options.level}] Return value:`, value)
          }
          return value
        })
      }

      // Log return value if enabled
      if (options.logReturn) {
        console.log(`[${options.level}] Return value:`, result)
      }

      return result
    }

    return descriptor
  }

  /**
   * Create a log class decorator
   *
   * @param options - The log options
   * @returns A class decorator function
   */
  public static createClassDecorator(options: ILogOptions = {}): ClassDecorator {
    const decorator = LogDecorator.make(options)
    return decorator.createClassDecorator()
  }

  /**
   * Create a log method decorator
   *
   * @param options - The log options
   * @returns A method decorator function
   */
  public static createMethodDecorator(options: ILogOptions = {}): MethodDecorator {
    const decorator = LogDecorator.make(options)
    return decorator.createMethodDecorator()
  }
}
