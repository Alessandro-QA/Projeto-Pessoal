/// <reference types="cypress" />

import locMovimentacaoBancaria from '../../../../locators/funcionalidades/financeiro/movimentacoes-bancarias/locators-movimentacao-bancaria'

class MovimentacaoBancaria {

  /**
   * Metodo para realizar um pagamento ou recebimento
   * @param {*} seedTestMovimentacaoBancaria 
   */
  adicionarPagamentoRecebimento(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/ListFilter?**').as('contaBancaria')
    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Listagem').as('listaMovimentacoes')
    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Pagamento/Recebimento').as('movimentacao')

    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Espera necessária para carrecar os componentes da tela
    cy.wait('@contaBancaria', { timeout: 10000 })

    // Abrir opções de movimentação
    cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.dropdownMovimentacoes).click()

    if (seedTestMovimentacaoBancaria.pagamento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.pagamento).click()

      // Adicionar movimentação do tipo pagamento
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.titulo).should(($el) => {
        expect($el).to.contain.text('Adicionar pagamento')
      })
    }
    else if (seedTestMovimentacaoBancaria.recebimento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.recebimento).click()

      // Adicionar movimentação do tipo recebimento
      cy.get(locMovimentacaoBancaria.movimentacoes.titulo).should(($el) => {
        expect($el).to.contain.text('Adicionar recebimento')
      })
    }
    else {
      cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.transferencia).click()

      // Adicionar movimentação do tipo transferência
      cy.get(locMovimentacaoBancaria.movimentacoes.titulo).should(($el) => {
        expect($el).to.contain.text('Adicionar transferência')
      })
    }

    // Selecionar empresa
    cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectEmpresa).click()
      .contains(seedTestMovimentacaoBancaria.empresa).click()

    cy.wait('@contaBancaria', { timeout: 10000 })

    // Inserir data da movimentação
    if (seedTestMovimentacaoBancaria.data) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.data).click()
        .clear().type(`${seedTestMovimentacaoBancaria.data}{enter}`)
    }

    // Inserir hora da transferência
    if (seedTestMovimentacaoBancaria.hora) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.horaTransferencia).click()
        .clear().type(`${seedTestMovimentacaoBancaria.hora}{enter}`)
    }

    // Selecionar conta bancaria da movimentação tipo pagamento/recebimento
    if (seedTestMovimentacaoBancaria.contaBancaria) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectContaBancaria).click()
        .contains(seedTestMovimentacaoBancaria.contaBancaria).click()
    }

    else {

      // Selecioanr conta bancaria de origem na movimentação do tipo transferência
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectContaOrigem).click()
        .contains(seedTestMovimentacaoBancaria.contaOrigem).click()

      // Selecioanr conta bancaria de destino na movimentação do tipo transferência
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectContaDestino).click()
        .contains(seedTestMovimentacaoBancaria.contaDestino).click()
    }

    // Selecionar empresa destino na movimentação do tipo transferência
    if (seedTestMovimentacaoBancaria.empresaDestino) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectDestino).click()
        .contains(seedTestMovimentacaoBancaria.empresaDestino).click()
    }

    // Inserir o valor da movimentação
    cy.getVisible(locMovimentacaoBancaria.movimentacoes.inputValor)
      .type(`{movetoend}${seedTestMovimentacaoBancaria.valorMovimentacao}{enter}`)
    
    // Inserir observação
    if (seedTestMovimentacaoBancaria.observacao) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.inputObservacao)
        .type(`${seedTestMovimentacaoBancaria.observacao}`)
    }

    // Selecionar categoria
    if (seedTestMovimentacaoBancaria.categorias) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectCategoria).click()
        .contains(seedTestMovimentacaoBancaria.categorias).click()
    }

    // Botão para adicionar movimentação do tipo transferência
    if (seedTestMovimentacaoBancaria.transferencia) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.adicionarTransferencia).click()
    }

    // Botão para adicionar movimentação do tipo pagamento
    if (seedTestMovimentacaoBancaria.pagamento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.adicionarPagamento).click({ force: true })
    }

    // Botão para adicionar movimentação do tipo recebimento
    if (seedTestMovimentacaoBancaria.recebimento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.adicionarRecebimento).click()
    }

    cy.wait('@listaMovimentacoes', { timeout: 10000 })

    cy.wait(2000)
  }

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

    if (seedTestMovimentacaoBancaria.categorias) {
      // Pesquisar Movimentação
      cy.getVisible(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
        .clear().type(`${seedTestMovimentacaoBancaria.categorias}{enter}`)
    }

    // inserir a data de inicio e fim do filtro de período
    if (seedTestMovimentacaoBancaria.filtroDataInicio) {
      // abrir filtros
      cy.getVisible(locMovimentacaoBancaria.dashboard.abrirFiltro).click()

      // inserir data de inicio
      cy.getVisible(locMovimentacaoBancaria.dashboard.filtroDataInicio).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataInicio}{enter}`)

      // inserir data fim
      cy.getVisible(locMovimentacaoBancaria.dashboard.filtroDataFim).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataFim}{enter}`)
    }

    // Espera necessária para carregar as movimentações pesquisadas
    cy.wait('@listaMovimentacoes', { timeout: 10000 })

    if (seedTestMovimentacaoBancaria.cardMovimentacao) {
      // Validar dados da movimentacao bancaria
      const movimentacao = seedTestMovimentacaoBancaria.cardMovimentacao
      movimentacao.forEach((movimentacao, index) => {
        cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoTipo).eq(index).should(($el) => {
          expect($el).to.contain.text(movimentacao.tipo)
        })
        if (movimentacao.categorias) {
          cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria).eq(index).should(($el) => {
            expect($el).to.contain.text(movimentacao.categorias)
          })
        }
        cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConta).eq(index).should(($el) => {
          expect($el).to.contain.text(movimentacao.conta)
        })
        cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConferido).eq(index).should(($el) => {
          expect($el).to.contain.text(movimentacao.conferido)
        })
        cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoValor).should(($el) => {
          expect($el).to.contain.text(movimentacao.valor)
        })
      })
    }

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
