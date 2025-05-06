import { IApplication, IConfigRepository } from '@pixielity/ts-types';

declare global {
  /**
   * Global application instance
   */
  var app: IApplication

  /**
   * Namespace for application-specific globals
   */
  namespace NodeJS {
    interface Global {
      app: IApplication
      config: IConfigRepository
    }
  }
}
