import { ConfigRepository } from "../../src/config/repository"
import type { IConfigLoader } from "../../src/config/loaders/config-loader.interface"

// Mock config loader
class MockConfigLoader implements ConfigLoader {
  private configs: Record<string, Record<string, any>> = {
    "app.json": {
      name: "Test App",
      debug: true,
      url: "http://localhost",
    },
    "cache.json": {
      default: "file",
      stores: {
        file: {
          driver: "file",
          path: "./storage/framework/cache",
        },
        redis: {
          driver: "redis",
          connection: "cache",
        },
      },
    },
  }

  public load(source: string): Record<string, any> {
    return this.configs[source] || {}
  }

  public canLoad(source: string): boolean {
    return source in this.configs
  }
}

describe("ConfigRepository", () => {
  let config: ConfigRepository
  let mockLoader: MockConfigLoader

  beforeEach(() => {
    // Save original process.env
    const originalEnv = { ...process.env }

    // Set up test environment variables
    process.env.APP_NAME = "Test App from ENV"
    process.env.APP_DEBUG = "true"
    process.env.APP_PORT = "3000"

    // Create a new config repository
    config = new ConfigRepository()
    mockLoader = new MockConfigLoader()
    config.registerLoader(mockLoader)

    // Load test configurations
    config.load("app.json")
    config.load("cache.json")

    // Return a function to restore the original process.env
    return () => {
      process.env = originalEnv
    }
  })

  describe("get", () => {
    it("should get a configuration value", () => {
      expect(config.get("app.name")).toBe("Test App")
      expect(config.get("app.debug")).toBe(true)
      expect(config.get("app.url")).toBe("http://localhost")
    })

    it("should get a nested configuration value", () => {
      expect(config.get("cache.default")).toBe("file")
      expect(config.get("cache.stores.file.driver")).toBe("file")
      expect(config.get("cache.stores.redis.driver")).toBe("redis")
    })

    it("should return the default value if the key does not exist", () => {
      expect(config.get("app.missing", "default")).toBe("default")
      expect(config.get("missing.key", 123)).toBe(123)
    })

    it("should prioritize environment variables over configuration values", () => {
      expect(config.get("app.name")).toBe("Test App from ENV")
      expect(config.get("app.port")).toBe(3000)
    })
  })

  describe("set", () => {
    it("should set a configuration value", () => {
      config.set("app.name", "New App Name")
      expect(config.get("app.name")).toBe("New App Name")
    })

    it("should set a nested configuration value", () => {
      config.set("cache.stores.file.path", "./new/path")
      expect(config.get("cache.stores.file.path")).toBe("./new/path")
    })

    it("should create nested objects if they do not exist", () => {
      config.set("new.nested.key", "value")
      expect(config.get("new.nested.key")).toBe("value")
    })
  })

  describe("has", () => {
    it("should return true if the key exists", () => {
      expect(config.has("app.name")).toBe(true)
      expect(config.has("cache.default")).toBe(true)
    })

    it("should return false if the key does not exist", () => {
      expect(config.has("app.missing")).toBe(false)
      expect(config.has("missing.key")).toBe(false)
    })
  })

  describe("all", () => {
    it("should return all configuration items", () => {
      const items = config.all()
      expect(items).toHaveProperty("app")
      expect(items).toHaveProperty("cache")
      expect(items.app).toHaveProperty("name")
      expect(items.cache).toHaveProperty("stores")
    })
  })

  describe("loadMany", () => {
    it("should load multiple configurations", () => {
      // Reset the config
      config = new ConfigRepository()
      config.registerLoader(mockLoader)

      // Load multiple configurations
      config.loadMany(["app.json", "cache.json"])

      // Verify the configurations were loaded
      expect(config.get("app.name")).toBe("Test App")
      expect(config.get("cache.default")).toBe("file")
    })
  })
})
