/// <reference types="cypress" />

import seedTestDashboardColheita from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-producao.json'
import payloadContrato from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/contratos.json'
import testDescription from './bdd-description/cadastro-colheita.description.js'
import { cadastrarEditar, validarListagem } from '../../../../support/commands/funcionalidades/producao/colheita.js'
import { validarDashboard } from '../../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import { getDate, replacer, requestApi, setAccessTokenToEnv, getPayloadPorAmbiente } from '../../../../support/utils/utils.js'
import { login, logout } from '../../../../support/commands/funcionalidades/login/login-logout.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativalção do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  context('Funcionalidade', () => {
    describe('Colheitas | Cadastro de colheita externa, com partilha e quantidade inferiror', { tags: '@cenarios' }, () => {
      var contrato = getPayloadPorAmbiente(payloadContrato)

      var dataAtual = getDate()
      var bodyContrato1 = replacer('dataSubstituicao', dataAtual, contrato.contrato1)
      var bodyContrato2 = replacer('dataSubstituicao', dataAtual, contrato.contrato2)

      before(function () {
        const credenciais = Cypress.env('login_cenarios')
        login(credenciais)
        setAccessTokenToEnv(credenciais)
      })

      after(() => {
        logout()
      })

      it('Cadastrar contratos via API', function () {
        cy.allure().severity('normal').startStep('test content')

        requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato1, 'login_cenarios')
        requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato2, 'login_cenarios')
      })

      it('Cadastrar colheita', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.externaInferior)

        cadastrarEditar(seedTestCadastro)
      })

      it('Validar listagem de colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')

        validarListagem(seedTestDashboardColheita)
      })

      it('Validar dashboard de Produção', function () {
        cy.allure().severity('normal').startStep('test content')

        validarDashboard(seedTestDashboardProducao)
      })

      // TODO: aguardando resolução do bug https://dev.azure.com/conexalabs/ProjetoX/_workitems/edit/36869
      // it('Validar dashboard Contrato', function () {
      //   cy.allure().severity('normal').startStep('test content')

      //   validarDashboard(seedTestDashboarContrato)
      // })
    })
  })
}
