const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "5a98oa",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || "";

      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://www.webdriveruniversity.com/",
    video: true,
    videoCompression: 40,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    viewportHeight: 720,
    viewportWidth: 1080,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      openMode: 1,
      runMode: 1,
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com/",
    },
    experimentalStudio: true,
  },
});
