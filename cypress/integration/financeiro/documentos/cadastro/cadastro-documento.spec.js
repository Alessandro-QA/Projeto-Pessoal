/// <reference types="cypress" />

import seedTestDocumento1 from '../../../../fixtures/financeiro/documentos/cadastro/documento123.json'
import seedTestDocumento2 from '../../../../fixtures/financeiro/documentos/cadastro/documento3315.json'
import seedTestDocumento3 from '../../../../fixtures/financeiro/documentos/cadastro/documento1533.json'
import seedTestDocumento4 from '../../../../fixtures/financeiro/documentos/cadastro/documento7553.json'
import seedTestDocumento5 from '../../../../fixtures/financeiro/documentos/cadastro/documento3557.json'
import seedTestDocumento6 from '../../../../fixtures/financeiro/documentos/cadastro/documento5537.json'
import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
import testDescription from './bdd-description/cadastro-documento.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Cadastro', () => {

      context('Dedutivel, com tag, observação, já pago, boleto', () => {
        it('Deve cadastrar documento - ', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes1)

          Documentos.cadastrar(seedTestDocumento1)
        })
        it('Deve validar os detalhes do documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes1)

          Documentos.validarDetalhes(seedTestDocumento1)
        })
      })

      context('Dedutivel, já pago, dinheiro, com rateio de ciclos e categoria', () => {
        it('Deve cadastrar documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes2)

          Documentos.cadastrar(seedTestDocumento2.documento)
        })
        it('Deve validar os detalhes do documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes1)

          Documentos.validarDetalhes(seedTestDocumento2.detalhes)
        })
      })

      context('Dedutivel, observação, parcelado, duas parcelas, boleto, com rateio de ciclos', () => {
        it('Deve cadastrar documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes3)

          Documentos.cadastrar(seedTestDocumento3.documento)
        })
        it('Deve validar os detalhes do documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento3.detalhes)
        })
      })

      context('Não dedutivel, com tag, cartão de débito, com rateio de categoria', () => {
        it('Deve cadastrar documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes4)

          Documentos.cadastrar(seedTestDocumento4.documento)
        })

        it('Deve validar os detalhes do documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento4.detalhes)
        })
      })

      context('Não dedutivel, pago, cartão de crédito, com rateio de ciclos e com rateio de categoria', () => {

        it('Deve cadastrar documento - ', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes5)

          Documentos.cadastrar(seedTestDocumento5.documento)
        })

        it('Deve validar os detalhes do documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento5.detalhes)
        })
      })

      context('Não dedutivel, com observação, transferência bancaria, parcelado, com anexo', () => {
        it('Deve cadastrar documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes6)

          Documentos.cadastrar(seedTestDocumento6.documento)
        })

        it('Deve validar os detalhes do documento', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento6.detalhes)
        })
      })
    })
  })
})
