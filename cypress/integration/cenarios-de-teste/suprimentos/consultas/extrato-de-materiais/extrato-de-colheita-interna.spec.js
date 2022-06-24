/// <reference types="cypress" />

/*
* Funcionalidade:
*   Consulta de extrato de material após cadastro de Colheita Interna
* Cenario:
*   Dado a inclusão de uma colheita interna para a U.A do tipo silo
*   Quando a colheita for cadastrada
*   Então no extrato de materiais da UA de destino deve conter um lançamento de origem Armazenagem e tipo Entrada com os valores colhidos
*   E no dashboard de produção, na tabela de Entregas e Fixações, deve conter um registro para a UA de destino com os valores colhidos
*/

import Utils from '../../../../../support/utils/utils.js'
import colheita from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-colheita-interna/colheita.json'
import ExtratoMateriais from '../../../../../support/commands/funcionalidades/suprimentos/consultas/extratoMateriais.js'
import seedTest from '../../../../../fixtures/cenarios-de-teste/suprimentos/consultas/extrato-de-materiais/extrato-colheita-interna/extratoMaterial.json'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

describe('CENÁRIO > Extrato de Materiais | Consulta de extrato de material após cadastro de Colheita Interna - ', { tags: '@extratoMateriais' }, () => {
  var dataAtual = Utils.getDate()
  var body = Utils.replacer('dataSubstituicao', dataAtual, colheita)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  it('Cadastrar colheita por API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', body, 'login_cenarios')
  })

  it('Validar colheita no Extrato de Materiais', function () {
    cy.allure().severity('normal').startStep('test content')

    ExtratoMateriais.validarExtratoMateriais(seedTest)
  })
})
