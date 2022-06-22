/// <reference types="cypress" />

import seedTestPessoa from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-pessoa.json'
import Pessoa from '.././../../../support/commands/funcionalidades/atividades-agricolas/cadastros/pessoa/pessoa.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Pessoa - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  // Teste para cadastro de uma nova pessoa
  it('Deve cadastrar uma pessoa', function () {
    cy.allure().severity('critical').startStep('test content')
    .description(markdown)

    Pessoa.cadastro(seedTestPessoa)
  })

  // Validação da Dashboard de pessoa
  it('Deve validar a Dashboard de Cadastro de pessoas', function () {
    cy.allure().severity('minor').startStep('test content')

    Pessoa.validarDashboard(seedTestPessoa)
  })

  const markdown = `
  ---
  ### Funcionalidade: Cadastrar pessoa
  >**COMO** gerente responsável da fazenda
   **QUERO** poder cadastrar uma nova pessoa
   **PARA** melhor gestão da minha fazenda

  ### Cenário: Jurídica
  >**DADO** que eu queira cadastrar uma nova pessoa
   **QUANDO** eu entrar na Dashboard de Cadastro de pessoas
   **E** clicar em Adicionar pessoa
   **E** selecionar o tipo de pessoa
   **E** selecionar Pessoa Jurídica
   **E** preencher todos os campos obrigatórios
   **E** clicar em adicionar
   **ENTÃO** será salvo e validado na dashboard de Cadastro de pessoas

   ---
   `
})
