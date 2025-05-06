import { IClassDecoratorOptions } from '@pixielity/ts-types';

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
declare function createClassDecorator(decorator: (target: any) => any, options?: IClassDecoratorOptions): ClassDecorator;
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
declare function createMethodDecorator(decorator: (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => PropertyDescriptor): MethodDecorator;
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
declare function createPropertyDecorator(decorator: (target: any, propertyKey: string | symbol) => void): PropertyDecorator;
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
declare function createParameterDecorator(decorator: (target: any, propertyKey: string | symbol | undefined, parameterIndex: number) => void): ParameterDecorator;
/**
 * Abstract decorator base class that can be extended to create custom decorators
 */
declare abstract class AbstractDecorator {
    /**
     * Create a class decorator
     *
     * @param options - Options for the decorator
     * @returns A class decorator function
     */
    protected createClassDecorator(options?: IClassDecoratorOptions): ClassDecorator;
    /**
     * Create a method decorator
     *
     * @returns A method decorator function
     */
    protected createMethodDecorator(): MethodDecorator;
    /**
     * Create a property decorator
     *
     * @returns A property decorator function
     */
    protected createPropertyDecorator(): PropertyDecorator;
    /**
     * Create a parameter decorator
     *
     * @returns A parameter decorator function
     */
    protected createParameterDecorator(): ParameterDecorator;
    /**
     * Decorate a class
     *
     * @param target - The class to decorate
     * @returns The decorated class
     */
    protected abstract decorateClass(target: any): any;
    /**
     * Decorate a method
     *
     * @param target - The target object
     * @param propertyKey - The method name
     * @param descriptor - The method descriptor
     * @returns The decorated method descriptor
     */
    protected decorateMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor;
    /**
     * Decorate a property
     *
     * @param target - The target object
     * @param propertyKey - The property name
     */
    protected decorateProperty(target: any, propertyKey: string | symbol): void;
    /**
     * Decorate a parameter
     *
     * @param target - The target object
     * @param propertyKey - The method name
     * @param parameterIndex - The parameter index
     */
    protected decorateParameter(target: any, propertyKey: string | symbol | undefined, parameterIndex: number): void;
    /**
     * Create a new abstract decorator
     *
     * @returns A new abstract decorator
     */
    static make(): AbstractDecorator;
}

export { AbstractDecorator, createClassDecorator, createMethodDecorator, createParameterDecorator, createPropertyDecorator };
