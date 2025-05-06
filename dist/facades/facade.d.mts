/**
 * Base facade class that provides static access to services.
 */
declare abstract class Facade {
    /**
     * Get the registered name of the component.
     *
     * @returns The registered name of the component
     */
    protected static getFacadeAccessor(): string;
    /**
     * Get the facade root instance.
     *
     * @returns The facade root instance
     */
    protected static getFacadeRoot(): any;
    /**
     * Handle dynamic static method calls.
     *
     * @param method - The method name
     * @param args - The method arguments
     * @returns The method result
     */
    static __call(method: string, args: any[]): any;
    /**
     * Handle dynamic static method calls.
     */
    static __callStatic(method: string, args: any[]): any;
}
/**
 * Create a facade proxy for a facade class.
 *
 * @param facadeClass - The facade class
 * @returns The facade proxy
 */
declare function createFacadeProxy<T extends typeof Facade>(facadeClass: T): T;

export { Facade, createFacadeProxy };
