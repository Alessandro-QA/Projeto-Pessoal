/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-mesmo-estado/destinatario-ie-isenta/nfe-destinatario-ie-isenta.spec.json'
import destinatarioJson from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-mesmo-estado/destinatario-ie-isenta/destinatario.json'
import Nfe from '../../../../../support/commands/funcionalidades/nfe/nfe.js'
import Utils from '../../../../../support/utils/utils.js'

describe('FUNCIONALIDADE > NFe | Emissão de NFe: destinatário com IE isenta - ', { tags: '@nfe' }, () => {
  var payloadDestinatarioIsento = Utils.replacer('dataSubstituicao', Utils.getDate(), destinatarioJson.isenta)
  var payloadDestinatarioNaoIsento = Utils.replacer('dataSubstituicao', Utils.getDate(), destinatarioJson.naoIsenta)

  before(function () {
    const credenciais = Cypress.env('login_nfe')
    cy.login(credenciais)
  })

  before(function () {
    Utils.setAccessTokenFromLocalStorage()
  })

  after(() => {
    cy.logout()
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
