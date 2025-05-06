import { AbstractDecorator } from './abstract-decorator.js';
import '@pixielity/ts-types';

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
declare function Singleton(): ClassDecorator;
/**
 * Singleton decorator class implementation
 */
declare class SingletonDecorator extends AbstractDecorator {
    /**
     * Decorate a class to make it a singleton
     *
     * @param target - The class to decorate
     * @returns The decorated class
     */
    protected decorateClass(target: any): any;
    /**
     * Create a singleton decorator
     *
     * @returns A class decorator function
     */
    static create(): ClassDecorator;
}

export { Singleton, SingletonDecorator };
