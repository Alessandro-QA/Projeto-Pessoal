/// <reference types="cypress" />

import seedTestUsuario from '../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-usuario.json'
import Usuario from '../../../support/commands/funcionalidades/atividades-agricolas/cadastros/usuario/usuario.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/usuario.description.js'

context('Funcionalidade', () => {
  describe('Atividades Agricolas | Cadastro de Usuário', { tags: '@cadastro' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    // Teste para cadastro de um novo usuario
    it('Deve cadastrar um usuario', function () {
      cy.allure().severity('critical').startStep('test content')
        .descriptionHtml(testDescription.usuario)

      Usuario.cadastro(seedTestUsuario)
    })

    // Validação da dashboard de cadastro de usuario
    it('Deve validar Dashboard de Cadastro de usuario', function () {
      cy.allure().severity('minor').startStep('test content')

      Usuario.validarDashboard(seedTestUsuario)
    })
  })
})
