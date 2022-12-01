const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth:1920,
  viewportHeight:1080,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://demoqa.com",
    excludeSpecPattern:[
      "cypress/e2e/1-getting-started/*.js",
      "cypress/e2e/2-advanced-examples/*.js"
    ],
  },
});
