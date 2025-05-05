import { ServiceIdentifier } from "@pixielity/ts-types"
import { Config, EnvConfig } from "../../../src/config/decorators/config.decorator"
import { ConfigRepository } from "../../../src/config/repository"
import { jest } from "@jest/globals"

// Mock the getApplication function
jest.mock("../../../src/bootstrap/app", () => ({
  getApplication: jest.fn(() => ({
    make: jest.fn((abstract: ServiceIdentifier) => {
      if (abstract === "config") {
        return new ConfigRepository({
          app: {
            name: "Test App",
            debug: true,
          },
        })
      }
      return null
    }),
  })),
}))

describe("Config Decorator", () => {
  beforeEach(() => {
    // Set up test environment variables
    process.env.APP_NAME = "Test App from ENV"
    process.env.APP_DEBUG = "true"
    process.env.TEST_VAR = "test-value"
  })

  describe("@Config", () => {
    it("should inject a configuration value into a class property", () => {
      // Define a test class
      class TestClass {
        @Config({ key: "app.name" })
        public appName: string

        @Config({ key: "app.debug" })
        public debug: boolean

        @Config({ key: "app.missing", defaultValue: "default" })
        public missing: string
      }

      // Create an instance of the test class
      const instance = new TestClass()

      // Verify the properties were injected
      expect(instance.appName).toBe("Test App")
      expect(instance.debug).toBe(true)
      expect(instance.missing).toBe("default")
    })

    it("should support the refresh option", () => {
      // Define a test class
      class TestClass {
        @Config({ key: "app.name", refresh: true })
        public appName: string
      }

      // Create an instance of the test class
      const instance = new TestClass()

      // Verify the property was injected
      expect(instance.appName).toBe("Test App")

      // Change the configuration value
      const config = new ConfigRepository({
        app: {
          name: "New App Name",
        },
      })

      // Assign the config to the instance
      ;(instance as any).config = config

      // Verify the property was refreshed
      expect(instance.appName).toBe("New App Name")
    })

    it("should support the transform option", () => {
      // Define a test class
      class TestClass {
        @Config({ key: "app.name", transform: (value) => value.toUpperCase() })
        public appName: string
      }

      // Create an instance of the test class
      const instance = new TestClass()

      // Verify the property was transformed
      expect(instance.appName).toBe("TEST APP")
    })
  })

  describe("@EnvConfig", () => {
    it("should inject an environment variable into a class property", () => {
      // Define a test class
      class TestClass {
        @EnvConfig({ env: "APP_NAME" })
        public appName: string

        @EnvConfig({ env: "APP_DEBUG" })
        public debug: boolean

        @EnvConfig({ env: "TEST_VAR" })
        public testVar: string

        @EnvConfig({ env: "MISSING_VAR", defaultValue: "default" })
        public missing: string
      }

      // Create an instance of the test class
      const instance = new TestClass()

      // Verify the properties were injected
      expect(instance.appName).toBe("Test App from ENV")
      expect(instance.debug).toBe(true)
      expect(instance.testVar).toBe("test-value")
      expect(instance.missing).toBe("default")
    })

    it("should support the refresh option", () => {
      // Define a test class
      class TestClass {
        @EnvConfig({ env: "TEST_VAR", refresh: true })
        public testVar: string
      }

      // Create an instance of the test class
      const instance = new TestClass()

      // Verify the property was injected
      expect(instance.testVar).toBe("test-value")

      // Change the environment variable
      process.env.TEST_VAR = "new-value"

      // Verify the property was refreshed
      expect(instance.testVar).toBe("new-value")
    })

    it("should support the transform option", () => {
      // Define a test class
      class TestClass {
        @EnvConfig({ env: "TEST_VAR", transform: (value) => value.toUpperCase() })
        public testVar: string
      }

      // Create an instance of the test class
      const instance = new TestClass()

      // Verify the property was transformed
      expect(instance.testVar).toBe("TEST-VALUE")
    })
  })
})
