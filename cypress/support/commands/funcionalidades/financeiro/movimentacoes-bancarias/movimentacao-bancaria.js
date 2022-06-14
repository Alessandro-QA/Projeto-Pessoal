/// <reference types="cypress" />

import locMovimentacaoBancaria from '../../../../locators/funcionalidades/financeiro/movimentacoes-bancarias/locators-movimentacao-bancaria'

class MovimentacaoBancaria {
  /**
   * Metodo para validar a Dashboard de Movimentação
   * @param {*} seedTestMovimentacaoBancaria
   */
  validarDashboard(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/ListFilter?**').as('contaBancaria')
    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Listagem').as('listaMovimentacoes')

    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Espera necessária para carrecar os componentes da tela
    cy.wait('@contaBancaria', { timeout: 10000 })

    // Selecionar Empresa
    cy.getVisible(locMovimentacaoBancaria.dashboard.filtroEmpresa).click()
      .contains(seedTestMovimentacaoBancaria.empresa)
      .should('exist').scrollIntoView().click()

    // Pesquisar Movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
      .clear().type(`${seedTestMovimentacaoBancaria.categorias}{enter}`)

    // Espera necessária para carregar as movimentações pesquisadas
    cy.wait('@listaMovimentacoes', { timeout: 10000 })

    // Validar dados da movimentacao bancaria
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoTipo).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.tipo)
    })
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.categorias)
    })
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConta).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.conta)
    })
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConferido).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.conferido)
    })
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoValor).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.valor)
    })

    if (seedTestMovimentacaoBancaria.saldoDoDia) {
      cy.getVisible(locMovimentacaoBancaria.dashboard.saldoDoDia).should(($el) => {
        expect($el).to.contain.text(seedTestMovimentacaoBancaria.saldoDoDia)
      })
    }
  }

  /**
   * Metodo para excluir a movimentação financeira
   * @param {*} seedTestMovimentacaoBancaria
   */
  excluir(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Listagem**').as('listagemMovimentacao')
    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar Empresa
    cy.getVisible(locMovimentacaoBancaria.dashboard.filtroEmpresa).click()
      .get(locMovimentacaoBancaria.dashboard.listaEmpresas)
      .contains(seedTestMovimentacaoBancaria.empresa).click()

    cy.wait('@listagemMovimentacao', { timeout: 20000 })

    // Pesquisar movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
      .type(`${seedTestMovimentacaoBancaria.categorias}{enter}`)

    cy.wait('@listagemMovimentacao', { timeout: 20000 })

    // Abrir detalhes da movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria)
      .contains(seedTestMovimentacaoBancaria.categorias).click()

    // Clicar no botão excluir
    cy.get(locMovimentacaoBancaria.detalhes.botaoExcluirMovimentacao)
      .should('exist').and('be.visible').click()

    // Validar mensagem de confirmação de exclusão
    cy.getVisible(locMovimentacaoBancaria.detalhes.mensagemConfirmacaoExclusao)
      .should('contain', 'Deseja excluir esta movimentação?')

    // Confirmar exclusão
    cy.getVisible(locMovimentacaoBancaria.detalhes.botaoConfirmarExclusao).click()

    // Validar mensagem de sucesso
    cy.getVisible(locMovimentacaoBancaria.detalhes.mensagemSucesso)
      .should('have.text', 'Movimentação excluída com sucesso')

    cy.getVisible(locMovimentacaoBancaria.dashboard.titulo)
      .should('exist')
  }

  /**
   * Metodo para validar a exclusão da movimentação financeira
   * @param {*} seedTestMovimentacaoBancaria
   */
  validarExclusao(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar todas as empresas
    cy.getVisible(locMovimentacaoBancaria.dashboard.filtroEmpresa).click()
      .contains('Selecionar todas').click()

    // Pesquisar movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
      .clear().type(`${seedTestMovimentacaoBancaria.tipo}{enter}`)

    // Validar dados da movimentacao bancaria
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoTipo)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConta)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConferido)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoValor)
      .should('not.exist')

    cy.get(locMovimentacaoBancaria.dashboard.mensagemEmptyState).should(($el) => {
      expect($el).to.contain.text('Você ainda não possui nenhuma movimentação Financeira')
    })
  }
}

export default new MovimentacaoBancaria()
