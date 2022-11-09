/// <reference types="cypress" />

import payloadContrato from '../../../../fixtures/producao/colheita/externa-com-contrato/contrato.json'
import seedTestDashboardColheita from '../../../../fixtures/producao/colheita/externa-com-contrato/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/producao/colheita/externa-com-contrato/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/producao/colheita/externa-com-contrato/dashboard-producao.json'
import testDescription from './bdd-description/cadastro-colheita.description.js'
import { cadastrarEditar, validarListagem } from '../../../../support/commands/funcionalidades/producao/colheita.js'
import { validarDashboard } from '../../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import { getDate, replacer, requestApi, setAccessTokenToEnv, getPayloadPorAmbiente } from '../../../../support/utils/utils.js'
import { login, logout } from '../../../../support/commands/funcionalidades/login/login-logout.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativalção do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  describe('Produção', { tags: '@producao' }, () => {
    var contrato = getPayloadPorAmbiente(payloadContrato)

    var dataAtual = getDate()
    var bodyContrato = replacer('dataSubstituicao', dataAtual, contrato)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      login(credenciais)
      setAccessTokenToEnv(credenciais)
    })

    after(() => {
      logout()
    })

    describe('Colheita', { tags: '@colheita' }, () => {
      describe('Cadastro', { tags: '@cadastro' }, () => {
        context('Colheita externa, com contrato, sem partilha', () => {
          it('Deve cadastrar contrato por API', function () {
            cy.allure().severity('normal').startStep('test content')

            requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato, 'login_cenarios')
          })

          it('Deve cadastrar colheita externa, com contrato, sem partilha', function () {
            cy.allure().severity('critical').startStep('test content')
              .descriptionHtml(testDescription.externaContrato)

            cadastrarEditar(seedTestCadastro)
          })

          it('Deve validar listagem de Colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
            cy.allure().severity('normal').startStep('test content')

            validarListagem(seedTestDashboardColheita)
          })

          it('Deve validar dashboard de Produção', function () {
            cy.allure().severity('normal').startStep('test content')

            validarDashboard(seedTestDashboardProducao)
          })
        })
      })
    })
  })
}
