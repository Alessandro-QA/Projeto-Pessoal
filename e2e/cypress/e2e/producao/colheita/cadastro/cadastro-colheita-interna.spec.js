/// <reference types="cypress" />

import seedTestDashboardColheita from '../../../../fixtures/producao/colheita/interna/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/producao/colheita/interna/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/producao/colheita/interna/dashboard-producao.json'
import testDescription from './bdd-description/cadastro-colheita.description.js'
import { cadastrarEditar, validarListagem } from '../../../../support/commands/producao/colheita.js'
import { validarDashboard } from '../../../../support/commands/producao/dashboardProducao.js'
import { login, logout } from '../../../../support/commands/login/login-logout.js'

describe('Produção', { tags: '@producao' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    login(credenciais)
  })

  after(() => {
    logout()
  })

  describe('Colheita', { tags: '@colheita' }, () => {
    describe('Cadastro', { tags: '@cadastro' }, () => {

      context('Colheita interna', () => {
        it('Deve cadastrar colheita interna', function () {
          // cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.interna)

          cadastrarEditar(seedTestCadastro)
        })

        it('Deve validar listagem de Colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')

          validarListagem(seedTestDashboardColheita)
        })

        it('Deve validar dashboard de Produção', function () {
          // cy.allure().severity('normal').startStep('test content')

          validarDashboard(seedTestDashboardProducao)
        })
      })
    })
  })
})
