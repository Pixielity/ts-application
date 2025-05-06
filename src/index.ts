// Create the application instance
import { getApplication } from './application'

// Create the application instance
const application = getApplication()

// Make the application globally available
global.app = application

// Export the application instance
export const app = application

// Export core modules
export * from './application'
export * from './bootstrap/app'
export * from './container'
export * from './config'
export * from './facades'
export * from './providers'
export * from './react'
export * from './publish'
export * from './decorators'
export * from './plugins'
export * from './service-provider'
