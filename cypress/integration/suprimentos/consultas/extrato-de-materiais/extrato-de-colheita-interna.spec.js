/// <reference types="cypress" />

import Utils from '../../../../support/utils/utils.js'
import payloadColheita from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-colheita-interna/colheita.json'
import ExtratoMateriais from '../../../../support/commands/funcionalidades/suprimentos/consultas/extratoMateriais.js'
import seedTest from '../../../../fixtures/suprimentos/consultas/extrato-de-materiais/extrato-colheita-interna/extratoMaterial.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/extrato-de-colheita-interna.description.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativação do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  describe('Suprimentos', { tags: '@suprimentos' }, () => {
    var dataAtual = Utils.getDate()
    var colheita = Utils.getPayloadPorAmbiente(payloadColheita)
    var body = Utils.replacer('dataSubstituicao', dataAtual, colheita)

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

        context('Consultar Extrato de Materiais após cadastro de Colheita Interna', () => {
          it('Deve cadastrar colheita por API', function () {
            cy.allure().severity('normal').startStep('test content')

            Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', body, 'login_cenarios')
          })

          it('Deve validar colheita no Extrato de Materiais', function () {
            cy.allure().severity('normal').startStep('test content')
              .descriptionHtml(testDescription.description)

            ExtratoMateriais.validarExtratoMateriais(seedTest)
          })
        })
      })
    })
  })
}
