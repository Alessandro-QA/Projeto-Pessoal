/// <reference types="cypress" />

/*
* Funcionalidade:
*    Expedição Externa x Interna deve gerar lançamentos no extrato de materiais
* Cenario:
*   Dado a inclusão de uma colheita interna para a U.A do tipo silo
*   Quando for realizado a expedição do tipo Externa X Interna (de cliente para silo da fazenda)
*   Então no extrato de materiais da UA de destino deve conter um lançamento de origem Armazenagem e tipo Entrada com os valores expedidos
*/

import Utils from '../../../../../support/utils/utils'
import seedTest from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-externa-interna/extratoMaterias.json'
import colheita from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-externa-interna/colheita.json'
import expedicao from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-expedicao-externa-interna/expedicao.json'
import ExtratoMateriais from '../../../../../support/commands/funcionalidades/suprimentos/consultas/extratoMateriais.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

describe('CENÁRIO > Extrato de Materiais | Consulta de extrato de materiais após expedição Externa X Interna - ', { tags: '@extratoMateriais' }, () => {
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

    Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
    ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemColheita)
  })

  it('Validar extrato de materiais da UA de ORIGEM após expedição para UA de DESTINO', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1/expedicoes', bodyExpedicao, 'login_cenarios')
    ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemColheitaAposExpedicao)
    ExtratoMateriais.validarExtratoMateriais(seedTest.UaOrigemExpedicao)
  })
})
