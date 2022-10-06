/// <reference types="cypress" />

import locatorsOperacoes from "../../../../locators/funcionalidades/financeiro/cadastro/operacoes"

class Operacoes {
  /**
    * Valida a listagem de operacoes, de acordo com filtro selecionado
    * @param {*} seedTestOperacoes 
  */
  validarListagem(seedTestOperacoes) {
    const url = '/financeiro/operacao'
    const locatorTituloPagina = locatorsOperacoes.listagem.titulo
    const tituloPagina = 'Operações'

    // Navegar para Operações
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    Operacoes.filtrar(seedTestOperacoes)

    const tabelaOperacoes = seedTestOperacoes.operacoes
    tabelaOperacoes.forEach((operacao) => {
      cy.get(locatorsOperacoes.listagem.operacao).should('have.length', tabelaOperacoes.length)
      cy.get(locatorsOperacoes.listagem.codigoOperacao)
        .contains(operacao.codigo)
        .parents(locatorsOperacoes.listagem.operacao).within(() => {
          cy.log('Validar o nome da Operação')
          cy.get(locatorsOperacoes.listagem.nomeOperacao).should(($el) => {
            expect($el).to.contain.text(operacao.nome)
          })

          cy.log('Validar o tipo da Operação')
          cy.get(locatorsOperacoes.listagem.tipoOperacao).should(($el) => {
            expect($el).to.contain.text(operacao.tipoOperacao)
          })

          cy.log('Validar a finalidade da Operação')
          cy.get(locatorsOperacoes.listagem.finalidadeOperacao).should(($el) => {
            expect($el).to.contain.text(operacao.finalidadeOperacao)
          })

          cy.log('Validar o tipo da movimentacao financeira da Operação')
          cy.get(locatorsOperacoes.listagem.movimentacaoOperacao).should(($el) => {
            expect($el).to.contain.text(operacao.movimentacaoFinanceira)
          })
        })
    })
  }

  /**
    * Realiza busca de operações utilizando a filtragem
    * @param {*} seedTestOperacoes 
  */
  static filtrar(seedTestOperacoes) {
    cy.log('Abrir filtros')
    cy.getVisible(locatorsOperacoes.listagem.buttonAbrirFiltros).click()

    if (seedTestOperacoes.tipoFiltro === 'pesquisa') {
      cy.getVisible(locatorsOperacoes.listagem.tipoOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.getVisible(locatorsOperacoes.listagem.finalidadeOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.getVisible(locatorsOperacoes.listagem.movimentaFinanceiroSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.getVisible(locatorsOperacoes.listagem.statusSelecionado).should(($el) => {
        expect($el).to.contain.text('Ativo')
      })

      cy.get(locatorsOperacoes.listagem.inputPesquisar).type(seedTestOperacoes.filtro)
    }
    else if (seedTestOperacoes.tipoFiltro === 'tipoDaOperacao') {
      cy.getVisible(locatorsOperacoes.listagem.selectTipoOperacao).click()
        .contains(seedTestOperacoes.filtro).click()

      cy.getVisible(locatorsOperacoes.listagem.finalidadeOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.getVisible(locatorsOperacoes.listagem.movimentaFinanceiroSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.getVisible(locatorsOperacoes.listagem.statusSelecionado).should(($el) => {
        expect($el).to.contain.text('Ativo')
      })
    }
    else if (seedTestOperacoes.tipoFiltro === 'finalidadeDaOperacao') {
      cy.getVisible(locatorsOperacoes.listagem.tipoOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.getVisible(locatorsOperacoes.listagem.selectFinalidadeOperacao).click()
        .contains(seedTestOperacoes.filtro).click()

      cy.getVisible(locatorsOperacoes.listagem.movimentaFinanceiroSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.getVisible(locatorsOperacoes.listagem.statusSelecionado).should(($el) => {
        expect($el).to.contain.text('Ativo')
      })
    }
    else {
      cy.log('Não foi encontrado nenhum filtro para ser aplicado!')
    }
  }
}

export default new Operacoes()
