/// <reference types="cypress" />

import Utils from '../../../../../support/utils/utils.js'
import seedTestDashboardColheita from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/dashboard-colheita.json'
import seedTestCadastro from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/dashboard-producao.json'
import contrato1 from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/contrato.json'
import contrato2 from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/contrato2.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import DashboardProducao from '../../../../../support/commands/funcionalidades/producao/dashboardProducao.js'

describe('FUNCIONALIDADE > Colheitas | Cadastro de colheita externa com partilha - ', { tags: '@colheita' }, () => {
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

  ### Cenário: Cadastrar colheita externa, com contrato e com partilha
  >**DADO** que eu queira incluir um registro de colheita
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar destino "Externo"
   **E** selecionar dois ou mais contratos
   **E** clicar no botão salvar
   **ENTÃO** o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção
  
  ---
  `
})
