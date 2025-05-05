// Extend the NodeJS.Global interface to include the 'config' property
declare global {
  namespace NodeJS {
    interface Global {
      config?: {
        get: (key: string, defaultValue?: any) => any
      }
    }
  }
}
