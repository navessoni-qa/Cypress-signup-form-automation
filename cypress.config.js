const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://jamesonbatista.github.io/projectqatesterweb",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
