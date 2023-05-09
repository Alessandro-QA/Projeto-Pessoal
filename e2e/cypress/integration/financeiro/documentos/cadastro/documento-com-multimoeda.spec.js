/// <reference types="cypress" />

import documentoDolar from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-multimoeda/dolar.json'
import documentoGuarani from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-multimoeda/guarani.json'
import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Cadastro', () => {
      context('Multimoeda - Guarani', () => {
        it('CT1 - Deve cadastrar documento a pagar, a vista, com boleto, sem rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoGuarani.ct1)
        })

        it('CT2 - Deve cadastrar documento a pagar, a vista, com boleto, com rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoGuarani.ct2)
        })

        it('CT3 - Deve cadastrar documento a pagar, parcelado, com boleto, sem rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoGuarani.ct3)
        })

        it('CT4 - Deve cadastrar documento ja pago, a vista, com boleto, sem rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoGuarani.ct4)
        })

        it('CT5 - Deve cadastrar documento ja pago, a vista, com boleto, com rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoGuarani.ct5)
        })
      })

      context('Multimoeda - Dolar', () => {
        it('CT1 - Deve cadastrar documento a pagar, a vista, com boleto, sem rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoDolar.ct1)
        })

        it('CT2 - Deve cadastrar documento a pagar, a vista, com boleto, com rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoDolar.ct2)
        })

        it('CT3 - Deve cadastrar documento a pagar, parcelado, com boleto, sem rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoDolar.ct3)
        })

        it('CT4 - Deve cadastrar documento ja pago, a vista, com boleto, sem rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoDolar.ct4)
        })

        it('CT5 - Deve cadastrar documento ja pago, a vista, com boleto, com rateio', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(documentoDolar.ct5)
        })
      })
    })
  })
})