import '@testing-library/cypress/add-commands'
import 'cypress-localstorage-commands'
import './login/login-logout.js'
import './login/onboarding/cadastrar-conta.js'



/**
 *  // cy.allure()
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
/*Cypress.Commands.add('allure', () => {
  cy.wrap(Cypress.Allure.reporter.getInterface(), {
    log: false
  })
}) */
