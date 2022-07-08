/// <reference types="cypress" />

import locResultadosSafra from '../../../locators/funcionalidades/resultados-safra/locators-resultados-safra'

class ResultadoSafra {
  /**
   * Metodo para validar a dashboard da Safra
   * @param {*} seedTestResultadosSafraDashboard
   */
  validarDashboard(seedTestResultadosSafraDashboard) {
    const url = '/resultados/resultados-de-safra'
    const locatorTituloPagina = locResultadosSafra.dashboard.titulo
    const tituloPagina = 'Resultados da safra'
    var dadosCiclo = seedTestResultadosSafraDashboard.cardCiclo
    var dadosHectares = seedTestResultadosSafraDashboard.cardHectares
    var dadosValores = seedTestResultadosSafraDashboard.cardValores

    cy.intercept('POST', '/api/financeiro/v1/Dashboard/ResultadoSafra').as('listaResultadoSafra')
    cy.intercept('GET', '/api/financeiro/v1/Documento/CiclosDocumentos?fazendaIds**').as('ciclosDocumentos')
    cy.intercept('GET', '/api/producao-agricola/v1/Dashboard/PrecoMediaCiclos**').as('precoMediaCiclos')

    // Navegar para Resultados da Safra - Dashboard
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Limpar Fazenda
    cy.get(locResultadosSafra.dashboard.limparFiltroFazenda).click({ force: true })
    // Selecionar Fazenda
    cy.getVisible(locResultadosSafra.dashboard.filtroFazenda).click()
      .contains(seedTestResultadosSafraDashboard.fazenda).click()

    // Selecionar Safra
    cy.getVisible(locResultadosSafra.dashboard.filtroSafra).click()
      .contains(seedTestResultadosSafraDashboard.safra).click()

    // Marcar "Exibir informacoes de atividade agricola"
    if (seedTestResultadosSafraDashboard.exibirInformacoesAgricola) {
      cy.getVisible(locResultadosSafra.dashboard.checkboxInformacoesAtividade).click()
        .wait(['@listaResultadoSafra', '@ciclosDocumentos', '@precoMediaCiclos'], { timeout: 10000 })
    }

    // Marcar "Mostrar contas a pagar e receber"
    if (seedTestResultadosSafraDashboard.mostrarContasPagarReceber) {
      cy.getVisible(locResultadosSafra.dashboard.checkboxContasPagarReceber).click()
        .wait(['@listaResultadoSafra', '@ciclosDocumentos', '@precoMediaCiclos'], { timeout: 10000 })
    }

    // Marcar "Adicionar saldo a fixar de colheitas"
    if (seedTestResultadosSafraDashboard.adicionarSaldoColheitas) {
      cy.getVisible(locResultadosSafra.dashboard.checkboxSaldoColheita).click()
        .wait(['@listaResultadoSafra', '@ciclosDocumentos', '@precoMediaCiclos'], { timeout: 10000 })
    }

    // // Aguardar 5 segundos ate carregar os dados na tela
    // cy.wait('@listaResultadoSafra', { timeout: 10000 })
    // cy.wait('@ciclosDocumentos', { timeout: 10000 })
    // cy.wait('@precoMediaCiclos', { timeout: 10000 })

    // Validar card de safra por ciclo
    if (seedTestResultadosSafraDashboard.cardCiclo) {
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
    if (seedTestResultadosSafraDashboard.cardHectares) {
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
    if (seedTestResultadosSafraDashboard.cardValores) {
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
    if (seedTestResultadosSafraDashboard.cardVisaoGeral) {
      cy.get('[data-cy=dashboard-card-visao-geral] .value').should(($card) => {
        expect($card[0]).to.have.text(seedTestResultadosSafraDashboard.cardVisaoGeral.despesas)
        expect($card[1]).to.have.text(seedTestResultadosSafraDashboard.cardVisaoGeral.receitas)
        expect($card[2]).to.have.text(seedTestResultadosSafraDashboard.cardVisaoGeral.resultado)
      })
    }

    // Validar card margem lucro
    if (seedTestResultadosSafraDashboard.cardMargemLucro) {
      cy.get(locResultadosSafra.dashboard.cardMargemLucro).should(($card) => {
        expect($card).to.contain.text(seedTestResultadosSafraDashboard.cardMargemLucro.margemLucro)
      })
    }

    // Validar se nao for encontrado nenhum resultado
    if (seedTestResultadosSafraDashboard.mensagemEmpty) {
      cy.getVisible(locResultadosSafra.dashboard.mensagemEmpty)
        .should('contain', seedTestResultadosSafraDashboard.mensagemEmpty)
    }
  }

  /**
   * Metodo para validar o Resultado da safra de forma analitica
   * @param {*} seedTestResultadosSafraAnalitica
   */
  resultadoAnalitico(seedTestResultadosSafraAnalitica) {
    const url = '/resultados/resultados-de-safra/visao-analitica'
    const locatorTituloPagina = locResultadosSafra.analitica.titulo
    const tituloPagina = 'Resultados analíticos da safra'

    cy.intercept('POST', 'api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas').as('resultadoAnalitico')

    // Navegar para Resultados da Safra - Analitica
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Limpar Fazenda
    cy.get(locResultadosSafra.analitica.limparFiltroFazenda).click({ force: true })
    // Selecionar Fazenda
    cy.getVisible(locResultadosSafra.analitica.filtroFazenda).click()
      .contains(seedTestResultadosSafraAnalitica.fazenda).click()

    // Selecionar Safra
    cy.getVisible(locResultadosSafra.analitica.filtroSafra).click()
      .contains(seedTestResultadosSafraAnalitica.safra).click()

    // Marcar "Exibir informacoes de atividade agricola"
    if (seedTestResultadosSafraAnalitica.exibirInformacoesAgricola) {
      cy.getVisible(locResultadosSafra.analitica.checkboxInformacoesAtividade).click()
    }

    // Marcar "Mostrar contas a pagar e receber"
    if (seedTestResultadosSafraAnalitica.mostrarContasPagarReceber) {
      cy.getVisible(locResultadosSafra.analitica.checkboxContasPagarReceber).click()
    }

    // Marcar "Adicionar saldo a fixar de colheitas"
    if (seedTestResultadosSafraAnalitica.adicionarSaldoColheitas) {
      cy.getVisible(locResultadosSafra.analitica.checkboxSaldoColheita).click()
    }

    // Aguardar 5 segundos ate carregar os dados na tela
    cy.wait('@resultadoAnalitico', { timeout: 10000 })

    // Validar card Margem de Lucro
    if (seedTestResultadosSafraAnalitica.margemLucro) {
      cy.getVisible(locResultadosSafra.analitica.cardMargemLucro).should(($el) => {
        expect($el).to.contain.text(seedTestResultadosSafraAnalitica.margemLucro)
      })
    }

    // Validar card Valores
    if (seedTestResultadosSafraAnalitica.valores) {
      cy.getVisible(locResultadosSafra.analitica.cardValores).should(($el) => {
        expect($el).to.contain.text(seedTestResultadosSafraAnalitica.valores)
      })
    }

    // Validar card Total Ha da safra
    if (seedTestResultadosSafraAnalitica.totalSafra) {
      cy.getVisible(locResultadosSafra.analitica.cardTotalHaSafra).should(($el) => {
        expect($el).to.contain.text(seedTestResultadosSafraAnalitica.totalSafra)
      })
    }

    // Validar Total em Despesas
    if (seedTestResultadosSafraAnalitica.totalDespesas) {
      cy.getVisible(locResultadosSafra.analitica.valorTotalDespesas)
        .should('contain', seedTestResultadosSafraAnalitica.totalDespesas)
    }

    // Validar card de Despesas
    if (seedTestResultadosSafraAnalitica.cardDespesas) {
      var dadosCardDespesas = seedTestResultadosSafraAnalitica.cardDespesas

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

    /*
    * Esse trecho foi comentado por ser instavel, as vezes o colapse abre com o clique, outras nao
    * Isso ocorre apenas na execução do teste com Cypress, que recarrega a tela quando é feito uma requisicao na API
    * Utilizando o MyFarm via interface o problema nao ocorre

    // Validar tabela de detalhes das despesas
     if (seedTestResultadosSafraAnalitica.tabelaDespesas) {
      var dadosTabelaDespesas = seedTestResultadosSafraAnalitica.tabelaDespesas

      // Expandir tabela
      cy.get(locResultadosSafra.analitica.buttonDropdownCard, { timeout: 15000 }).click()

      for (var i = 0; i < dadosTabelaDespesas.length; i++) {
        // valor
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas)
          .contains(dadosTabelaDespesas[i].valor)

        // pessoa
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas)
          .contains(dadosTabelaDespesas[i].pessoa)

        // documento
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas)
          .contains(dadosTabelaDespesas[i].documento)

        // origem
        cy.get(locResultadosSafra.analitica.tabelaDetalhesDepesas)
          .contains(dadosTabelaDespesas[i].origem)
      }
    }
    */

    // Validar se nao for encontrado nenhum resultado
    if (seedTestResultadosSafraAnalitica.mensagemEmpty) {
      cy.getVisible(locResultadosSafra.analitica.mensagemEmpty)
        .should('contain', seedTestResultadosSafraAnalitica.mensagemEmpty)
    }
  }
}

export default new ResultadoSafra()
