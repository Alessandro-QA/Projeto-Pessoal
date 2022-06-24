/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-mesmo-estado/nfe-com-imposto-sem-retencao-sem-financeiro.json'
import Nfe from '../../../../../support/commands/funcionalidades/nfe/nfe.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

describe('FUNCIONALIDADE > NFe | Emissão de NFe: com imposto, sem retenção, sem financeiro - ', { tags: '@nfe' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_nfe')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
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
