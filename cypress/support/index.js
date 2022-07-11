/* eslint no-console: ["error", { allow: ["log"] }] */

// import '@cypress/code-coverage/support'
import './commands/commands'
import deletarRegistroTabelasDev from './utils/queries/deletar-por-tabela-dev.js'
import deletarRegistroTabelasQa from './utils/queries/deletar-por-tabela-qa.js'
import '@shelex/cypress-allure-plugin'
import registerCypressGrep from 'cypress-grep'
registerCypressGrep()

// Retornando false pois o cypress falha com o redirecionamento do login
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err) { console.log(err, runnable) }
  return false
})

before(function () {
  switch (Cypress.env('ambiente')) {
    case 'dev': cy.executarQuery(deletarRegistroTabelasDev).then(function (recordset) { cy.log(recordset) })
      break
    case 'qa': cy.executarQuery(deletarRegistroTabelasQa).then(function (recordset) { cy.log(recordset) })
      break
    default:
      throw new Error('Não foi possivel carregar as variáveis de ambiente')
  }
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
