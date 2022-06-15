/* eslint no-console: ["error", { allow: ["log"] }] */

// import '@cypress/code-coverage/support'
import './commands/commands'
import deletarRegistroTabelas from './utils/queries/deletar-por-tabela'
import '@shelex/cypress-allure-plugin'
import registerCypressGrep from 'cypress-grep'
registerCypressGrep()

// Retornando false pois o cypress falha com o redirecionamento do login
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err) { console.log(err, runnable) }
  return false
})

before(function () {
  cy.executarQuery(deletarRegistroTabelas)
    .then(function (recordset) { cy.log(recordset) })
})

beforeEach(() => {
  cy.desabilitarPopUpNotificacao()
  Cypress.Cookies.preserveOnce('.AspNetCore.Identity.Application', 'idsrv.session')
})

// Trecho comentado para a contabilização total dos teste no report ser precisa
// afterEach(function () {
//   if (this.currentTest.state === 'failed') {
//     Cypress.runner.stop()
//   }
// })
