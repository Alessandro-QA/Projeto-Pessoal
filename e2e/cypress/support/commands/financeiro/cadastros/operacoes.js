/// <reference types="cypress" />

import locatorsOperacoes from "../../../locators//financeiro/cadastro/operacoes.js"

class Operacoes {
  /**
    * Valida a listagem de operacoes, de acordo com filtro selecionado
    * @param {*} seedTestOperacoes 
  */
  validarListagem(seedTestOperacoes) {
    const url = '/financeiro/operacao'
    const locatorTituloPagina = locatorsOperacoes.listagem.titulo
    const tituloPagina = 'Operações'

    cy.intercept('GET', `${Cypress.env('baseUrlDaas')}${Cypress.env('operacao')}/MatrizOperacao/List?situacao=Todas`).as('listOperacao');

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Agenda Financeira')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        cy.wait('@listOperacao')

      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    });

    cy.log('Filtrar Operação')
    Operacoes.filtrar(seedTestOperacoes)


    const tabelaOperacoes = seedTestOperacoes.operacoes
    tabelaOperacoes.forEach((operacao) => {
      cy.get(locatorsOperacoes.listagem.operacao).should('have.length', tabelaOperacoes.length)

      cy.log('Validar Operações trazidas na Listagem')
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

    Operacoes.limparFiltros()

  }

  /**
    * Realiza busca de operações utilizando a filtragem
    * @param {*} seedTestOperacoes 
  */
  static filtrar(seedTestOperacoes) {

    // Verificar se o elemento de filtros existe e está visível
    cy.document().then((doc) => {
      const filtersElement = doc.querySelector('#root-cnx-page-filter-cnx-container-filters-div-cnx-container-filters');

      if (filtersElement && !filtersElement.hidden && filtersElement.offsetHeight > 0) {
        // Elemento de filtros existe e está visível
        cy.log('Os filtros já estão visíveis');
      } else {
        // Elemento de filtros não existe ou não está visível, clicar para abrir os filtros
        cy.log('Abrir filtros porque não estão visíveis');
        cy.get(locatorsOperacoes.listagem.buttonAbrirFiltros).click();
      }
    });

    cy.get(locatorsOperacoes.listagem.inputPesquisar)
      .clear()
    // Limpar filtros antes
    //cy.get('#root-cnx-page-filter-cnx-container-filters-div-cnx-container-filters > .el-button').click()

    if (seedTestOperacoes.tipoFiltro === 'pesquisa') {


      cy.log('Validar tipo de operação selecionada')
      cy.getVisible(locatorsOperacoes.listagem.tipoOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.log('Validar finalidade da operação selecionada')
      cy.getVisible(locatorsOperacoes.listagem.finalidadeOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.log('Validar Movimenta Financeiro selecionado')
      cy.getVisible(locatorsOperacoes.listagem.movimentaFinanceiroSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.log('Validar status selecionado')
      cy.getVisible(locatorsOperacoes.listagem.statusSelecionado).should(($el) => {
        expect($el).to.contain.text('Ativo')
      })

      cy.log('Digitar busca no campo de pesquisa')
      cy.get(locatorsOperacoes.listagem.inputPesquisar)
        .clear().type(seedTestOperacoes.filtro)

      cy.getVisible(locatorsOperacoes.listagem.titulo).click()
    }
    else if (seedTestOperacoes.tipoFiltro === 'tipoDaOperacao') {

      cy.log('Selecionar Tipo da Operação')
      cy.getVisible(locatorsOperacoes.listagem.selectTipoOperacao).click()
        .contains(seedTestOperacoes.filtro).click()

      cy.log('Validar finalidade da operação selecionada')
      cy.getVisible(locatorsOperacoes.listagem.finalidadeOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.log('Validar Movimenta Financeiro selecionado')
      cy.getVisible(locatorsOperacoes.listagem.movimentaFinanceiroSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.log('Validar status selecionado')
      cy.getVisible(locatorsOperacoes.listagem.statusSelecionado).should(($el) => {
        expect($el).to.contain.text('Ativo')
      })
    }
    else if (seedTestOperacoes.tipoFiltro === 'finalidadeDaOperacao') {
      cy.log('Validar tipo de operação selecionada')
      cy.getVisible(locatorsOperacoes.listagem.tipoOperacaoSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.log('Selecionar Finalidade da Operação')
      cy.getVisible(locatorsOperacoes.listagem.selectFinalidadeOperacao).click()
        .contains(seedTestOperacoes.filtro).click()

      cy.log('Validar Movimenta Financeiro selecionado')
      cy.getVisible(locatorsOperacoes.listagem.movimentaFinanceiroSelecionado).should(($el) => {
        expect($el).to.contain.text('Todos')
      })

      cy.log('Validar status selecionado')
      cy.getVisible(locatorsOperacoes.listagem.statusSelecionado).should(($el) => {
        expect($el).to.contain.text('Ativo')
      })
    }
    else {
      cy.log('Não foi encontrado nenhum filtro para ser aplicado!')
    }
  }


  /**
    * Limpa todos os filtros aplicados
  */
  static limparFiltros() {
    // Verificar se o elemento de filtros existe e está visível
    cy.document().then((doc) => {
      const filtersElement = doc.querySelector('#root-cnx-page-filter-cnx-container-filters-div-cnx-container-filters');

      if (filtersElement && !filtersElement.hidden && filtersElement.offsetHeight > 0) {
        // Elemento de filtros existe e está visível
        cy.log('Os filtros já estão visíveis');
      } else {
        // Elemento de filtros não existe ou não está visível, clicar para abrir os filtros
        cy.log('Abrir filtros porque não estão visíveis');
        cy.get(locatorsOperacoes.listagem.buttonAbrirFiltros).click();
      }
    });

    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(locatorsOperacoes.listagem.inputPesquisar).clear();
    
    cy.log('Limpar tipo de operação selecionada');
    cy.get(locatorsOperacoes.listagem.selectTipoOperacao).click()
    cy.get(locatorsOperacoes.listagem.listTipoOperacao).contains(/^\s*Todos\s*$/i).click()

    cy.log('Limpar finalidade da operação selecionada');
    cy.get(locatorsOperacoes.listagem.selectFinalidadeOperacao).click()
    cy.get(locatorsOperacoes.listagem.listFinalidadeOperacao).contains(/^\s*Todos\s*$/i).click()

    cy.log('Limpar Movimenta Financeiro selecionado');
    cy.get(locatorsOperacoes.listagem.selectMovimentaFinanceiro).click();
    cy.get(locatorsOperacoes.listagem.listMovimentaFinanceiro).contains(/^\s*Todos\s*$/i).click()

    cy.log('Limpar status selecionado');
    cy.get(locatorsOperacoes.listagem.selectStatus).click()
    cy.get(locatorsOperacoes.listagem.listStatus).contains(/^\s*Ativo\s*$/i).click()
  }
}

export default new Operacoes()
