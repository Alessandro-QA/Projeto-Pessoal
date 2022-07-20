/// <reference types="cypress" />

import Utils from '../../../../support/utils/utils.js'
import payloadColheita from '../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-interna/colheita.json'
import payloadExpedicao from '../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-interna/expedicao.json'
import ExtratoMateriais from '../../../../support/commands/funcionalidades/suprimentos/consultas/extratoMateriais.js'
import seedTest from '../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-interna/extratoMateriais.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/extrato-de-expedicao-interna-interna.description'

if ((Cypress.env('ambiente') === 'dev')) {
  context('Cenário de Teste', () => {
    describe('Extrato de Materiais | Consulta de extrato de material após expedição Interna x Interna', { tags: '@extratoMateriais' }, () => {
      var dataAtual = Utils.getDate()
      var colheita = Utils.getPayloadPorAmbiente(payloadColheita)
      var expedicao = Utils.getPayloadPorAmbiente(payloadExpedicao)
      var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, colheita)
      var bodyExpedicao = Utils.replacer('dataSubstituicao', dataAtual, expedicao)

      // Login via interface
      before(function () {
        const credenciais = Cypress.env('login_cenarios')
        Authenticate.login(credenciais)
        Utils.setAccessTokenToEnv(credenciais)
      })

      after(() => {
        Authenticate.logout()
      })

      it('Cadastrar colheita por API', function () {
        cy.allure().severity('normal').startStep('test content')

        Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
      })

      it('Validar extrato de materiais da UA de ORIGEM após cadastro de colheita', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.description)

        ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemColheita)
      })

      it('Cadastrar expedição por API', function () {
        cy.allure().severity('normal').startStep('test content')

        Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicao, 'login_cenarios')
      })

      it('Validar extrato de materiais da UA de ORIGEM após expedição para UA de DESTINO', function () {
        cy.allure().severity('normal').startStep('test content')

        ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemExpedicao)
      })

      it('Validar extrato de materiais da UA de DESTINO após expedição da UA de ORIGEM', function () {
        cy.allure().severity('normal').startStep('test content')

        ExtratoMateriais.validarExtratoMateriais(seedTest.UaDestinoExpedicao)
      })
    })
  })
}