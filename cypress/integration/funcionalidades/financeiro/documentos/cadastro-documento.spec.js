/// <reference types="cypress" />

import seedTestDocumento1 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento123.json'
import seedTestDocumento2 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento3315.json'
import seedTestDocumento3 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento1533.json'
import seedTestDocumento4 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento7553.json'
import seedTestDocumento5 from '../../../../fixtures/funcionalidades/financeiro/documentos/cadastro/documento3557.json'
import Documentos from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'

describe('FUNCIONALIDADE > Documentos | Cadastro de Documento - ', { tags: '@documentos' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  it('Dedutivel, com tag, observação, já pago, boleto', function () {
    cy.allure().severity('critical').startStep('test content')

    Documentos.cadastrar(seedTestDocumento1)

    Documentos.validarDetalhes(seedTestDocumento1)
  })

  it('Dedutivel, já pago, dinheiro, com rateio de ciclos e categoria', function () {
    cy.allure().severity('critical').startStep('test content')

    Documentos.cadastrar(seedTestDocumento2.documento)

    Documentos.validarDetalhes(seedTestDocumento2.detalhes)
  })

  it('Dedutivel, observação, parcelado, duas parcelas, boleto, com rateio de ciclos', function () {
    cy.allure().severity('critical').startStep('test content')

    Documentos.cadastrar(seedTestDocumento3.documento)

    Documentos.validarDetalhes(seedTestDocumento3.detalhes)
  })

  it('Não dedutivel, com tag, cartão de débito, com rateio de categoria', function () {
    cy.allure().severity('critical').startStep('test content')

    Documentos.cadastrar(seedTestDocumento4.documento)

    Documentos.validarDetalhes(seedTestDocumento4.detalhes)
  })

  it('Não dedutivel, pago, cartão de crédito, com rateio de ciclos e com rateio de categoria', function () {
    cy.allure().severity('critical').startStep('test content')

    Documentos.cadastrar(seedTestDocumento5.documento)

    Documentos.validarDetalhes(seedTestDocumento5.detalhes)
  })
})
