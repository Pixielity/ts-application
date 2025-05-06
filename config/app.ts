/**
 * Application configuration
 */
export default {
  /**
   * The application name.
   */
  name: 'TS Nextjs App',

  /**
   * The application environment.
   */
  env: process.env.NODE_ENV || 'development',

  /**
   * Whether the application is in debug mode.
   */
  debug: process.env.APP_DEBUG === 'true',

  /**
   * The application URL.
   */
  url: process.env.APP_URL || 'http://localhost',

  /**
   * The application timezone.
   */
  timezone: 'UTC',

  /**
   * The application locale.
   */
  locale: 'en',

  /**
   * The application fallback locale.
   */
  fallback_locale: 'en',

  /**
   * The application key.
   */
  key: process.env.APP_KEY,

  /**
   * The application cipher.
   */
  cipher: 'AES-256-CBC',

  /**
   * The service providers for the application.
   */
  providers: [
    // App\Providers\AppServiceProvider::class,
  ],

  /**
   * The application aliases.
   */
  aliases: {
    App: 'App\\Facades\\App',
    Config: 'App\\Facades\\Config',
  },
}
