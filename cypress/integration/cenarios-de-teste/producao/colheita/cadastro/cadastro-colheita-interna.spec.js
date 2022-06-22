/// <reference types="cypress" />

import seedTestDashboardColheita from '../../../../../fixtures/cenarios-de-teste/producao/colheita/interna/dashboard-colheita.json'
import seedTestCadastro from '../../../../../fixtures/cenarios-de-teste/producao/colheita/interna/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../../fixtures/cenarios-de-teste/producao/colheita/interna/dashboard-producao.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import DashboardProducao from '../../../../../support/commands/funcionalidades/producao/dashboardProducao.js'

describe('FUNCIONALIDADE > Colheitas | Cadastro de colheita interna - ', { tags: '@colheita' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  it('Cadastrar colheita interna', function () {
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

  ### Cenário: Cadastrar colheita interna
  >**DADO** que eu queira incluir um registro de colheita
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar destino "Interno"
   **E** clicar no botão salvar
   **ENTÃO** o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção
  
  ---
  `
})
