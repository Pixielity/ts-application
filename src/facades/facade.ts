import { getApplication } from "../bootstrap/app"

/**
 * Base facade class that provides static access to services.
 */
export abstract class Facade {
  /**
   * Get the registered name of the component.
   *
   * @returns The registered name of the component
   */
  protected static getFacadeAccessor(): string {
    throw new Error("Facade accessor not implemented")
  }

  /**
   * Get the facade root instance.
   *
   * @returns The facade root instance
   */
  protected static getFacadeRoot(): any {
    const app = getApplication()
    const name = this.getFacadeAccessor()

    if (!name) {
      throw new Error(`Facade accessor not implemented for ${this.constructor.name}`)
    }

    return app.make(name)
  }

  /**
   * Handle dynamic static method calls.
   *
   * @param method - The method name
   * @param args - The method arguments
   * @returns The method result
   */
  public static __call(method: string, args: any[]): any {
    const instance = this.getFacadeRoot()

    if (!instance) {
      throw new Error(`A facade root has not been set for ${this.constructor.name}`)
    }

    if (typeof instance[method] !== "function") {
      throw new Error(`Method ${method} does not exist on ${this.constructor.name}`)
    }

    return instance[method](...args)
  }

  /**
   * Handle dynamic static method calls.
   */
  public static __callStatic(method: string, args: any[]): any {
    return this.__call(method, args)
  }
}

// Create a Proxy handler to intercept method calls
const handler = {
  get(target: any, prop: string) {
    if (prop in target) {
      return target[prop]
    }

    // Handle method calls
    return (...args: any[]) => {
      return target.__call(prop, args)
    }
  },
}

/**
 * Create a facade proxy for a facade class.
 *
 * @param facadeClass - The facade class
 * @returns The facade proxy
 */
export function createFacadeProxy<T extends typeof Facade>(facadeClass: T): T {
  return new Proxy(facadeClass, handler) as T
}
