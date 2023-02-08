/// <reference types="cypress" />

import locResultadosSafra from '../../locators/resultados-safra/locators-resultados-safra.js'

class ResultadoSafra {
  /**
   * Valida o Resultado da safra de forma sintetica
   * @param {*} seedTestResultadosSafra
   */
  resultadoSintetico(seedTestResultadosSafra) {
    const url = '/resultados/resultados-de-safra'
    const locatorTituloPagina = locResultadosSafra.dashboard.titulo
    const tituloPagina = 'Resultados da safra'
    var dadosCiclo = seedTestResultadosSafra.cardCiclo
    var dadosHectares = seedTestResultadosSafra.cardHectares
    var dadosValores = seedTestResultadosSafra.cardValores

    cy.intercept('POST', '/api/financeiro/v1/Dashboard/ResultadoSafra').as('listaResultadoSafra')

    // Navegar para Resultados da Safra - Dashboard
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Limpar Fazenda
    cy.get(locResultadosSafra.dashboard.limparFiltroFazenda).click({ force: true })
    // Selecionar Fazenda
    cy.getVisible(locResultadosSafra.dashboard.filtroFazenda).click()
      .contains(seedTestResultadosSafra.fazenda).click()

    // Selecionar Safra
    cy.getVisible(locResultadosSafra.dashboard.filtroSafra).click()
      .contains(seedTestResultadosSafra.safra).click()

    // Marcar checkbox 
    if (seedTestResultadosSafra.exibirInformacoesAgricola) {
      cy.getVisible(locResultadosSafra.dashboard.checkboxInformacoesAtividade).click()
    } else if (seedTestResultadosSafra.mostrarContasPagarReceber) {
      cy.getVisible(locResultadosSafra.dashboard.checkboxContasPagarReceber).click()
    } else {
      cy.getVisible(locResultadosSafra.dashboard.checkboxSaldoColheita).click()
    }

    cy.wait('@listaResultadoSafra')

    // Validar card de safra por ciclo
    if (seedTestResultadosSafra.cardCiclo) {
      dadosCiclo.forEach((dadoCiclo) => {
        // nome da safra
        cy.get(locResultadosSafra.dashboard.cardCiclo).should(($el) => {
          expect($el).to.contain.text(dadoCiclo.nomeSafra)
        })

        // receita
        cy.get(locResultadosSafra.dashboard.cardCiclo)
          .contains(dadoCiclo.nomeSafra).parents('.column')
          .contains('Receita').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoCiclo.receita)
          })

        // despesa
        cy.get(locResultadosSafra.dashboard.cardCiclo)
          .contains(dadoCiclo.nomeSafra).parents('.column')
          .contains('Despesa').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoCiclo.despesa)
          })

        // margem
        cy.get(locResultadosSafra.dashboard.cardCiclo)
          .contains(dadoCiclo.nomeSafra).parents('.column')
          .contains('Margem').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoCiclo.margem)
          })
      })
    }

    // Validar card de safra por hectares
    if (seedTestResultadosSafra.cardHectares) {
      dadosHectares.forEach((dadoHectare, index) => {
        // nome da safra
        cy.get(locResultadosSafra.dashboard.cardHectares).should(($el) => {
          expect($el).to.contain.text(dadoHectare.nomeSafra)
        })

        // receita
        cy.get(locResultadosSafra.dashboard.cardHectares)
          .contains(dadosCiclo[index].nomeSafra).parents('.column')
          .contains('Receita').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoHectare.receita)
          })

        // despesa
        cy.get(locResultadosSafra.dashboard.cardHectares)
          .contains(dadosCiclo[index].nomeSafra).parents('.column')
          .contains('Despesa').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoHectare.despesa)
          })

        // margem
        cy.get(locResultadosSafra.dashboard.cardHectares)
          .contains(dadosCiclo[index].nomeSafra).parents('.column')
          .contains('Margem').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoHectare.margem)
          })
      })
    }

    // Validar card de safra por valores
    if (seedTestResultadosSafra.cardValores) {
      dadosValores.forEach((dadoValor, index) => {
        // nome da safra
        cy.get(locResultadosSafra.dashboard.cardValores).should(($el) => {
          expect($el).to.contain.text(dadoValor.nomeSafra)
        })

        // receita
        cy.get(locResultadosSafra.dashboard.cardValores)
          .contains(dadosCiclo[index].nomeSafra).parents('.column')
          .contains('Receita').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoValor.receita)
          })

        // despesa
        cy.get(locResultadosSafra.dashboard.cardValores)
          .contains(dadosCiclo[index].nomeSafra).parents('.column')
          .contains('Despesa').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoValor.despesa)
          })

        // margem
        cy.get(locResultadosSafra.dashboard.cardValores)
          .contains(dadosCiclo[index].nomeSafra).parents('.column')
          .contains('Margem').parents('.percentuais').should(($el) => {
            expect($el).to.contain.text(dadoValor.margem)
          })
      })
    }

    // Validar card visao geral
    if (seedTestResultadosSafra.cardVisaoGeral) {
      cy.get('[data-cy=dashboard-card-visao-geral] .value').should(($card) => {
        expect($card[0]).to.have.text(seedTestResultadosSafra.cardVisaoGeral.despesas)
        expect($card[1]).to.have.text(seedTestResultadosSafra.cardVisaoGeral.receitas)
        expect($card[2]).to.have.text(seedTestResultadosSafra.cardVisaoGeral.resultado)
      })
    }

    // Validar card margem lucro
    if (seedTestResultadosSafra.cardMargemLucro) {
      cy.get(locResultadosSafra.dashboard.cardMargemLucro).should(($card) => {
        expect($card).to.contain.text(seedTestResultadosSafra.cardMargemLucro.margemLucro)
      })
    }

    // Validar se nao for encontrado nenhum resultado
    if (seedTestResultadosSafra.mensagemEmpty) {
      cy.getVisible(locResultadosSafra.dashboard.mensagemEmpty)
        .should('contain', seedTestResultadosSafra.mensagemEmpty)
    }
  }

  /**
   * Valida o Resultado da safra de forma analitica
   * @param {*} seedTestResultadosSafra
   */
  resultadoAnalitico(seedTestResultadosSafra) {
    const url = '/resultados/resultados-de-safra/visao-analitica'
    const locatorTituloPagina = locResultadosSafra.analitica.titulo
    const tituloPagina = 'Resultados analíticos da safra'

    cy.intercept('POST', '/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas').as('resultadoAnalitico')
    cy.intercept('POST', '/api/financeiro/v1/Dashboard/DetalhesResultadoAnaliticoSafra').as('detalhesResultadoAnaliticoSafra')

    // Navegar para Resultados da Safra - Analitica
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Limpar Fazenda
    cy.get(locResultadosSafra.analitica.limparFiltroFazenda).click({ force: true })
    // Selecionar Fazenda
    cy.getVisible(locResultadosSafra.analitica.filtroFazenda).click()
      .contains(seedTestResultadosSafra.fazenda).click()

    // Selecionar Safra
    cy.getVisible(locResultadosSafra.analitica.filtroSafra).click()
      .contains(seedTestResultadosSafra.safra).click()

    // Marcar checkBox
    if (seedTestResultadosSafra.exibirInformacoesAgricola) {
      cy.getVisible(locResultadosSafra.analitica.checkboxInformacoesAtividade).click()
    } else if (seedTestResultadosSafra.mostrarContasPagarReceber) {
      cy.getVisible(locResultadosSafra.analitica.checkboxContasPagarReceber).click()
    } else {
      cy.getVisible(locResultadosSafra.analitica.checkboxSaldoColheita).click()
    }

    cy.wait('@resultadoAnalitico')

    // Validar card Margem de Lucro
    if (seedTestResultadosSafra.margemLucro) {
      cy.getVisible(locResultadosSafra.analitica.cardMargemLucro).should(($el) => {
        expect($el).to.contain.text(seedTestResultadosSafra.margemLucro)
      })
    }

    // Validar card Valores
    if (seedTestResultadosSafra.valores) {
      cy.getVisible(locResultadosSafra.analitica.cardValores).should(($el) => {
        expect($el).to.contain.text(seedTestResultadosSafra.valores)
      })
    }

    // Validar card Total Ha da safra
    if (seedTestResultadosSafra.totalSafra) {
      cy.getVisible(locResultadosSafra.analitica.cardTotalHaSafra).should(($el) => {
        expect($el).to.contain.text(seedTestResultadosSafra.totalSafra)
      })
    }

    // Validar Total em Despesas
    if (seedTestResultadosSafra.totalDespesas) {
      cy.getVisible(locResultadosSafra.analitica.valorTotalDespesas)
        .should('contain', seedTestResultadosSafra.totalDespesas)
    }

    // Validar card de Despesas
    if (seedTestResultadosSafra.cardDespesas) {
      var dadosCardDespesas = seedTestResultadosSafra.cardDespesas

      dadosCardDespesas.forEach((dadoDespesa) => {
        // categoria
        cy.get(locResultadosSafra.analitica.nomeCategoria).should(($el) => {
          expect($el).to.contain.text(dadoDespesa.nomeCategoria)
        })

        // acumulado da safra
        cy.get(locResultadosSafra.analitica.acumuladoSafra).should(($el) => {
          expect($el).to.contain.text(dadoDespesa.acumuladoSafra)
        })

        // percentual sobre o custo total
        cy.get(locResultadosSafra.analitica.percentualCustoTotal).should(($el) => {
          expect($el).to.contain.text(dadoDespesa.percentualCustoTotal)
        })
      })
    }

    // Validar tabela de detalhes das despesas
    if (seedTestResultadosSafra.tabelaDespesas) {
      var dadosTabelaDespesas = seedTestResultadosSafra.tabelaDespesas

      // Expandir collaps/tabela
      cy.get(locResultadosSafra.analitica.buttonDropdownCard).click().then(($button) => {
        cy.get(locResultadosSafra.analitica.iconDropdownCard).invoke('attr', 'class').then(($iconClass) => {
          $iconClass === 'siagri-icon-arrow-up' ? cy.log('Collapse aberto!') : cy.get($button).click()
        })
      })

      cy.wait('@detalhesResultadoAnaliticoSafra')

      dadosTabelaDespesas.forEach((linhaTabela) => {
        // valor
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas).should(($el) => {
          expect($el).to.contain.text(linhaTabela.valor)
        })

        // pessoa
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas).should(($el) => {
          expect($el).to.contain.text(linhaTabela.pessoa)
        })

        // documento
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas).should(($el) => {
          expect($el).to.contain.text(linhaTabela.documento)
        })

        // origem
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas).should(($el) => {
          expect($el).to.contain.text(linhaTabela.origem)
        })
      })
    }

    // Validar se nao for encontrado nenhum resultado
    if (seedTestResultadosSafra.mensagemEmpty) {
      cy.getVisible(locResultadosSafra.analitica.mensagemEmpty)
        .should('contain', seedTestResultadosSafra.mensagemEmpty)
    }
  }
}

export default new ResultadoSafra()
