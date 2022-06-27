/// <reference types="cypress" />

/*
* Funcionalidade:
*    Expedição Interna x Interna deve gerar lançamentos no extrato de materiais
* Cenario:
*   Dado a inclusão de uma colheita interna para a U.A do tipo silo
*   Quando for realizado a expedição do tipo Interno X Interno (de UA para UA)
*   Então no extrato de materiais da UA de origem deve conter dois lançamentos de origem Armazenagem e tipo Entrada e Saída com os valores expedidos
*   E  no extrato de materiais da UA de destino deve conter um lançamento de origem Armazenagem e tipo Entrada com os valores recebidos
*/

import Utils from '../../../../../support/utils/utils.js'
import colheita from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-interna/colheita.json'
import expedicao from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-interna/expedicao.json'
import ExtratoMateriais from '../../../../../support/commands/funcionalidades/suprimentos/consultas/extratoMateriais.js'
import seedTest from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-interna/extratoMateriais.json'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/extrato-de-expedicao-interna-interna.description'

describe('CENÁRIO > Extrato de Materiais | Consulta de extrato de material após expedição Interna x Interna - ', { tags: '@extratoMateriais' }, () => {
  var dataAtual = Utils.getDate()
  var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, colheita)
  var bodyExpedicao = Utils.replacer('dataSubstituicao', dataAtual, expedicao)

  // Login via interface
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  it('Validar extrato de materiais da UA de ORIGEM após cadastro de colheita', function () {
    cy.allure().severity('normal').startStep('test content')
      .descriptionHtml(testDescription.description)

    Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
    ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemColheita)
  })

  it('Validar extrato de materiais da UA de ORIGEM após expedição para UA de DESTINO', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicao, 'login_cenarios')
    ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemExpedicao)
  })

  it('Validar extrato de materiais da UA de DESTINO após expedição da UA de ORIGEM', function () {
    cy.allure().severity('normal').startStep('test content')

    ExtratoMateriais.validarExtratoMateriais(seedTest.UaDestinoExpedicao)
  })
})
