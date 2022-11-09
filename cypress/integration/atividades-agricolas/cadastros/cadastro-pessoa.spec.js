/// <reference types="cypress" />

import seedTestPessoa from '../../../fixtures/atividades-agricolas/cadastros/fixture-pessoa.json'
import Pessoa from '../../../support/commands/funcionalidades/atividades-agricolas/cadastros/pessoa/pessoa.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/pessoa.description.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Pessoa', () => {
      // Teste para cadastro de uma nova pessoa
      it('Deve cadastrar uma pessoa', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.pessoa)

        Pessoa.cadastro(seedTestPessoa)
      })

      // Validação da Dashboard de pessoa
      it('Deve validar a Dashboard de Cadastro de pessoas', function () {
        cy.allure().severity('minor').startStep('test content')

        Pessoa.validarDashboard(seedTestPessoa)
      })
    })
  })
})

