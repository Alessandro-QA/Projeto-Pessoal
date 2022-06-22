/// <reference types="cypress" />

import utils from '../../../../../support/utils/utils'
import seedTestDashboardColheita from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-colheita.json'
import seedTestCadastro from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-producao.json'
// import seedTestDashboarContrato from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-contrato.json'
import contratoJson from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/contratos.json'
import colheita from '../../../../../support/commands/funcionalidades/producao/colheita'
import dashboardProducao from '../../../../../support/commands/funcionalidades/producao/dashboardProducao'
// import contrato from '../../../../../support/commands/funcionalidades/producao/contratos'

describe('Producao - Cadastro de colheita externa, com partilha e quantidade inferiror - ', { tags: '@cenarios' }, () => {
  var dataAtual = utils.getDate()
  var bodyContrato1 = utils.replacer('dataSubstituicao', dataAtual, contratoJson.contrato1)
  var bodyContrato2 = utils.replacer('dataSubstituicao', dataAtual, contratoJson.contrato2)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    cy.login(credenciais)
  })

  before(function () {
    utils.setAccessTokenFromLocalStorage()
  })

  after(() => {
    cy.logout()
  })

  it('Cadastrar contratos via API', function () {
    cy.allure().severity('normal').startStep('test content')

    utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato1, 'login_cenarios')
    utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato2, 'login_cenarios')
  })

  it('Cadastrar colheita', function () {
    cy.allure().severity('critical').startStep('test content')
      .description(markdown)

    colheita.cadastrarEditar(seedTestCadastro)
  })

  it('Validar dashboard colheita', function () {
    cy.allure().severity('normal').startStep('test content')

    colheita.validarDashboard(seedTestDashboardColheita)
  })

  it('Validar dashboar Produção', function () {
    cy.allure().severity('normal').startStep('test content')

    dashboardProducao.validarDashboard(seedTestDashboardProducao)
  })

  // TODO: aguardando resolução do bug https://dev.azure.com/conexalabs/ProjetoX/_workitems/edit/36869
  // it('Validar dashboard Contrato', function () {
  //   cy.allure().severity('normal').startStep('test content')

  //   contrato.validarDashboard(seedTestDashboarContrato)
  // })

  const markdown = `
  ---
  ### Funcionalidade: Cadastro de colheita
  >**COMO** gestor da Fazenda
   **QUERO** cadastrar os Registros de Colheita
   **PARA** gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo

  ### Cenário: Cadastrar colheita externa, com partilha (Quantidade Inferior)
  >**DADO** que eu queira incluir um registro de colheita
   **QUANDO** eu preencher os campos obrigatórios, com quantidade de carga sendo menor que a quantidade especificada nos contratos
   **E** selecionar destino Externo
   **E** selecionar dois ou mais contratos
   **E** clicar no botão salvar
   **ENTÃO** o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção
  
  ---
  `
})
