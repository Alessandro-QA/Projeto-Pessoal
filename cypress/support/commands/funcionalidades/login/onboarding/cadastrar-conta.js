/// <reference types="cypress" />

import locCadastroConta from '../../../../locators/funcionalidades/login/onboarding/locators-cadastro-conta'

/* Funcao command que recebe json com os dados da conta e realiza cadastro de conta na aplicacao
* Ainda nao foi feito implementacao de data seed ou de delete dos dados criados no teste
* Sendo assim, foi necessario criar uma funcao para gerar um numero random para
* compor o e-mail a cada execucao do teste.
* A parte comentada abaixo que poderá ser a definitiva
*/

Cypress.Commands.add('cadastrarConta', (dadosConta) => {
  function makeNumber() {
    let result = ''
    let number = '0123456789'
    for (let i = 0; i < 3; i++) {
      result += number.charAt(Math.floor(Math.random() * number.length))
    }
    return result
  }

  cy.get(locCadastroConta.cadastroConta.iptNome)
    .scrollIntoView().should('exist')
    .and('be.visible').type(dadosConta.nome)

  // cy.get(locCadastroConta.cadastroConta.iptEmail).type(this.dadosConta.email)
  const tempEmail = 'conta_teste_qa_' + makeNumber() + '@hubconexa.com'
  cy.get(locCadastroConta.cadastroConta.iptEmail)
    .scrollIntoView().should('exist')
    .and('be.visible').type(tempEmail)

  cy.get(locCadastroConta.cadastroConta.iptTelefone)
    .scrollIntoView().should('exist')
    .and('be.visible').type(dadosConta.telefone)

  cy.get(locCadastroConta.cadastroConta.relacaoAgro)
    .scrollIntoView().should('exist')
    .and('be.visible').select(dadosConta.relacaoAgro)

  cy.get(locCadastroConta.cadastroConta.atividade)
    .scrollIntoView().should('exist')
    .and('be.visible').select(dadosConta.principalAtividade)

  cy.get(locCadastroConta.cadastroConta.qtdeHectares)
    .scrollIntoView().should('exist')
    .and('be.visible').select(dadosConta.quantidadeHectares)

  cy.get(locCadastroConta.cadastroConta.softwareAgro)
    .scrollIntoView().should('exist')
    .and('be.visible').select(dadosConta.SoftwareGestaoAgro)

  cy.get(locCadastroConta.cadastroConta.iptSenha)
    .scrollIntoView().should('exist')
    .and('be.visible').type(dadosConta.senha)

  cy.get(locCadastroConta.cadastroConta.iptConfirmaSenha)
    .scrollIntoView().should('exist')
    .and('be.visible').type(dadosConta.senhaConfirmacao)

  cy.get(locCadastroConta.cadastroConta.termoDeUso)
    .scrollIntoView().should('exist')
    .and('be.visible').click()

  cy.get(locCadastroConta.cadastroConta.btnCriarConta)
    .scrollIntoView().should('exist')
    .and('be.visible').click()

  cy.get(locCadastroConta.cadastroConta.btnCriarConta)
    .should('not.exist')

  return cy.wrap(tempEmail)
})
