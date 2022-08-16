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

    cy.intercept('POST', '/api/financeiro/v1/ContaBancaria').as('contaBancaria')

    // Navegar para Contas Bancárias
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // botao adicionar conta
    cy.getVisible(locContaBancaria.dashboard.novaConta).click()

    cy.getVisible(locContaBancaria.contaBancaria.titulo).should(($el) => {
      expect($el).to.contain.text('Nova Conta')
    })

    // tipo de conta
    cy.get(locContaBancaria.contaBancaria.tipoConta).click()
      .contains(seedTestContaBancaria.tipoConta).click()

    // nome da conta bancaria
    cy.getVisible(locContaBancaria.contaBancaria.nomeConta).clear()
      .type(seedTestContaBancaria.nomeConta)

    // empresa titular
    cy.get(locContaBancaria.contaBancaria.empresaTitular).click()
      .contains(seedTestContaBancaria.empresaTitular).click()

    // empresas habilitadas
    cy.get(locContaBancaria.contaBancaria.empresasHabilitadas).click()
      .contains(seedTestContaBancaria.empresasHabilitadas).click()

    if (seedTestContaBancaria.dataSaldoInicial) {
      // data do saldo inicial
      cy.getVisible(locContaBancaria.contaBancaria.dataSaldoInicial)
        .type(`${seedTestContaBancaria.dataSaldoInicial}{enter}`)

      // saldo inicial
      cy.getVisible(locContaBancaria.contaBancaria.saldoInicial)
        .type(seedTestContaBancaria.saldoInicial)

      // valida saldo Atual
      cy.getVisible(locContaBancaria.contaBancaria.saldoAtual).should(($el) => {
        expect($el).to.have.value(seedTestContaBancaria.saldoAtual)
      })

      if (seedTestContaBancaria.banco) {
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
      }
    } else {
      // valida saldo Atual
      cy.getVisible(locContaBancaria.contaBancaria.saldoAtual).should(($el) => {
        expect($el).to.have.value(seedTestContaBancaria.saldoAtual)
      })

      // seleciona a bandeira do cartão
      cy.getVisible(locContaBancaria.contaBancaria.selectBandeira).click()
        .find('li').contains(seedTestContaBancaria.bandeira).click()

      // seleciona a Data do fechamento
      cy.getVisible(locContaBancaria.contaBancaria.dataFechamento)
        .type(seedTestContaBancaria.dataFechamento)

      // informar a data de vencimento do cartao
      cy.getVisible(locContaBancaria.contaBancaria.dataVencimento)
        .type(seedTestContaBancaria.dataVencimento)

      // informar o numero do cartão
      cy.getVisible(locContaBancaria.contaBancaria.numeroCartao)
        .type(seedTestContaBancaria.numeroCartao)

      // informar o limite do cartão
      cy.getVisible(locContaBancaria.contaBancaria.limiteCartao)
        .type(seedTestContaBancaria.limiteCartao)

      // selecionar a conta que será vinculada ao cartão
      cy.getVisible(locContaBancaria.contaBancaria.selectContaVinculada).click()
        .find('li').contains(seedTestContaBancaria.contaVinculada).click({ force: true })
    }

    if (seedTestContaBancaria.incluirSaldo) {
      cy.getVisible(locContaBancaria.contaBancaria.incluirSaldo).click()
    }

    // botao adicionar conta
    cy.getVisible(locContaBancaria.contaBancaria.adicionar)
      .click()

    cy.wait('@contaBancaria')

    cy.get(locContaBancaria.contaBancaria.mensagemSucesso).should(($el) => {
      expect($el).exist.and.to.contain.text('Conta salva com sucesso')
    })

    // validar que o btão de adicionar não exista mais
    cy.get(locContaBancaria.contaBancaria.adicionar).should('not.exist')
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

    if (seedTestContaBancaria.numeroCartao) {
      // card conta bancaria
      cy.getVisible(locContaBancaria.dashboard.nomeCartaoCredito).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
      })
    } else {
      // card cartao de credito
      cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
      })
    }
  }
}

export default new ContaBancaria()
