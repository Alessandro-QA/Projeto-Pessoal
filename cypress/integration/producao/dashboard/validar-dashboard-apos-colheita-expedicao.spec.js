/// <reference types="cypress" />

// https://dev.azure.com/conexalabs/ProjetoX/_wiki/wikis/ProjetoX.wiki/3086/Dashboard

import payloadContrato from '../../../fixtures/producao/dashboard/cadastro-contrato/contrato.json'
import payloadColheita from '../../../fixtures/producao/dashboard/cadastro-colheita/colheita.json'
import payloadExpedicao from '../../../fixtures/producao/dashboard/cadastro-expedicao/expedicao.json'
import seedTestDashboard from '../../../fixtures/producao/dashboard/validar-dashboard/dashboard-producao.json'
import seedTestDashboardAposExpedicao from '../../../fixtures/producao/dashboard/validar-dashboard/dashboard-apos-expedicao.json'
import Producao from '../../../support/commands/producao/dashboardProducao.js'
import { getDate, replacer, setAccessTokenToEnv, requestApi, getPayloadPorAmbiente } from '../../../support/utils/utils.js'
import { login, logout } from '../../../support/commands/login/login-logout.js'

describe('Produção', { tags: '@producao' }, () => {
  var contrato = getPayloadPorAmbiente(payloadContrato)
  var colheita = getPayloadPorAmbiente(payloadColheita)
  var expedicao = getPayloadPorAmbiente(payloadExpedicao)

  var dataAtual = getDate()

  var bodyContrato1 = replacer('dataSubstituicao', dataAtual, contrato.contrato1)
  var bodyContrato2 = replacer('dataSubstituicao', dataAtual, contrato.contrato2)
  var bodyContrato3 = replacer('dataSubstituicao', dataAtual, contrato.contrato3)
  var bodyColheita = replacer('dataSubstituicao', dataAtual, colheita)
  var bodyExpedicaoInternaInterna = replacer('dataSubstituicao', dataAtual, expedicao.internaInterna)
  var bodyExpedicaoInternaExterna = replacer('dataSubstituicao', dataAtual, expedicao.internaExterna)
  var bodyExpedicaoExternaInterna = replacer('dataSubstituicao', dataAtual, expedicao.externaInterna)
  var bodyExpedicaoExternaExterna = replacer('dataSubstituicao', dataAtual, expedicao.externaExterna)

  // Login via interface
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    login(credenciais)
    setAccessTokenToEnv(credenciais)
  })

  after(() => {
    logout()
  })

  describe('Colheita', { tags: '@colheita' }, () => {
    describe('Dashboard', { tags: '@dashboard' }, () => {

      context('Validar dashboard de colheita após expedição', () => {
        it('Deve cadastrar contratos por API', function () {
          cy.allure().severity('normal').startStep('test content')

          requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato1, 'login_cenarios')
          requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato2, 'login_cenarios')
          requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato3, 'login_cenarios')
        })

        it('Deve cadastrar colheita por API', function () {
          cy.allure().severity('normal').startStep('test content')

          requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
        })

        it('Deve validar tabela entregas e fixações após colheita sem contrato vinculado', function () {
          cy.allure().severity('normal').startStep('test content')

          Producao.validarDashboard(seedTestDashboard)
        })

        it('Deve cadastrar expedições por API', function () {
          cy.allure().severity('normal').startStep('test content')

          requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoInternaInterna, 'login_cenarios')
          requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoInternaExterna, 'login_cenarios')
          requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoExternaInterna, 'login_cenarios')
          requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoExternaExterna, 'login_cenarios')
        })

        it('Deve validar os cards de cultura, armazenagens e entregas e fixações', function () {
          cy.allure().severity('normal').startStep('test content')

          Producao.validarDashboard(seedTestDashboardAposExpedicao)
        })
      })
    })
  })
})
