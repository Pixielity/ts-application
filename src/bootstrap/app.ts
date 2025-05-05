import type { IApplication } from "@pixielity/ts-types"

// Re-export the getApplication function
export { getApplication } from "../application"

/**
 * Helper function to access the global app instance
 * This provides a type-safe way to access the global app
 *
 * @returns The global application instance
 */
export function app(): IApplication {
  return global.app
}
