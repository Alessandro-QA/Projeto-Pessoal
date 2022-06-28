/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-estado-diferente/nfe-mt-para-go.json'
import Nfe from '../../../../../support/commands/funcionalidades/nfe/nfe.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-descritpion/nfe-MT-para-GO.description.js'

context('Funcionalidade', () => {
  describe('NFe | Emissão de NFe: Emitente MT para Destinatário GO', { tags: '@nfe' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_nfe')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Cadastrar nfe', function () {
      cy.allure().severity('blocker').startStep('test content')
        .tag('nfe').description(testDescription.cadastrarNfe)

      Nfe.cadastrar(seedTestNfe)
    })

    it('Validar detalhes da nfe cadastrada', function () {
      cy.allure().severity('critical').startStep('test content')
        .tag('nfe').description(testDescription.validarDetalhes)

      Nfe.validarDetalhes(seedTestNfe)
    })
  })
})
