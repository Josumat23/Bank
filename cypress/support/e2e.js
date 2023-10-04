// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  // Comando predeterminado para que no aparezcan los Fetch en el Log del Test Runner:

  const origLog = Cypress.log
  Cypress.log = function(opts, ...other){
    if (opts.displayName == 'xhr'|| opts.displayName === 'fetch' && opts.url.startsWith('https://')){
      return
    }
    return origLog(opts, ...other)
  }