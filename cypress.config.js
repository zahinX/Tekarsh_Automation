const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    embeddedScreenshots: true
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      baseUrl : "https://automationexercise.com/"
    }
  }
});
