/// <reference types="cypress" />

import seedTestDashboardColheita from '../../../../fixtures/producao/colheita/externa-com-quantidade-inferior/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/producao/colheita/externa-com-quantidade-inferior/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/producao/colheita/externa-com-quantidade-inferior/dashboard-producao.json'
import seedTestDashboardContrato from '../../../../fixtures/producao/colheita/externa-com-quantidade-inferior/dashboard-contrato.json'
import Contrato from '../../../../support/commands/producao/contratos.js'
import payloadContrato from '../../../../fixtures/producao/colheita/externa-com-quantidade-inferior/contratos.json'
import testDescription from './bdd-description/cadastro-colheita.description.js'
import { cadastrarEditar, validarListagem } from '../../../../support/commands/producao/colheita.js'
import { validarDashboard } from '../../../../support/commands/producao/dashboardProducao.js'
import { getDate, replacer, requestApi, setAccessTokenToEnv, getPayloadPorAmbiente } from '../../../../support/utils/utils.js'
import { login, logout } from '../../../../support/commands/login/login-logout.js'

describe('Produção', { tags: '@producao' }, () => {
  var bodyContrato1 = replacer('dataSubstituicao', getDate(), getPayloadPorAmbiente(payloadContrato).contrato1)
  var bodyContrato2 = replacer('dataSubstituicao', getDate(), getPayloadPorAmbiente(payloadContrato).contrato2)

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

      context('Colheita externa, com partilha e quantidade inferiror', () => {
        it('Deve cadastrar contratos via API', function () {
          // cy.allure().severity('normal').startStep('test content')

          requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato1, 'login_cenarios')
          requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato2, 'login_cenarios')
        })

        it('Deve cadastrar colheita', function () {
          // cy.allure().severity('critical').startStep('test content')
            //.descriptionHtml(testDescription.externaInferior)

          cadastrarEditar(seedTestCadastro)
        })

        it('Deve validar listagem de colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')

          validarListagem(seedTestDashboardColheita)
        })

        it('Deve validar dashboard de Produção', function () {
          // cy.allure().severity('normal').startStep('test content')

          validarDashboard(seedTestDashboardProducao)
        })

        it('Validar dashboard Contrato', function () {
          // cy.allure().severity('normal').startStep('test content')

          Contrato.validarDashboard(seedTestDashboardContrato)
        })
      })
    })
  })
})
