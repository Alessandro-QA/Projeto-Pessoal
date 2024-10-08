/* eslint no-console: ["error", { allow: ["log"] }] */

// import '@cypress/code-coverage/support'
import 'cypress-real-events'
import './commands/commands'
import deletarRegistroTabelasDev from './utils/queries/update-por-tabela-dev.js'
import deletarRegistroTabelasQa from './utils/queries/update-por-tabela-qa.js'
import registerCypressGrep from 'cypress-grep'
registerCypressGrep()
require('@cypress/skip-test/support')

// Retornando false pois o cypress falha com o redirecionamento do login
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err) { console.log(err, runnable) }
  return false
})

before(function () {
  switch (Cypress.env('ambiente')) {
    case 'dev': cy.executarQuery(deletarRegistroTabelasDev).then((recordset) => { cy.log(`Query executada com sucesso: `, recordset) })
      break
    case 'qa': cy.executarQuery(deletarRegistroTabelasQa).then(function (recordset) { cy.log(`Query executada com sucesso: `, recordset) })
      break
    default:
      throw new Error('Não foi possivel executar a query, verifique se as variaveis de ambiente estao corretas')
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
