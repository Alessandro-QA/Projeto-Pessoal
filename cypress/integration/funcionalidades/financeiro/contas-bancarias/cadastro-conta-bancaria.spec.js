/// <reference types="cypress" />

import seedTestContaBancaria from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/fixture-conta-bancaria.json'
import ContaBancaria from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

describe('FUNCIONALIDADE > Contas Bancárias | Cadastro de Conta Bancária - ', { tags: '@contasBancarias' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })
  it('Deve cadastrar uma conta bancaria', function () {
    cy.allure().severity('normal').startStep('test content')

    ContaBancaria.cadastro(seedTestContaBancaria)
  })

  it('Deve pesquisar uma conta bancaria', function () {
    cy.allure().severity('minor').startStep('test content')

    ContaBancaria.validarDashboard(seedTestContaBancaria)
  })
})
