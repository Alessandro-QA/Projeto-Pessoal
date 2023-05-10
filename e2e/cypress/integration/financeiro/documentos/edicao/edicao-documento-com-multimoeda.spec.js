/// <reference types="cypress" />

import documentoDolar from '../../../../fixtures/financeiro/documentos/edicao/documento-com-multimoeda/dolar.json'
import documentoGuarani from '../../../../fixtures/financeiro/documentos/edicao/documento-com-multimoeda/guarani.json'
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
    context('Edição', () => {
      context('Multimoeda - Guarani', () => {
        it('CT1 - Cadastrar documento', function () {
          Documentos.cadastrar(documentoGuarani.ct1)
        })

        it('CT2 - Editar Documento', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.editar(documentoGuarani.ct2.filtro, documentoGuarani.ct2.editar)
        })

        it('CT3 - Validar campos do documento editado', function () {
          cy.allure().severity('normal').startStep('test content')

          Documentos.validarCamposEdicao(documentoGuarani.ct3)
        })
      })

      context('Multimoeda - Dolar', () => {
        it('CT1 - Cadastrar documento', function () {
          Documentos.cadastrar(documentoDolar.ct1)
        })

        it('CT2 - Editar Documento', function () {
          cy.allure().severity('critical').startStep('test content')

          Documentos.editar(documentoDolar.ct2.filtro, documentoDolar.ct2.editar)
        })

        it('CT3 - Validar campos do documento editado', function () {
          cy.allure().severity('normal').startStep('test content')

          Documentos.validarCamposEdicao(documentoDolar.ct3)
        })
      })
    })
  })
})
