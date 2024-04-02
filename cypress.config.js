module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    retries: {
      runMode: 1,
      openMode: 1
    }
  },
};
