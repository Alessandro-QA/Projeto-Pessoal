/// <reference types="cypress" />

import colheitaJson from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/cadastro-colheita.json'
import seedTestEditar from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/editar.json'
import seedTestDashboard from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/dashboar-colheita.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import Utils from '../../../../../support/utils/utils.js'

describe('FUNCIONALIDADE > Colheitas | Edição de colheita - ', { tags: '@colheita' }, () => {
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

  it('Editar colheita', function () {
    cy.allure().severity('critical').startStep('test content')
      .description(markdown)

    Colheita.cadastrarEditar(seedTestEditar)
  })

  it('Validar listagem de colheita após edição', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboard)
  })

  const markdown = `
  ---
  ### Funcionalidade: Editar colheita
  >**COMO** gestor da fazenda
   **QUERO** poder editar uma colheita
   **PARA** gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo

  ### Cenário: Editar
  >**DADO** que eu queira editar uma colheita
   **QUANDO** eu entrar na dashboard de colheita
   **E** clicar no card de uma das colheitas listadas
   **E** clicar no ícone de edição
   **E** preencher todos os campos obrigatórios
   **E** clicar em atualizar
   **ENTÃO** deverá ser salvo e validado na dashboard de colheita
  
  ---
  `
})
