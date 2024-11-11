import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.unibet.co.uk/blog",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
