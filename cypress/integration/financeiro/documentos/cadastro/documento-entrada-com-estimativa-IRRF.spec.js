/// <reference types="cypress" />

import seedTest from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-entrada-com-estimativa-IRRF.json'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import { getDocumentoPorAmbiente } from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'

context('Cenário de Teste', () => {
  describe('Documentos | Cadastro de documento de entrada com estimativa de IRRF', { tags: '@documentos' }, () => {
    var dataAtual = Utils.getDate()
    var documento = getDocumentoPorAmbiente(seedTest)

    var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, documento)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Cadastrar documento de entrada já pago por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento, 'login_cenarios')
    })

    it('Confirmar se gerou Livro Caixa com estimativa IRRF', function () {
      cy.allure().severity('critical').startStep('test content')

      LivroCaixa.validarDashboard(seedTest.lancamentoLivroCaixa)
    })
  })
})
