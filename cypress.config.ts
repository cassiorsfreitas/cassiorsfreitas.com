import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    testIsolation: false,
    baseUrl: 'https://blog-dev-one.vercel.app/',
    viewportWidth: 1280,
    viewportHeight: 800
  }
})
