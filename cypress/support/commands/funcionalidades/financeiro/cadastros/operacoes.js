/// <reference types="cypress" />

import locatorsOperacoes from "../../../../locators/funcionalidades/financeiro/cadastro/operacoes"

class Operacoes {
  /**
   * Validar listagem de operacoes
   * @param {*} seedTestOperacoes 
   */
  listagem(seedTestOperacoes) {
    const url = '/financeiro/operacao'
    const locatorTituloPagina = locatorsOperacoes.listagem.titulo
    const tituloPagina = 'Operações'

    // Navegar para Contas Bancárias
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    if (seedTestOperacoes.cadastrar) {
      Operacoes.cadastrarEditar(seedTestOperacoes.cadastrar)
    }

    if (seedTestOperacoes.filtros) {
      cy.log('Abrir filtros')
      cy.getVisible(locatorsOperacoes.listagem.buttonAbrirFiltros).click()

      if (seedTestOperacoes.tipoOperacao) {
        cy.log('Selecionar o tipo de operação no filtro')
        cy.getVisible(locatorsOperacoes.listagem.selectTipoOperacao).click()
          .contains(seedTestOperacoes.tipoOperacao).click()
      } else if (seedTestOperacoes.tipoFinalidade) {
        cy.log('Selecionar o tipo de finalidade no filtro')
        cy.getVisible(locatorsOperacoes.listagem.selectFinalidadeOperacao).click()
          .contains(seedTestOperacoes.tipoFinalidade).click()
      } else if (seedTestOperacoes.tipoMovimentacao) {
        cy.log('Selecionar o tipo de movimentação bancaria no filtro')
        cy.getVisible(locatorTituloPagina.listagem.selectMovimentacaoFinanceira).click()
          .contains(seedTestOperacoes.tipoMovimentacao).click()
      } else {
        cy.log('Selecionar o tipo de status no filttro')
        cy.getVisible(locatorTituloPagina.listagem.selectStatus).click()
          .contains(seedTestOperacoes.selectStatus).click()
      }
    } else {
      cy.getVisible(locatorsOperacoes.listagem.inputPesquisar)
        .type(seedTestOperacoes.operacao)
    }

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
            expect($el).to.have.text(operacao.tipoOperacao)
          })

          cy.log('Validar a finalidade da Operação')
          cy.get(locatorsOperacoes.listagem.finalidadeOperacao).should(($el) => {
            expect($el).to.contain.text(operacao.finalidadeOperacao)
          })

          cy.log('Validar o tipo da movimentacao financeira da Operação')
          cy.get(locatorsOperacoes.listagem.movimentacaoOperacao).should(($el) => {
            expect($el).to.contain.text(operacao.movimentacaoFinanceira)
          })

          if (seedTestOperacoes.editar) {
            cy.get(locatorsOperacoes.listagem.buttonEditar).click()

            cy.wait(4000)

            Operacoes.cadastrarEditar(seedTestOperacoes.editar)
          }
        })
    })
  }

  /**
   * Realizar o cadastro/editar da operacao
   * @param {*} seedTestOperacoes 
   */
  static cadastrarEditar(seedTestOperacoes) {
    const tituloCadastro = 'Nova Operação'
    const tituloEditar = 'Editar Operação'

    if (seedTestOperacoes.cadastrar) {
      cy.getVisible(locatorsOperacoes.listagem.buttonAdicionar).click()

      cy.getVisible(locatorsOperacoes.cadastroEditar.titulo).should(($el) => {
        expect($el).to.contain.text(tituloCadastro)
      })
    } else {
      cy.getVisible(locatorsOperacoes.cadastroEditar.titulo).should(($el) => {
        expect($el).to.contain.text(tituloEditar)
      })
    }
  }
}

export default new Operacoes()
