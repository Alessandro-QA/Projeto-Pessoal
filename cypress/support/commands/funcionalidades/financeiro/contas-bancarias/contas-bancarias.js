/// <reference types="cypress" />

import locContaBancaria from '../../../../locators/funcionalidades/financeiro/contas-bancarias/locators-cadastro-conta-bancaria'

class ContaBancaria {
  /**
   * Metodo para o cadastro e edição de uma conta Bancaria
   * @param {*} seedTestContaBancaria
   */
  cadastroEditar(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    // Navegar para Contas Bancárias
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Se for adicionar uma conta nova
    if (seedTestContaBancaria.adicionar) {
      // botao adicionar conta
      cy.getVisible(locContaBancaria.dashboard.novaConta).click()

      cy.getVisible(locContaBancaria.contaBancaria.titulo).should(($el) => {
        expect($el).to.contain.text('Nova Conta')
      })
    }
    // Editar uma conta existente
    else {
      // input pesquisar
      cy.getVisible(locContaBancaria.dashboard.pesquisarConta).clear()
        .type(seedTestContaBancaria.nomeConta)

      // selecionar a conta bancaria listada
      if (seedTestContaBancaria.numeroCartao) {
        // card conta bancaria
        cy.getVisible(locContaBancaria.dashboard.nomeCartaoCredito)
          .contains(seedTestContaBancaria.nomeConta).click()
      } else {
        // card cartao de credito
        cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria)
          .contains(seedTestContaBancaria.nomeConta).click()
      }

      cy.wait('@detalhesConta')

      // validar nome da conta na tela de detalhes
      cy.getVisible(locContaBancaria.detalhesConta.nomeConta).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
      })

      // clicar no botão de editar conta bancaria
      cy.getVisible(locContaBancaria.detalhesConta.buttonEditar).click()

      cy.wait('@detalhesConta')
    }

    if (seedTestContaBancaria.adicionar) {
      // tipo de conta
      cy.get(locContaBancaria.contaBancaria.tipoConta).click()
        .contains(seedTestContaBancaria.tipoConta).click()
    } else {
      // Validar o tipo de conta
      cy.getVisible(locContaBancaria.contaBancaria.tipoConta).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.tipoConta)
      })
    }

    // nome da conta bancaria
    cy.getVisible(locContaBancaria.contaBancaria.nomeConta).clear()
      .type(seedTestContaBancaria.nomeConta)

    if (seedTestContaBancaria.adicionar) {
      // empresa titular
      cy.getVisible(locContaBancaria.contaBancaria.empresaTitular).click()
        .contains(seedTestContaBancaria.empresaTitular).click()
    } else {
      // validar empresa titular da conta bancária
      cy.getVisible(locContaBancaria.contaBancaria.empresaTitular).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.empresaTitular)
      })
    }

    // empresas habilitadas
    cy.getVisible(locContaBancaria.contaBancaria.empresasHabilitadas).click()
      .contains(seedTestContaBancaria.empresasHabilitadas).click()

    if (seedTestContaBancaria.contaPrincipal) {
      cy.getVisible(locContaBancaria.contaBancaria.contaPrincipal).click()
    }

    // Se a conta for do Tipo Conta Corrente/Tesouraria
    if (seedTestContaBancaria.dataSaldoInicial) {
      // data do saldo inicial
      cy.getVisible(locContaBancaria.contaBancaria.dataSaldoInicial).clear()
        .type(`${seedTestContaBancaria.dataSaldoInicial}{enter}`)

      // saldo inicial
      cy.getVisible(locContaBancaria.contaBancaria.saldoInicial).clear()
        .type(seedTestContaBancaria.saldoInicial)

      // valida saldo Atual
      cy.getVisible(locContaBancaria.contaBancaria.saldoAtual).should(($el) => {
        expect($el).to.have.value(seedTestContaBancaria.saldoAtual)
      })

      // Se a conta for do tipo Conta Corrente
      if (seedTestContaBancaria.banco) {
        // banco
        cy.get(locContaBancaria.contaBancaria.banco).click()
          .contains(seedTestContaBancaria.banco).click()

        // agencia
        cy.getVisible(locContaBancaria.contaBancaria.agencia).clear()
          .type(seedTestContaBancaria.agencia)

        // digito da agencia
        cy.getVisible(locContaBancaria.contaBancaria.agenciaDigito).clear()
          .type(seedTestContaBancaria.agenciaDigito)

        // numero da conta
        cy.getVisible(locContaBancaria.contaBancaria.numeroConta).clear()
          .type(seedTestContaBancaria.numeroConta)

        // digito da conta
        cy.getVisible(locContaBancaria.contaBancaria.contaDigito).clear()
          .type(seedTestContaBancaria.contaDigito)
      }
    }
    // Se a conta for do Tipo cartão de crédito
    else {
      // valida saldo Atual
      cy.getVisible(locContaBancaria.contaBancaria.saldoAtual).should(($el) => {
        expect($el).to.have.value(seedTestContaBancaria.saldoAtual)
      })

      if (seedTestContaBancaria.adicionar) {
        // seleciona a bandeira do cartão
        cy.getVisible(locContaBancaria.contaBancaria.selectBandeira).click()
          .find('li').contains(seedTestContaBancaria.bandeira).click()

        // seleciona a Data do fechamento
        cy.getVisible(locContaBancaria.contaBancaria.dataFechamento).clear()
          .type(seedTestContaBancaria.dataFechamento)

        // informar a data de vencimento do cartão
        cy.getVisible(locContaBancaria.contaBancaria.dataVencimento).clear()
          .type(seedTestContaBancaria.dataVencimento)

        // informar o numero do cartão
        cy.getVisible(locContaBancaria.contaBancaria.numeroCartao).clear()
          .type(seedTestContaBancaria.numeroCartao)

        // informar o limite do cartão
        cy.getVisible(locContaBancaria.contaBancaria.limiteCartao).clear()
          .type(seedTestContaBancaria.limiteCartao)

        // selecionar a conta que será vinculada ao cartão
        cy.getVisible(locContaBancaria.contaBancaria.selectContaVinculada).click()
          .find('li').contains(seedTestContaBancaria.contaVinculada).click({ force: true })
      } else {
        // Valida a bandeira do cartão
        cy.getVisible(locContaBancaria.contaBancaria.selectBandeira).should(($el) => {
          expect($el).to.contain.text(seedTestContaBancaria.bandeira)
        })

        // Valida a data de fechamento do cartão
        cy.getVisible(locContaBancaria.contaBancaria.dataFechamento).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.dataFechamento)
        })

        // Valida a data de vencimento do cartão
        cy.getVisible(locContaBancaria.contaBancaria.dataVencimento).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.dataVencimento)
        })

        // Valida o numero do cartão
        cy.getVisible(locContaBancaria.contaBancaria.numeroCartao).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.numeroCartao)
        })

        // Valida o limite do cartão
        cy.getVisible(locContaBancaria.contaBancaria.limiteCartao).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.limiteCartao)
        })

        // Valida a conta vinculada ao cartão
        cy.getVisible(locContaBancaria.contaBancaria.selectContaVinculada).should(($el) => {
          expect($el).to.contain.text(seedTestContaBancaria.contaVinculada)
        })
      }
    }

    // Clica no icone de adicionar o valor do saldo a dashboard financeira
    if (seedTestContaBancaria.incluirSaldo) {
      cy.getVisible(locContaBancaria.contaBancaria.incluirSaldo).click()
    }

    // inativa ou ativa a conta bancaria
    if (seedTestContaBancaria.ativarInativar) {
      cy.getVisible(locContaBancaria.contaBancaria.ativarInativar).click()
    }

    // botão adicionar conta
    cy.getVisible(locContaBancaria.contaBancaria.adicionar)
      .click()

    cy.wait('@detalhesConta')

    // valida mensagem de sucesso
    cy.get(locContaBancaria.contaBancaria.mensagemSucesso).should(($el) => {
      expect($el).exist.and.to.contain.text('Conta salva com sucesso')
    })

    // validar que o botão de adicionar não exista mais
    cy.get(locContaBancaria.contaBancaria.adicionar).should('not.exist')
  }

  /**
   * 
   * @param {*} seedTestContaBancaria 
   */
  excluir(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    // Navegar para Contas Bancárias
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.wait('@detalhesConta')

    // input pesquisar
    cy.getVisible(locContaBancaria.dashboard.pesquisarConta).clear()
      .type(seedTestContaBancaria.nomeConta)

    // selecionar a conta bancaria listada
    if (seedTestContaBancaria.numeroCartao) {
      // card conta bancaria
      cy.getVisible(locContaBancaria.dashboard.nomeCartaoCredito)
        .contains(seedTestContaBancaria.nomeConta).click()
    } else {
      // card cartao de credito
      cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria)
        .contains(seedTestContaBancaria.nomeConta).click()
    }

    cy.wait('@detalhesConta')

    // validar nome da conta na tela de detalhes
    cy.getVisible(locContaBancaria.detalhesConta.nomeConta).should(($el) => {
      expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
    })

    // clicar no botão de excluir conta bancaria
    cy.getVisible(locContaBancaria.detalhesConta.buttonExcluir).click()

    if (seedTestContaBancaria.confirmarExclusao) {
      // Cancelar exclusão
      cy.getVisible(locContaBancaria.detalhesConta.confirmarExclusao).click()
    } else {
      // Confirmar exclusão
      cy.getVisible(locContaBancaria.detalhesConta.confirmarExclusao).click()
    }

    cy.wait('@detalhesConta')

    // valida mensagem de sucesso
    cy.get(locContaBancaria.detalhesConta.mensagemExclusao).should(($el) => {
      expect($el).exist.and.to.contain.text('Exclusão realizada com sucesso')
    })
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

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    cy.wait('@detalhesConta')

    // input pesquisar
    cy.getVisible(locContaBancaria.dashboard.pesquisarConta).clear()
      .type(seedTestContaBancaria.nomeConta)

    if (seedTestContaBancaria.validarContas) {
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
    } else {
      if (seedTestContaBancaria.numeroCartao) {
        // card conta bancaria
        cy.get(locContaBancaria.dashboard.nomeCartaoCredito).should('not.exist')
      } else {
        // card cartao de credito
        cy.get(locContaBancaria.dashboard.nomeContaBancaria).should('not.exist')
      }
    }
  }
}

export default new ContaBancaria()
