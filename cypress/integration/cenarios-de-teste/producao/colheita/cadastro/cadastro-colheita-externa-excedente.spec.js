/// <reference types="cypress" />

/*
* Funcionalidade:
*   Cadastro de colheita externa com partilha (Quantidade Excedente)
* Cenario:
*   Dado a inclusão de um Registro de Colheita
*   Quando eu preencher todos os campos obrigatórios, com o total entregue sendo maior que a quantidade especificada nos contratos
*   e selecionar destino "Externo"
*   e selecionar dois ou mais contratos
*   e clicar no botão salvar
*   e clicar em sim no modal
*   Então o registro de colheita será gravado, exibido e validado na dashboard de colheitas, de produção e de contratos
*/

import Utils from '../../../../../support/utils/utils.js'
// import Contrato from '../../../../../support/commands/funcionalidades/producao/contratos.js'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import DashboardProducao from '../../../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import seedTestDashboardColheita from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/dashboard-colheita.json'
import seedTestCadastro from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/dashboard-producao.json'
// import seedTestDashboardContrato from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/dashboard-contrato.json'
import contrato1 from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/contrato-1.json'
import contrato2 from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/contrato-2.json'

describe('FUNCIONALIDADE > Colheitas | Cadastro de colheita externa com partilha e quantidade excedente - ', { tags: '@colheita' }, () => {
  var dataAtual = Utils.getDate()
  var body = Utils.replacer('dataSubstituicao', dataAtual, contrato1)
  var body2 = Utils.replacer('dataSubstituicao', dataAtual, contrato2)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    cy.login(credenciais)
  })

  before(function () {
    Utils.setAccessTokenFromLocalStorage()
  })

  after(() => {
    cy.logout()
  })

  it('Cadastrar contratos por API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', body, 'login_cenarios')
    Utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', body2, 'login_cenarios')
  })

  it('Cadastrar colheita externa', function () {
    cy.allure().severity('critical').startStep('test content')

    Colheita.cadastrarEditar(seedTestCadastro)
  })

  it('Validar dashboard Colheita', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboardColheita)
  })

  it('Validar dashboard Produção', function () {
    cy.allure().severity('normal').startStep('test content')

    DashboardProducao.validarDashboard(seedTestDashboardProducao)
  })

  // TODO: aguardando resolução do bug https://dev.azure.com/conexalabs/ProjetoX/_workitems/edit/36869
  // it('Validar dashboard Contrato', function () {
  //   cy.allure().severity('normal').startStep('test content')

  //   Contrato.validarDashboard(seedTestDashboardContrato)
  // })
})
