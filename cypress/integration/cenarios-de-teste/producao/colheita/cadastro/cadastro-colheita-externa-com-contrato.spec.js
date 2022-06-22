/// <reference types="cypress" />

import Utils from '../../../../../support/utils/utils.js'
import seedTestDashboardColheita from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-contrato/dashboard-colheita.json'
import seedTestCadastro from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-contrato/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-contrato/dashboard-producao.json'
import contratoJson from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-contrato/contrato.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import DashboardProducao from '../../../../../support/commands/funcionalidades/producao/dashboardProducao.js'

describe('FUNCIONALIDADE > Colheitas | Cadastro de colheita externa, com contrato, sem partilha - ', { tags: '@colheita' }, () => {
  var dataAtual = Utils.getDate()
  var body = Utils.replacer('dataSubstituicao', dataAtual, contratoJson)

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

  it('Cadastrar contrato por API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', body, 'login_cenarios')
  })

  it('Cadastrar colheita externa, com contrato, sem partilha', function () {
    cy.allure().severity('critical').startStep('test content')
    .description(markdown)

    Colheita.cadastrarEditar(seedTestCadastro)
  })

  it('Validar dashboard de Colheita', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboardColheita)
  })

  it('Validar dashboard Produção', function () {
    cy.allure().severity('normal').startStep('test content')

    DashboardProducao.validarDashboard(seedTestDashboardProducao)
  })

  const markdown = `
  ---
  ### Funcionalidade: Cadastro de colheita
  >**COMO** gestor da Fazenda
   **QUERO** cadastrar os Registros de Colheita
   **PARA** gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo

  ### Cenário: Cadastrar colheita externa, com contrato, sem partilha
  >**DADO** que eu queira incluir um registro de colheita
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar destino "Externo"
   **E** selecionar um contrato
   **E** clicar no botão salvar
   **ENTÃO** o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção
  
  ---
  `
})
