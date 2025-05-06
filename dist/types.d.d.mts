import { IApplication, IConfigRepository } from '@pixielity/ts-types';

declare global {
  /**
   * Global `app` variable representing the application instance.
   * This is accessible throughout the application without importing.
   *
   * @example
   * console.log(app.isBooted());
   */
  var app: IApplication

  /**
   * Extends the NodeJS global namespace to include custom globals
   * used in the application such as `app` and `config`.
   */
  namespace NodeJS {
    interface Global {
      /**
       * The application instance, globally accessible.
       */
      app: IApplication

      /**
       * The configuration repository instance, globally accessible.
       */
      config: IConfigRepository
    }
  }
}
