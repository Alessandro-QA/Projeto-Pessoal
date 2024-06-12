/// <reference types="cypress" />

import Utils from '../../../../support/utils/utils.js'
import payloadColheita from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/colheita.json'
import payloadExpedicao from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/expedicao.json'
import seedTest from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/extratoMateriais.json'
import ExtratoMateriais from '../../../../support/commands/suprimentos/consultas/extratoMateriais.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/extrato-de-expedicao-interna-externa.description.js'

describe('Suprimentos', { tags: '@suprimentos' }, () => {
  var dataAtual = Utils.getDate()
  var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, Utils.getPayloadPorAmbiente(payloadColheita))
  var bodyExpedicao = Utils.replacer('dataSubstituicao', dataAtual, Utils.getPayloadPorAmbiente(payloadExpedicao))

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
          // cy.allure().severity('normal').startStep('test content')

          Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
        })

        it('Deve validar extrato de materiais da UA de ORIGEM após cadastro de colheita', function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.description)

          ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemColheita)
        })

        it('Deve cadastrar expedição por API', function () {
          // cy.allure().severity('normal').startStep('test content')

          Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicao, 'login_cenarios')
        })

        it('Deve validar extrato de materiais da UA de ORIGEM após expedição para cliente EXTERNO', function () {
          // cy.allure().severity('normal').startStep('test content')

          ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemExpedicao)
        })
      })
    })
  })
})
