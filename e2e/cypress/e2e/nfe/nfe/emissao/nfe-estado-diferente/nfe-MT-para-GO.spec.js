/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/nfe/nfe/emissao/nfe-estado-diferente/nfe-mt-para-go.json'
import Nfe from '../../../../../support/commands/nfe/nfe/nfe.js'
import Authenticate from '../../../../../support/commands/login/login-logout.js'
import testDescription from './bdd-descritpion/nfe-MT-para-GO.description.js'

describe('NF-e', { tags: '@nfe' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_nfe')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('NF-e', { tags: '@nfe' }, () => {
    describe('Emissão', () => {

      context('Emitente MT para Destinatário GO', () => {
        it('Deve cadastrar NF-e', function () {
          cy.allure().severity('blocker').startStep('test content')
            .tag('nfe').description(testDescription.cadastrarNfe)

          Nfe.cadastrar(seedTestNfe)
        })

        it('Deve validar detalhes da NF-e cadastrada', function () {
          cy.allure().severity('critical').startStep('test content')
            .tag('nfe').description(testDescription.validarDetalhes)

          Nfe.validarDetalhes(seedTestNfe)
        })
      })
    })
  })
})
