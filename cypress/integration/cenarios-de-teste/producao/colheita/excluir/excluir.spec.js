/// <reference types="cypress" />

import colheitaJson from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/cadastro-colheita.json'
import seedTestDashboard from '../../../../../fixtures/cenarios-de-teste/producao/colheita/excluir-colheita/dashboard-colheita.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import Utils from '../../../../../support/utils/utils.js'

describe('FUNCIONALIDADE > Colheitas | Exclusão de colheita - ', { tags: '@colheita' }, () => {
  var dataAtual = Utils.getDate()
  var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, colheitaJson)

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

  it('Cadastrar colheita por API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
  })

  it('Excluir colheita', function () {
    cy.allure().severity('critical').startStep('test content')
      .description(markdown)

    Colheita.excluir(seedTestDashboard.dashboard)
  })

  it('Validar exclusão na listagem de Colheita', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboard.dashboarAposExclusao)
  })

  const markdown = `
  ---
  ### Funcionalidade: Excluir colheita
  >**COMO** gestor da fazenda
   **QUERO** poder excluir uma colheita
   **PARA** gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo

  ### Cenário: Excluir
  >**DADO** que eu queira excluir uma colheita
   **QUANDO** eu entrar na dashboard de colheita
   **E** clicar no card de uma das colheitas listadas
   **E** clicar no ícone de exclusão
   **E** clicar em Excluir
   **ENTÃO** deverá ser salvo e validado na dashboard de colheita
  
  ---
  `
})
