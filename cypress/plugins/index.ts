/* eslint-env node */

export default ((on, config) => {
  on("before:browser:launch", (browser, options) => {
    if(browser.family === "chromium" || browser.family === "firefox") {
      options.args.push("--force-dark-mode=true")

      return options
    }
  })
}) as Cypress.PluginConfig
