import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    baseUrl: 'http://cassiorsfreitas.com/',
    viewportWidth: 1280,
    viewportHeight: 800
  }
})
