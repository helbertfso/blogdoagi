const { defineConfig } = require('cypress')

const environment = process.env.ENVIRONMENT || 'qa' // TO RUN: ENVIRONMENT=dev npm run cy:open
const dados = require(`./cypress/config/${environment}.js`)

function setupNodeEvents(on, config) {
  return config
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  projectId: '',
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/test-output-[hash].xml',
    toConsole: true
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalRunAllSpecs:  true,
    baseUrl: dados.baseUrl,
    viewportWidth: dados.viewportWidth,
    viewportHeight: dados.viewportHeight,
    env:{ 
      ...dados
    }
  },
})
