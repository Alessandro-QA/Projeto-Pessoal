/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-mesmo-estado/nfe-com-imposto-com-retencao-sem-financeiro.json'
import Nfe from '../../../../../support/commands/funcionalidades/nfe/nfe.js'

describe('FUNCIONALIDADE > NFe | Emissão de NFe: com imposto, com retenção, sem financeiro - ', { tags: '@nfe' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_nfe')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  it('Cadastrar uma nfe', function () {
    cy.allure().severity('blocker').startStep('test content')

    Nfe.cadastrar(seedTestNfe)
  })

  it('Validar detalhes da nfe cadastrada', function () {
    cy.allure().severity('critical').startStep('test content')

    Nfe.validarDetalhes(seedTestNfe)
  })
})
