import { AbstractDecorator } from './abstract-decorator.js';
import { ILogOptions } from '@pixielity/ts-types';

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
declare function LogClass(options?: ILogOptions): ClassDecorator;
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
declare function LogMethod(options?: ILogOptions): MethodDecorator;
/**
 * Log decorator class implementation
 */
declare class LogDecorator extends AbstractDecorator {
    /**
     * The log options
     */
    private options;
    /**
     * Create a new log decorator
     *
     * @param options - The log options
     */
    constructor(options?: ILogOptions);
    /**
     * Create a new log decorator
     *
     * @param options - The log options
     * @returns A new log decorator
     */
    static make(options?: ILogOptions): LogDecorator;
    /**
     * Decorate a class to add logging
     *
     * @param target - The class to decorate
     * @returns The decorated class
     */
    protected decorateClass(target: any): any;
    /**
     * Decorate a method to add logging
     *
     * @param target - The target object
     * @param propertyKey - The method name
     * @param descriptor - The method descriptor
     * @returns The decorated method descriptor
     */
    protected decorateMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor;
    /**
     * Create a log class decorator
     *
     * @param options - The log options
     * @returns A class decorator function
     */
    static createClassDecorator(options?: ILogOptions): ClassDecorator;
    /**
     * Create a log method decorator
     *
     * @param options - The log options
     * @returns A method decorator function
     */
    static createMethodDecorator(options?: ILogOptions): MethodDecorator;
}

export { LogClass, LogDecorator, LogMethod };
