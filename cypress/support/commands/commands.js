import '@testing-library/cypress/add-commands'
import '../commands/imports'

// Command Cypress para desabilitar a popup de notificação do MyFarm,
// setando um item no localStorage. 
Cypress.Commands.add('desabilitarPopUpNotificacao', () => {
  window.localStorage.setItem('notification-permission-myfarm', 'denied')
})

// Command Cypress para executar uma query, utilizando a task cypress preparedStatement
// que faz preparação da instrução que será enviada ao banco de dados.
Cypress.Commands.add('executarQuery', (query) => {
  const dbConfig = Cypress.env('db')
  cy.task('preparedStatement', { query, dbConfig })
})

// Command para navegar entre as páginas
Cypress.Commands.add('navegarPara', (url, locator, tituloPagina) => {
  cy.visit(url, { timeout: 30000 })

  cy.get(locator, { timeout: 30000 })
    .should('exist').and('be.visible')
    .and('contain', tituloPagina)
})

Cypress.Commands.add('getVisible', (locator) => {
  return cy.get(locator).scrollIntoView().should('exist').and('be.visible')
})

/**
 *  cy.allure()
 *    .description('some description')
 *    .attachment('sample', 'sample attachment', 'text/plain')
 *    .epic('Allure API')
 *    .feature('Chainer')
 *    .owner('Oleksandr Shevtsov')
 *    .parameter('param', 42)
 *    .severity('critical')
 *    .step('custom step')
 *    .story('Chainer api should work')
 *    .label('parentSuite', 'Allure API Parent Suite')
 *    .issue('bug', 'issueUrl')
 *    .tms('test case', 'tmsUrl')
 *    .tag('customTag', 'customTag2');
 */
Cypress.Commands.add('allure', () => {
  cy.wrap(Cypress.Allure.reporter.getInterface(), {
    log: false
  })
})
