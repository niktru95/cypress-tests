const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    env: {
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
