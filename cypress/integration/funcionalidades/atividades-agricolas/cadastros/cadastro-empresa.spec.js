/// <reference types="cypress" />

import seedTestEmpresa from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-empresa.json'
import Empresa from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/empresa/empresa.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Empresa - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  // Teste de cadastro de uma nova empresa
  it('Deve cadastrar uma empresa', function () {
    cy.allure().severity('critical').startStep('test content')
    .description(markdown)

    Empresa.cadastro(seedTestEmpresa)
  })

  // Validação da Dashboard de empresa
  it('Deve validar a Dashboard de empresa', function () {
    cy.allure().severity('minor').startStep('test content')

    Empresa.validarDashboard(seedTestEmpresa)
  })

  const markdown = `
  ---
  ### Funcionalidade: Cadastrar Empresa
  >**COMO** gerente da fazenda
   **QUERO** poder cadastrar empresas
   **PARA** melhor gestão das informações vinculadas a minha fazenda

  ### Cenário: Jurídica
  >**DADO** que eu queira cadastrar uma nova empresa/pessoa
   **QUANDO** eu entrar na Dashboard de Empresas
   **E** clicar em Adicionar empresa
   **E** selecionar Jurídica
   **E** preencher todos os campos obrigatórios
   **E** clicar em Adicionar
   **ENTÃO** será salvo e validado a dashboard de Empresas

   ---
   `
})
