/// <reference types="cypress" />

import seedTestUsuario from '../../../fixtures/atividades-agricolas/cadastros/fixture-usuario.json'
import Usuario from '../../../support/commands/atividades-agricolas/cadastros/usuario/usuario.js'
import Authenticate from '../../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/usuario.description.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Usuário', () => {
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
})
