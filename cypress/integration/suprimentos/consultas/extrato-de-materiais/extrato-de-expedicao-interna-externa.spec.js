/// <reference types="cypress" />

import Utils from '../../../../support/utils/utils.js'
import payloadColheita from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/colheita.json'
import payloadExpedicao from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/expedicao.json'
import seedTest from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/extratoMateriais.json'
import ExtratoMateriais from '../../../../support/commands/funcionalidades/suprimentos/consultas/extratoMateriais.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/extrato-de-expedicao-interna-externa.description.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativação do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  describe('Suprimentos', { tags: '@suprimentos' }, () => {
    var dataAtual = Utils.getDate()
    var colheita = Utils.getPayloadPorAmbiente(payloadColheita)
    var expedicao = Utils.getPayloadPorAmbiente(payloadExpedicao)
    var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, colheita)
    var bodyExpedicao = Utils.replacer('dataSubstituicao', dataAtual, expedicao)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    describe('Consultas', { tags: '@consultas' }, () => {
      describe('Extrato de Materiais', { tags: '@extratoDeMateriais' }, () => {

        context('Consultar extrato de materiais após expedição Interna x Externa', () => {
          it('Deve cadastrar colheita por API', function () {
            cy.allure().severity('normal').startStep('test content')

            Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
          })

          it('Deve validar extrato de materiais da UA de ORIGEM após cadastro de colheita', function () {
            cy.allure().severity('normal').startStep('test content')
              .descriptionHtml(testDescription.description)

            ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemColheita)
          })

          it('Deve cadastrar expedição por API', function () {
            cy.allure().severity('normal').startStep('test content')

            Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicao, 'login_cenarios')
          })

          it('Deve validar extrato de materiais da UA de ORIGEM após expedição para cliente EXTERNO', function () {
            cy.allure().severity('normal').startStep('test content')

            ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemExpedicao)
          })
        })
      })
    })
  })
}
