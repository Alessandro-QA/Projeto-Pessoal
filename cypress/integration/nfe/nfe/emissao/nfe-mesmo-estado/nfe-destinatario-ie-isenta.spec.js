/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-mesmo-estado/destinatario-ie-isenta/nfe-destinatario-ie-isenta.spec.json'
import payloadDestinatario from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-mesmo-estado/destinatario-ie-isenta/destinatario.json'
import Nfe from '../../../../../support/commands/funcionalidades/nfe/nfe.js'
import Utils from '../../../../../support/utils/utils.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('NFe | Emissão de NFe: destinatário com IE isenta', { tags: '@nfe' }, () => {
    var inscricaoEstadual = Utils.getPayloadPorAmbiente(payloadDestinatario)
    var payloadDestinatarioIsento = Utils.replacer('dataSubstituicao', Utils.getDate(), inscricaoEstadual.isenta)
    var payloadDestinatarioNaoIsento = Utils.replacer('dataSubstituicao', Utils.getDate(), inscricaoEstadual.naoIsenta)

    before(function () {
      const credenciais = Cypress.env('login_nfe')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Definir destinatário como IE isenta - API', function () {
      cy.allure().severity('minor').startStep('test content')

      Utils.requestApi('PUT', '/api/pessoa/v1/Pessoa', payloadDestinatarioIsento, 'login_nfe')
    })

    it('Cadastrar uma nfe', function () {
      cy.allure().severity('blocker').startStep('test content')

      Nfe.cadastrar(seedTestNfe)
    })

    it('Validar detalhes da nfe cadastrada', function () {
      cy.allure().severity('normal').startStep('test content')

      Nfe.validarDetalhes(seedTestNfe)
    })

    it('Reinserir IE do destinatário - API', function () {
      cy.allure().severity('minor').startStep('test content')

      Utils.requestApi('PUT', '/api/pessoa/v1/Pessoa', payloadDestinatarioNaoIsento, 'login_nfe')
    })
  })
})
