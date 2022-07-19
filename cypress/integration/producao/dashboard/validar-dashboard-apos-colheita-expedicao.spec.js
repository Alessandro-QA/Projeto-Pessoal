/// <reference types="cypress" />

// https://dev.azure.com/conexalabs/ProjetoX/_wiki/wikis/ProjetoX.wiki/3086/Dashboard

import seedTestContrato from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-contrato/contrato.json'
import seedTestColheita from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-colheita/colheita.json'
import seedTestExpedicao from '../../../fixtures/cenarios-de-teste/producao/dashboard/cadastro-expedicao/expedicao.json'
import seedTestDashboard from '../../../fixtures/cenarios-de-teste/producao/dashboard/validar-dashboard/dashboard-producao.json'
import seedTestDashboardAposExpedicao from '../../../fixtures/cenarios-de-teste/producao/dashboard/validar-dashboard/dashboard-apos-expedicao.json'
import Producao from '../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import { getExpedicaoPorAmbiente } from '../../../support/commands/funcionalidades/producao/expedicao.js'
import { getContratoPorAmbiente } from '../../../support/commands/funcionalidades/producao/contratos.js'
import { getColheitaPorAmbiente } from '../../../support/commands/funcionalidades/producao/colheita.js'
import { getDate, replacer, setAccessTokenToEnv, requestApi } from '../../../support/utils/utils.js'
import { login, logout } from '../../../support/commands/funcionalidades/login/login-logout.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativalção do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  context('Funcionalidade', () => {
    describe('Producao | Dashboard', { tags: '@colheita' }, () => {
      var contrato = getContratoPorAmbiente(seedTestContrato)
      var colheita = getColheitaPorAmbiente(seedTestColheita)
      var expedicao = getExpedicaoPorAmbiente(seedTestExpedicao)
      
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

      it('Cadastrar contratos por API', function () {
        cy.allure().severity('normal').startStep('test content')

        requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato1, 'login_cenarios')
        requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato2, 'login_cenarios')
        requestApi('POST', '/api/producao-agricola/v1/contratos', bodyContrato3, 'login_cenarios')
      })

      it('Cadastrar colheita por API', function () {
        cy.allure().severity('normal').startStep('test content')

        requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
      })

      it('Validar tabela entregas e fixações apos colheita sem contrato vinculado', function () {
        cy.allure().severity('normal').startStep('test content')

        Producao.validarDashboard(seedTestDashboard)
      })

      it('Cadastrar expedições por API', function () {
        cy.allure().severity('normal').startStep('test content')

        requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoInternaInterna, 'login_cenarios')
        requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoInternaExterna, 'login_cenarios')
        requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoExternaInterna, 'login_cenarios')
        requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicaoExternaExterna, 'login_cenarios')
      })

      it('Validar os cards de cultura, armazenagens e entregas e fixações', function () {
        cy.allure().severity('normal').startStep('test content')

        Producao.validarDashboard(seedTestDashboardAposExpedicao)
      })
    })
  })
}
