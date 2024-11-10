import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.unibet.co.uk/blog",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
    },
  },
});
