/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/nfe/nfe/emissao/nfe-mesmo-estado/nfe-sem-imposto-sem-retencao-sem-financeiro.json'
import Nfe from '../../../../../support/commands/nfe/nfe/nfe.js'
import Authenticate from '../../../../../support/commands/login/login-logout.js'

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

      context('Sem imposto, sem retenção, sem financeiro', () => {
        it('Deve cadastrar NF-e', function () {
          // cy.allure().severity('blocker').startStep('test content')

          Nfe.cadastrar(seedTestNfe)
        })

        it('Deve validar detalhes da NF-e cadastrada', function () {
          // cy.allure().severity('critical').startStep('test content')

          Nfe.validarDetalhes(seedTestNfe)
        })
      })
    })
  })
})

