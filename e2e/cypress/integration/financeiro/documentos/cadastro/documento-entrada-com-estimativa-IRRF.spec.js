/// <reference types="cypress" />

import seedTest from '../../../../fixtures/financeiro/documentos/cadastro/documento-entrada-com-estimativa-IRRF.json'
import LivroCaixa from '../../../../support/commands/financeiro/livro-caixa/livro-caixa.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(seedTest.documento)

  var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, documento)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Cadastro', () => {
      context('De entrada com estimativa de IRRF', () => {
        it('Cadastrar documento de entrada já pago por API', function () {
          cy.allure().severity('normal').startStep('test content')

          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento, 'login_cenarios')
        })

        it('Confirmar se gerou Livro Caixa com estimativa IRRF', function () {
          cy.allure().severity('critical').startStep('test content')

          LivroCaixa.validarLancamentos(seedTest.lancamentoLivroCaixa)
        })
      })
    })
  })
})
