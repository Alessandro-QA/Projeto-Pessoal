/// <reference types="cypress" />

import seedTestDashboardColheita from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa/dashboard-producao.json'
import testDescription from './bdd-description/cadastro-colheita.description.js'
import { cadastrarEditar, validarListagem } from '../../../../support/commands/funcionalidades/producao/colheita.js'
import { validarDashboard } from '../../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import { login, logout } from '../../../../support/commands/funcionalidades/login/login-logout.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativalção do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  context('Funcionalidade', () => {
    describe('Colheitas | Cadastro de colheita externa sem contrato', { tags: '@colheita' }, () => {
      before(function () {
        const credenciais = Cypress.env('login_cenarios')
        login(credenciais)
      })

      after(() => {
        logout()
      })

      it('Cadastrar colheita externa', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.externa)

        cadastrarEditar(seedTestCadastro)
      })

      it('Validar listagem de Colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')

        validarListagem(seedTestDashboardColheita)
      })

      it('Validar dashboard de Produção', function () {
        cy.allure().severity('normal').startStep('test content')

        validarDashboard(seedTestDashboardProducao)
      })
    })
  })
}
