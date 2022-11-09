/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/nfe/emissao/nfe-mesmo-estado/nfe-com-imposto-com-retencao-sem-financeiro.json'
import Nfe from '../../../../../support/commands/funcionalidades/nfe/nfe.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

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
      context('Com imposto, com retenção, sem financeiro', { tags: '@nfe' }, () => {
        it('Deve cadastrar NF-e', function () {
          cy.allure().severity('blocker').startStep('test content')

          Nfe.cadastrar(seedTestNfe)
        })

        it('Deve validar detalhes da NF-e cadastrada', function () {
          cy.allure().severity('critical').startStep('test content')

          Nfe.validarDetalhes(seedTestNfe)
        })
      })
    })
  })
})
