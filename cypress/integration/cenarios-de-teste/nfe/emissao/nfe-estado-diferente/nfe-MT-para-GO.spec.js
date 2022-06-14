/// <reference types="cypress" />

import seedTestNfe from '../../../../../fixtures/cenarios-de-teste/nfe/emissao/nfe-estado-diferente/nfe-mt-para-go.json'
import Nfe from '../../../../../support/commands/funcionalidades/nfe/nfe.js'

describe('FUNCIONALIDADE > NFe | Emissão de NFe: Emitente MT para Destinatário GO', { tags: '@nfe' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_nfe')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  it('Cadastrar nfe', function () {
    cy.allure().severity('blocker').startStep('test content')
      .tag('nfe').description(markdown)

    Nfe.cadastrar(seedTestNfe)
  })

  it('Validar detalhes da nfe cadastrada', function () {
    cy.allure().severity('critical').startStep('test content')
      .tag('nfe').description(markdown)

    Nfe.validarDetalhes(seedTestNfe)
  })

  const markdown = `
  ---
  ### Funcionalidade: Emissão de NFe
  >**COMO** gerente/responsável financeiro da fazenda
   **QUERO** gerar uma Nota Fiscal
   **PARA** que possa formalizar a entrada ou saída de produtos

  ### Cenário: Emitente MT para Destinatário GO
  >**DADO** que eu realize a emissão de uma NFe
   **QUANDO** o documento for autorizado na Sefaz
   **ENTÃO** deve exibir uma mensagem de sucesso
   **E** o documento deve ser listado na dashboard
   ---
   `
})
