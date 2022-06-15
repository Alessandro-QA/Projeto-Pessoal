/// <reference types="cypress" />

import locContaBancaria from '../../../../locators/funcionalidades/financeiro/contas-bancarias/locators-cadastro-conta-bancaria'

class ContaBancaria {
  /**
   * Metodo para o cadastro de uma conta Bancaria
   * @param {*} seedTestContaBancaria
   */
  cadastro(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    // Navegar para Contas Bancárias
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // botao adicionar conta
    cy.getVisible(locContaBancaria.dashboard.novaConta).click()

    // tipo de conta
    cy.get(locContaBancaria.contaBancaria.tipoConta).click()
      .contains(seedTestContaBancaria.tipoConta).click()

    // nome da conta bancaria
    cy.getVisible(locContaBancaria.contaBancaria.nomeConta)
      .type(seedTestContaBancaria.nomeConta)

    // empresa titular
    cy.get(locContaBancaria.contaBancaria.empresaTitular).click()
      .contains(seedTestContaBancaria.empresaTitular).click()

    // empresas habilitadas
    cy.get(locContaBancaria.contaBancaria.empresasHabilitadas).click()
      .contains(seedTestContaBancaria.empresasHabilitadas).click()

    // data do saldo inicial
    cy.getVisible(locContaBancaria.contaBancaria.dataSaldoInicial)
      .type(seedTestContaBancaria.dataSaldoInicial)

    // saldo inicial
    cy.getVisible(locContaBancaria.contaBancaria.saldoInicial)
      .type(seedTestContaBancaria.saldoInicial)

    // banco
    cy.get(locContaBancaria.contaBancaria.banco).click()
      .contains(seedTestContaBancaria.banco).click()

    // agencia
    cy.getVisible(locContaBancaria.contaBancaria.agencia)
      .type(seedTestContaBancaria.agencia)

    // digito da agencia
    cy.getVisible(locContaBancaria.contaBancaria.agenciaDigito)
      .type(seedTestContaBancaria.agenciaDigito)

    // numero da conta
    cy.getVisible(locContaBancaria.contaBancaria.numeroConta)
      .type(seedTestContaBancaria.numeroConta)

    // digito da conta
    cy.getVisible(locContaBancaria.contaBancaria.contaDigito)
      .type(seedTestContaBancaria.contaDigito)

    // botao adicionar conta
    cy.getVisible(locContaBancaria.contaBancaria.adicionar)
      .click()
    cy.get(locContaBancaria.contaBancaria.adicionar).should('not.exist')

    // Validar nome da conta no card na dashboard
    cy.get(locContaBancaria.dashboard.nomeContaBancaria)
      .contains(seedTestContaBancaria.nomeConta)

    // Validar agencia da conta no card na dashboard
    cy.get(locContaBancaria.dashboard.agencia)
      .contains(seedTestContaBancaria.agencia)

    // Validar numero da conta no card na dashboard
    cy.get(locContaBancaria.dashboard.conta)
      .contains(seedTestContaBancaria.numeroConta)

    // Validar empresa da conta no card na dashboard
    cy.get(locContaBancaria.dashboard.empresaTitular)
      .contains(seedTestContaBancaria.empresaTitular)
  }

  /**
   * Validação da Dashboard de Conta Bancaria
   * @param {*} seedTestContaBancaria
   */
  validarDashboard(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    // Navegar para Contas Bancárias
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // input pesquisar
    cy.getVisible(locContaBancaria.dashboard.pesquisarConta)
      .clear()
      .type(seedTestContaBancaria.nomeConta)

    // card conta bancaria
    cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria)
      .and('contain', seedTestContaBancaria.nomeConta)
  }
}

export default new ContaBancaria()
