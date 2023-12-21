const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions:{
    charts : true,
    reportPageTitle: "report",
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite :false,
    saveAllAttempts: false
    //reportFilename: "testing_login_report",
   },

  e2e: {

    pageLoadTimeout:10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    resolve: {
      alias: {
        process: "process/browser",
      },
      fallback: { "process/browser": require.resolve("process/browser") },
    },
  },
});
