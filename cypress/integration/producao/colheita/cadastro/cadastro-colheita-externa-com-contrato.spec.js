/// <reference types="cypress" />

import payloadContrato from '../../../../fixtures/producao/colheita/externa-com-contrato/contrato.json'
import seedTestDashboardColheita from '../../../../fixtures/producao/colheita/externa-com-contrato/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/producao/colheita/externa-com-contrato/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/producao/colheita/externa-com-contrato/dashboard-producao.json'
import testDescription from './bdd-description/cadastro-colheita.description.js'
import { cadastrarEditar, validarListagem } from '../../../../support/commands/producao/colheita.js'
import { validarDashboard } from '../../../../support/commands/producao/dashboardProducao.js'
import { getDate, replacer, requestApi, setAccessTokenToEnv, getPayloadPorAmbiente } from '../../../../support/utils/utils.js'
import { login, logout } from '../../../../support/commands/login/login-logout.js'

describe('Produção', { tags: '@producao' }, () => {
  var bodyContrato = replacer('dataSubstituicao', getDate(), getPayloadPorAmbiente(payloadContrato))

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
