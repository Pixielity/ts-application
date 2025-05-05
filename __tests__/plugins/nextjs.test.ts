import { NextJsPlugin, createNextJsPlugin } from "../../src/plugins/nextjs"
import { Application } from "../../src/application"
import { jest } from "@jest/globals"

// Mock the Application class
jest.mock("../../src/application", () => {
  return {
    Application: jest.fn().mockImplementation(() => {
      return {
        isBooted: jest.fn().mockReturnValue(false),
        boot: jest.fn(),
        instance: jest.fn(),
        make: jest.fn(),
      }
    }),
  }
})

describe("NextJsPlugin", () => {
  let app: Application
  let plugin: NextJsPlugin

  beforeEach(() => {
    // Create a new application instance
    app = new Application()

    // Create a new plugin instance
    plugin = new NextJsPlugin(app)
  })

  describe("constructor", () => {
    it("should create a new plugin instance with default options", () => {
      expect(plugin).toBeInstanceOf(NextJsPlugin)
      expect(plugin.getApp()).toBe(app)
      expect(plugin.getOptions()).toHaveProperty("autoRegister", true)
      expect(plugin.getOptions()).toHaveProperty("initializeInGetInitialProps", true)
      expect(plugin.getOptions()).toHaveProperty("initializeInGetServerSideProps", true)
      expect(plugin.getOptions()).toHaveProperty("initializeInGetStaticProps", false)
      expect(plugin.getOptions()).toHaveProperty("initializeInApiRoutes", true)
    })

    it("should create a new plugin instance with custom options", () => {
      const customOptions = {
        autoRegister: false,
        initializeInGetInitialProps: false,
        initializeInGetServerSideProps: false,
        initializeInGetStaticProps: true,
        initializeInApiRoutes: false,
      }

      plugin = new NextJsPlugin(app, customOptions)

      expect(plugin.getOptions()).toHaveProperty("autoRegister", false)
      expect(plugin.getOptions()).toHaveProperty("initializeInGetInitialProps", false)
      expect(plugin.getOptions()).toHaveProperty("initializeInGetServerSideProps", false)
      expect(plugin.getOptions()).toHaveProperty("initializeInGetStaticProps", true)
      expect(plugin.getOptions()).toHaveProperty("initializeInApiRoutes", false)
    })

    it("should register the plugin if autoRegister is true", () => {
      const registerSpy = jest.spyOn(NextJsPlugin.prototype, "register")

      plugin = new NextJsPlugin(app, { autoRegister: true })

      expect(registerSpy).toHaveBeenCalled()
    })

    it("should not register the plugin if autoRegister is false", () => {
      const registerSpy = jest.spyOn(NextJsPlugin.prototype, "register")

      plugin = new NextJsPlugin(app, { autoRegister: false })

      expect(registerSpy).not.toHaveBeenCalled()
    })
  })

  describe("register", () => {
    it("should register the plugin with the application", () => {
      plugin.register()

      expect(app.instance).toHaveBeenCalledWith("nextjs", plugin)
      expect(app.instance).toHaveBeenCalledWith("nextjs.config", expect.any(Object))
    })
  })

  describe("initialize", () => {
    it("should boot the application if it is not booted", async () => {
      await plugin.initialize()

      expect(app.isBooted).toHaveBeenCalled()
      expect(app.boot).toHaveBeenCalled()
    })

    it("should not boot the application if it is already booted", async () => {
      ;(app.isBooted as jest.Mock).mockReturnValue(true)

      await plugin.initialize()

      expect(app.isBooted).toHaveBeenCalled()
      expect(app.boot).not.toHaveBeenCalled()
    })

    it("should call the custom initializer if provided", async () => {
      const customInitializer = jest.fn()

      plugin = new NextJsPlugin(app, { customInitializer })

      await plugin.initialize()

      expect(customInitializer).toHaveBeenCalledWith(app)
    })
  })

  describe("factory functions", () => {
    it("should create a new plugin instance using createNextJsPlugin", () => {
      const plugin = createNextJsPlugin(app)

      expect(plugin).toBeInstanceOf(NextJsPlugin)
      expect(plugin.getApp()).toBe(app)
    })

    it("should create a new plugin instance using nextjs.create", () => {
      const nextjs = require("../../src/plugins/nextjs").default
      const plugin = nextjs.create(app)

      expect(plugin).toBeInstanceOf(NextJsPlugin)
      expect(plugin.getApp()).toBe(app)
    })
  })
})
