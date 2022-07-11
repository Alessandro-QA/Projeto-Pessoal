/// <reference types="cypress" />

import seedTestDocumento1 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento123.json'
import seedTestDocumento2 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento3315.json'
import seedTestDocumento3 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento1533.json'
import seedTestDocumento4 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento7553.json'
import seedTestDocumento5 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento3557.json'
import seedTestDocumento6 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento5537.json'
import Documentos from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import testDescription from './bdd-description/cadastro-documento.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Documentos | Cadastro de Documento', { tags: '@documentos' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Dedutivel, com tag, observação, já pago, boleto', () => {
      it('Cadastrar documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes1)

        Documentos.cadastrar(seedTestDocumento1)
      })
      it('Validar detalhes do documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes1)
        Documentos.validarDetalhes(seedTestDocumento1)
      })
    })

    context('Dedutivel, já pago, dinheiro, com rateio de ciclos e categoria', function () {
      it('Cadastrar documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes2)
        Documentos.cadastrar(seedTestDocumento2.documento)
      })
      it('Validar detalhes do documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes1)
        Documentos.validarDetalhes(seedTestDocumento2.detalhes)
      })
    })

    context('Dedutivel, observação, parcelado, duas parcelas, boleto, com rateio de ciclos', function () {
      it('Cadastrar documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes3)

        Documentos.cadastrar(seedTestDocumento3.documento)
      })
      it('Validar detalhes do documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes3)
        Documentos.validarDetalhes(seedTestDocumento3.detalhes)
      })
    })

    context('Não dedutivel, com tag, cartão de débito, com rateio de categoria', function () {

      it('Cadastrar documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes4)

        Documentos.cadastrar(seedTestDocumento4.documento)
      })

      it('Cadastrar documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes3)

        Documentos.validarDetalhes(seedTestDocumento4.detalhes)
      })
    })

    context('Não dedutivel, pago, cartão de crédito, com rateio de ciclos e com rateio de categoria', function () {
      it('Cadastrar documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes5)

        Documentos.cadastrar(seedTestDocumento5.documento)
      })

      it('Validar detalhes do documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes3)

        Documentos.validarDetalhes(seedTestDocumento5.detalhes)
      })
    })

    context('Não dedutivel, transferência bancaria, parcelado, com anexo', function () {
      it('Cadastrar documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes6)

        Documentos.cadastrar(seedTestDocumento6.documento)
      })

      it('Validar detalhes do documento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.testes3)
        Documentos.validarDetalhes(seedTestDocumento6.detalhes)
      })
    })
  })
})
