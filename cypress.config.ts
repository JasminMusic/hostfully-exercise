import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://computer-database.gatling.io/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
