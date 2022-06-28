/// <reference types="cypress" />

// https://dev.azure.com/conexalabs/ProjetoX/_wiki/wikis/ProjetoX.wiki/3086/Dashboard

import contrato1 from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-contrato/contrato-1.json'
import contrato2 from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-contrato/contrato-2.json'
import contrato3 from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-contrato/contrato-3.json'
import colheita from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-colheita/colheita.json'
import expedicaoInternaInterna from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-expedicao/expedicao-interna-interna.json'
import expedicaoInternaExterna from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-expedicao/expedicao-interna-externa.json'
import expedicaoExternaInterna from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-expedicao/expedicao-externa-interna.json'
import expedicaoExternaExterna from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-expedicao/expedicao-externa-externa.json'
import seedTestDashboard from '../../../fixtures/cenarios-de-teste/producao/dashboard/validar-dashboard/dashboard-producao.json'
import seedTestDashboardAposExpedicao from '../../../fixtures/cenarios-de-teste/producao/dashboard/validar-dashboard/dashboard-apos-expedicao.json'
import Utils from '../../../support/utils/utils.js'
import Producao from '../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Producao | Dashboard', { tags: '@colheita' }, () => {
    var dataAtual = Utils.getDate()

    var bodyContrato1 = Utils.replacer('dataSubstituicao', dataAtual, contrato1)
    var bodyContrato2 = Utils.replacer('dataSubstituicao', dataAtual, contrato2)
    var bodyContrato3 = Utils.replacer('dataSubstituicao', dataAtual, contrato3)

    var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, colheita)

    var bodyExpedicaoInternaInterna = Utils.replacer('dataSubstituicao', dataAtual, expedicaoInternaInterna)
    var bodyExpedicaoInternaExterna = Utils.replacer('dataSubstituicao', dataAtual, expedicaoInternaExterna)
    var bodyExpedicaoExternaInterna = Utils.replacer('dataSubstituicao', dataAtual, expedicaoExternaInterna)
    var bodyExpedicaoExternaExterna = Utils.replacer('dataSubstituicao', dataAtual, expedicaoExternaExterna)

    // Login via interface
    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Cadastrar contratos por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato1, 'login_cenarios')
      Utils.requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato2, 'login_cenarios')
      Utils.requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato3, 'login_cenarios')
    })

    it('Cadastrar colheita por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
    })

    it('Validar tabela entregas e fixações apos colheita sem contrato vinculado', function () {
      cy.allure().severity('normal').startStep('test content')

      Producao.validarDashboard(seedTestDashboard)
    })

    it('Cadastrar expedições por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoInternaInterna, 'login_cenarios')
      Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoInternaExterna, 'login_cenarios')
      Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoExternaInterna, 'login_cenarios')
      Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoExternaExterna, 'login_cenarios')
    })

    it('Validar os cards de cultura, armazenagens e entregas e fixações', function () {
      cy.allure().severity('normal').startStep('test content')

      Producao.validarDashboard(seedTestDashboardAposExpedicao)
    })
  })
})
