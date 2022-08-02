/// <reference types="cypress" />

import locAgendaFinanceira from '../../../../locators/funcionalidades/financeiro/agenda-financeira/locators-agenda-financeira'

class AgendaFinanceira {
  /**
   * Pagar titulo pela tela de listagem na agenda financeira
   * @param {*} seedTestAgendaFinanceira
   */
  pagarPelaAgenda(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'

    cy.intercept('POST', '/api/financeiro/v1/Agenda/Recebimento').as('apiRecebimento')
    cy.intercept('POST', '/api/financeiro/v1/Agenda/Listagem').as('listagemAgenda')

    // Navegar para Agenda Financeira
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar Empresa
    cy.getVisible(locAgendaFinanceira.dashboard.filtroEmpresa)
      .contains(seedTestAgendaFinanceira.empresaDocumento).click()

    // Selecionar Fazenda
    cy.getVisible(locAgendaFinanceira.dashboard.filtroFazenda)
      .contains(seedTestAgendaFinanceira.fazendaDocumento).click()

    // Pesquisar por numero do documento
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}{enter}`)

    cy.get(locAgendaFinanceira.dashboard.cardAgenda)
      .contains(seedTestAgendaFinanceira.numeroDocumento)
      .parents(locAgendaFinanceira.dashboard.cardAgenda).within(() => {
        // Realizar pagamento
        cy.getVisible(locAgendaFinanceira.dashboard.buttonReceberOuPagar)
          .should('exist').click()
      })

    // Confirmar pagamento
    cy.getVisible(locAgendaFinanceira.dashboard.buttonConfirmarPagamento)
      .should('exist').click()

    cy.wait('@apiRecebimento')

    cy.get(locAgendaFinanceira.dashboard.mensagemSucessoPagamento).then(($message) => {
      if (seedTestAgendaFinanceira.pagamento) {
        expect($message).exist.and.to.contain.text('Pagamento realizado com sucesso')
      } else {
        expect($message).exist.and.to.contain.text('Recebimento realizado com sucesso')
      }
    })
    cy.wait('@listagemAgenda')
  }

  /**
   * Metodo para pagar documento via tela de detalhes
   * @param {*} seedTestAgendaFinanceira 
   */
  pagarReceberTitulo(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'

    cy.intercept('POST', '/api/financeiro/v1/Agenda/Recebimento').as('apiRecebimento')
    cy.intercept('POST', '/api/financeiro/v1/Agenda/Listagem').as('listagemAgenda')

    // Navegar para Agenda Financeira
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar Empresa
    cy.getVisible(locAgendaFinanceira.dashboard.filtroEmpresa)
      .contains(seedTestAgendaFinanceira.empresa).click()

    // Selecionar Fazenda
    cy.getVisible(locAgendaFinanceira.dashboard.filtroFazenda)
      .contains(seedTestAgendaFinanceira.fazenda).click()

    // Pesquisar por numero do documento
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}{enter}`)

    cy.wait('@listagemAgenda')

    // Selecionar card na agenda financeira
    cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento, { timeout: 10000 })
      .contains(seedTestAgendaFinanceira.numeroDocumento)
      .parent(locAgendaFinanceira.dashboard.cardAgenda)
      .within(($cardAgenda) => {
        // card deve existir e estar visivel
        cy.get($cardAgenda, { timeout: 10000 }).should('exist').and('be.visible')

        // abrir detalhes do titulo
        cy.getVisible($cardAgenda, { timeout: 10000 }).click()
      })

    // clicar no botão para ir a tela de recebimento/pagamento 
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.efetuarPagamento).click({ timeout: 10000 })

    // Selecionar forma de pagamento
    if (seedTestAgendaFinanceira.formaPagamento) {
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.formaPagamento).click()
        .contains(seedTestAgendaFinanceira.formaPagamento).click()

      // Informar a data do pagamento/recebimento
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.dataPagamento)
        .clear().type(`${seedTestAgendaFinanceira.dataPagamento}{enter}`)

      // Selecionar a conta bancaria
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.contaBancaria).click()
        .contains(seedTestAgendaFinanceira.contaBancaria).click()

      // Selecionar tag
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.tags).click()
        .contains(seedTestAgendaFinanceira.tags).click()

      // Infomar uma Observação no pagamento / recebimento
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.observacao)
        .clear().type(`${seedTestAgendaFinanceira.observacao}{enter}`)
    }

    // Informar o valor de pagamento
    if (seedTestAgendaFinanceira.valor) {
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.valor)
        .clear().type(`${seedTestAgendaFinanceira.valor}{enter}`)
    }

    // Botao de recebimento / pagamento
    cy.get(locAgendaFinanceira.pagamentoRecebimento.botaoPagarReceber).click({ force: true })

    cy.get(locAgendaFinanceira.pagamentoRecebimento.mensagemSucessoPagamento).then(($message) => {
      if (seedTestAgendaFinanceira.pagamento) {
        expect($message).exist.and.to.contain.text('pagamento realizado com sucesso')
      } else {
        expect($message).exist.and.to.contain.text('recebimento realizado com sucesso')
      }
    })

    cy.wait('@apiRecebimento')
  }

  /**
   * Validar titulo pela Agenda Financeira
   * @param {*} seedTestAgendaFinanceira
   */
  validarDashboard(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'

    // Navegar para Agenda Financeira
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('POST', '/api/financeiro/v1/Agenda/Listagem').as('listagemAgenda')

    // // Selecionar Empresa
    // cy.getVisible(locAgendaFinanceira.dashboard.filtroEmpresa)
    //   .contains(seedTestAgendaFinanceira.empresaDocumento).click()

    // // Selecionar Fazenda
    // cy.getVisible(locAgendaFinanceira.dashboard.filtroFazenda)
    //   .contains(seedTestAgendaFinanceira.fazendaDocumento).click()

    cy.wait('@listagemAgenda', { timeout: 10000 })

    if (seedTestAgendaFinanceira.status === 'Pagos') {
      cy.getVisible(locAgendaFinanceira.dashboard.buttonFiltros).click()
      cy.get(locAgendaFinanceira.dashboard.checkBoxTipoPagamento)
        .should('exist').and('be.visible')
        .contains(seedTestAgendaFinanceira.status).click()

      cy.wait(3000)
    }

    // Pesquisar por numero do documento
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}{enter}`)

    cy.wait(5000)

    cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento, { timeout: 10000 })
      .contains(seedTestAgendaFinanceira.cardNumeroDocumento)
      .parent(locAgendaFinanceira.dashboard.cardAgenda).within(() => {
        // Validar dados do card de Agenda Financeira
        cy.get(locAgendaFinanceira.dashboard.statusDocumento).should(($el) => {
          expect($el).to.have.text(seedTestAgendaFinanceira.cardStatusDocumento)
        })
        cy.get(locAgendaFinanceira.dashboard.cardNomePessoa).should(($el) => {
          expect($el).to.have.text(seedTestAgendaFinanceira.cardPessoaDocumento)
        })
        cy.get(locAgendaFinanceira.dashboard.cardValor).should(($el) => {
          expect($el).to.have.text(seedTestAgendaFinanceira.cardValorDocumento)
        })
        cy.get(locAgendaFinanceira.dashboard.cardSaldoAPagar).should(($el) => {
          expect($el).to.have.text(seedTestAgendaFinanceira.cardSaldoAPagar)
        })
        cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento).should(($el) => {
          expect($el).to.have.text(seedTestAgendaFinanceira.cardNumeroDocumento)
        })
      })
  }

  /**
   * Validar detalhes na agenda financeira
   * @param {*} seedTestAgendaFinanceira
   */
  validarDetalhes(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'
    // Navegar para Agenda Financeira
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar Empresa
    cy.getVisible(locAgendaFinanceira.dashboard.filtroEmpresa)
      .contains(seedTestAgendaFinanceira.empresaDocumento).click()

    // Selecionar Fazenda
    cy.getVisible(locAgendaFinanceira.dashboard.filtroFazenda)
      .contains(seedTestAgendaFinanceira.fazendaDocumento).click()

    // Pesquisar por numero do documento
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}{enter}`)

    cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento, { timeout: 10000 })
      .contains(seedTestAgendaFinanceira.cardNumeroDocumento)
      .parent(locAgendaFinanceira.dashboard.cardAgenda)
      .within(($cardAgenda) => {
        // card deve existir e estar visivel
        cy.get($cardAgenda, { timeout: 10000 }).should('exist').and('be.visible')

        // abrir detalhes do titulo
        cy.getVisible($cardAgenda, { timeout: 5000 }).click()
      })

    // validar status do titulo
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.statusTitulo).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.statusTitulo)
    })

    // valor do titulo
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.valorTitulo).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.valorTitulo)
    })

    // forma de pagamento
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.formaPagamento).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.formaPagamento)
    })

    // condicao de pagamento
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.condicaoPagamento).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.condicaoPagamento)
    })

    // nome fornecedor
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.fornecedor).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.fornecedor)
    })

    // cnpj fornecedor
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.cnpj).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.cnpj)
    })

    if (seedTestAgendaFinanceira.validarTabelaHistorico) {
      // valor
      cy.get(locAgendaFinanceira.detalhesTitulo.tabelaHistoricoPagamento).should(($tabela) => {
        expect($tabela).to.contain(seedTestAgendaFinanceira.valor)
        expect($tabela).to.contain(seedTestAgendaFinanceira.valorPagamento)
        expect($tabela).to.contain(seedTestAgendaFinanceira.contaBancaria)
        expect($tabela).to.contain(seedTestAgendaFinanceira.tipo)
      })
    }
  }
}

export default new AgendaFinanceira()
