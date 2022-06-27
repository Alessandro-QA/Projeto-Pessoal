/// <reference types="cypress" />

/*
* Funcionalidade:
*    Expedição Interna x Externa deve gerar lançamentos no extrato de materiais
* Cenario:
*   Dado a inclusão de uma colheita interna para a U.A do tipo silo
*   Quando for realizado a expedição do tipo Interno X Externo (de UA para Cliente)
*   Então no extrato de materiais da UA de origem deve conter dois lançamentos de origem Armazenagem e tipo Entrada e Saída com os valores colhidos e expedidos
*/

import Utils from '../../../../../support/utils/utils.js'
import colheita from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/colheita.json'
import expedicao from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/expedicao.json'
import seedTest from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-interna-externa/extratoMateriais.json'
import ExtratoMateriais from '../../../../../support/commands/funcionalidades/suprimentos/consultas/extratoMateriais.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/extrato-de-expedicao-interna-externa.description.js'

describe('CENÁRIO > Extrato de Materiais | Consulta de extrato de material após expedição Interna x Externa - ', { tags: '@extratoMateriais' }, () => {
  var dataAtual = Utils.getDate()
  var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, colheita)
  var bodyExpedicao = Utils.replacer('dataSubstituicao', dataAtual, expedicao)

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

  it('Validar extrato de materiais da UA de ORIGEM após expedição para cliente EXTERNO', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicao, 'login_cenarios')
    ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemExpedicao)
  })
})
