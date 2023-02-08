/// <reference types="cypress" />

import locDashboardProducao from '../../locators/producao/dashboard/locators-dashboard.js'

class DashboardProducaoUtils {
  /**
 * Método para validar a dashboard de Produção
 * @param {} seedTest
 */
  validarDashboard(seedTest) {
    const url = '/producao/dashboard'
    const locatorTituloPagina = locDashboardProducao.titulo
    const tituloPagina = 'Dashboard'

    cy.intercept('GET', 'api/producao-agricola/v1/Dashboard/PrecoMediaSafraCliente?**').as('dashboard')

    cy.log('Navegar para dashboard de Producao')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.log('Fechar cotacoes')
    cy.get(locDashboardProducao.cardCotacoes).click()

    cy.log('Selecionar safra')
    cy.getVisible(locDashboardProducao.selectSafra).click()
      .contains(seedTest.safra).click()

    cy.log('Selecionar fazenda')
    cy.get(locDashboardProducao.limparSelectFazenda).click({ force: true })
    cy.getVisible(locDashboardProducao.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    cy.log('Selecionar cultura')
    cy.get(locDashboardProducao.cardCultura).first().click()

    cy.wait('@dashboard')

    if (seedTest.quantidade) {
      cy.log('Validar cultura do card de cultura')
      cy.get(locDashboardProducao.spanTituloCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidade)
      })

      cy.log('Validar quantidade do card de cultura')
      cy.get(locDashboardProducao.spanQuantidadeCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidadeCultura)
      })

      cy.log('Validar hectares do card de cultura')
      cy.get(locDashboardProducao.spanHectareCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.hectareCultura)
      })
    }

    if (seedTest.fazenda) {
      cy.log('Validar dados do card de fazendas mais produtivas')
      cy.get(locDashboardProducao.cardFazendasProdutivas).should(($el) => {
        expect($el).to.contain.text(seedTest.fazenda)
        expect($el).to.contain.text(seedTest.sacaFazendaProdutiva)
      })
    }

    if (seedTest.variedadeProducao) {
      cy.log('Validar dados do card de Produção por variedade')
      cy.get(locDashboardProducao.cardProducao).should(($el) => {
        expect($el).to.contain.text(seedTest.variedadeProducao)
        expect($el).to.contain.text(seedTest.sacaProducao)
      })
      cy.log('Alterar visibilidade para talhao')
      cy.get(locDashboardProducao.toggleCardProducao).contains('Talhão').click()
      cy.log('Validar dados do card de Produção por talhao')
      cy.get(locDashboardProducao.cardProducao).should(($el) => {
        expect($el).to.contain.text(seedTest.talhaoProducao)
        expect($el).to.contain.text(seedTest.fazenda)
        expect($el).to.contain.text(seedTest.sacaTalhaoProducao)
      })
    }

    if (seedTest.varidadeProdutividade) {
      cy.log('Validar dados do card de Produtividade por variedade')
      cy.get(locDashboardProducao.cardProdutividade).should(($el) => {
        expect($el).to.contain.text(seedTest.varidadeProdutividade)
        expect($el).to.contain.text(seedTest.sacaProdutividade)
      })
      cy.log('Alterar visibilidade para talhao')
      cy.get(locDashboardProducao.toggleCardProdutividade).contains('Talhão').click()

      cy.log('Validar dados do card de Produtividade por variedade')
      cy.get(locDashboardProducao.cardProdutividade).should(($el) => {
        expect($el).to.contain.text(seedTest.talhaoProdutividade)
        expect($el).to.contain.text(seedTest.fazenda)
        expect($el).to.contain.text(seedTest.sacatalhaoProdutividade)
      })
    }

    cy.log('Validar card de armazenagem interna')
    cy.get(locDashboardProducao.cardArmazenagemInterna).should(($el) => {
      expect($el).to.contain.text(seedTest.totalArmazenagemInterna)
      expect($el).to.contain.text(seedTest.sacaArmazenagemInterna)
    })

    cy.log('Validar card de armazenagem externa')
    cy.get(locDashboardProducao.cardArmazenagemExterna).should(($el) => {
      expect($el).to.contain.text(seedTest.totalArmazenagemExterna)
      expect($el).to.contain.text(seedTest.sacaArmazenagemExterna)
    })

    cy.log('Validar card de total recebido')
    cy.get(locDashboardProducao.cardTotalRecebido).should(($el) => {
      expect($el).to.contain.text(seedTest.totalRecebido)
    })

    cy.log('Validar card de total a receber')
    cy.get(locDashboardProducao.cardTotalReceber).should(($el) => {
      expect($el).to.contain.text(seedTest.totalRecebido)
    })

    if (seedTest.entregaFixacoes) {
      cy.log('Validar dados da tabela Entrega e Fixacoes')
      const entregaFixacoes = seedTest.entregaFixacoes
      cy.get(locDashboardProducao.spanCliente).should('have.length', entregaFixacoes.length)

      entregaFixacoes.forEach((dadoTabela) => {

        cy.get(locDashboardProducao.spanCliente).contains(dadoTabela.cliente)
          .parents('.el-tree-node').within(() => {

            cy.log('Validar cliente')
            cy.get(locDashboardProducao.spanCliente).should(($el) => {
              expect($el).to.contain.text(dadoTabela.cliente)
            })

            cy.log('Validar entregue')
            cy.get(locDashboardProducao.spanEntregue).should(($el) => {
              expect($el).to.contain.text(dadoTabela.entregue)
            })

            cy.log('Validar arrendamentos')
            cy.get(locDashboardProducao.spanArrendamentos).should(($el) => {
              expect($el).to.contain.text(dadoTabela.arrendamentos)
            })

            cy.log('Validar contratos fixados')
            cy.get(locDashboardProducao.spanContratosFixados).should(($el) => {
              expect($el).to.contain.text(dadoTabela.contratosFixados)
            })

            cy.log('Validar fixacoes')
            cy.get(locDashboardProducao.spanFixacoes).should(($el) => {
              expect($el).to.contain.text(dadoTabela.fixacoes)
            })

            cy.log('Validar transferencias')
            cy.get(locDashboardProducao.spanTransferencias).should(($el) => {
              expect($el).to.contain.text(dadoTabela.transferencias)
            })

            cy.log('Validar saldo')
            cy.get(locDashboardProducao.spanSaldo).should(($el) => {
              expect($el).to.contain.text(dadoTabela.saldo)
            })
          })
      })
    }

    if (seedTest.contratosEntregasFixacoes) {
      cy.log('Validar contratos na tabela Entregas e Fixações')

      const contratosEntregasFixacoes = seedTest.contratosEntregasFixacoes

      contratosEntregasFixacoes.forEach((contrato) => {
        cy.wait(2000)

        if (contrato.expandir) {
          cy.log('Expandir lista de entregas')

          cy.get('[data-cy=lista-entregas] .el-tree-node__content')
            .contains(contrato.clientePrincipal)
            .parents('.el-tree-node__content').within(() => {
              cy.get('.el-tree-node__expand-icon.siagri-icon-arrow-right-xsmall').click()

              cy.wait(3000)
            })
        }

        cy.log('Validar itens da tabela Entregas e Fixações')
        cy.get('[data-cy=lista-entregas] .el-tree-node__content').contains(contrato.clientePrincipal)
          .parents('.el-tree-node.is-expanded.is-focusable')
          .children('.el-tree-node__children').contains(contrato.cliente)
          .parents('.custom-tree-node').within(() => {

            cy.log('Validar cliente')
            cy.get(locDashboardProducao.spanCliente).should(($el) => {
              expect($el).to.contain.text(contrato.cliente)
            })

            cy.log('Validar entregue')
            cy.get(locDashboardProducao.spanEntregue).should(($el) => {
              expect($el).to.contain.text(contrato.entregue)
            })

            cy.log('Validar arrendamentos')
            cy.get(locDashboardProducao.spanArrendamentos).should(($el) => {
              expect($el).to.contain.text(contrato.arrendamentos)
            })

            cy.log('Validar contratos fixados')
            cy.get(locDashboardProducao.spanContratosFixados).should(($el) => {
              expect($el).to.contain.text(contrato.contratosFixados)
            })

            cy.log('Validar fixacoes')
            cy.get(locDashboardProducao.spanFixacoes).should(($el) => {
              expect($el).to.contain.text(contrato.fixacoes)
            })

            cy.log('Validar transferencias')
            cy.get(locDashboardProducao.spanTransferencias).should(($el) => {
              expect($el).to.contain.text(contrato.transferencias)
            })

            cy.log('Validar saldo')
            cy.get(locDashboardProducao.spanSaldo).should(($el) => {
              expect($el).to.contain.text(contrato.saldo)
            })
          })

        if (contrato.encolherLista) {
          cy.log('Encolher lista de entregas')
          cy.get(locDashboardProducao.buttonExpanded).click({ force: true })
        }
      })
    }

    cy.log('Saldo total a fixar')
    cy.get(locDashboardProducao.spanSaldoTotalFixar).should(($el) => {
      expect($el).to.contain.text(seedTest.saldoTotalFixar)
    })

    cy.log('Validar card de preco media de venda por cliente')
    if (seedTest.precoMedioPorCliente) {
      cy.get(locDashboardProducao.cardPrecoMedioCliente).should(($el) => {
        expect($el).to.contain.text(seedTest.clientePrecoMedio)
        expect($el).to.contain.text(seedTest.precoMediaCliente)
        expect($el).to.contain.text(seedTest.quantidadeMediaCliente)
      })
    }

    cy.log('Validar card de preco media de venda por safra')
    if (seedTest.precoMedioPorSafra) {
      cy.get(locDashboardProducao.spanMediaNegociacao).should(($el) => {
        expect($el).to.contain.text(seedTest.precoMediaSafra)
        expect($el).to.contain.text(seedTest.quantidadeMediaNegociada)
      })
    }
  }
}

export default new DashboardProducaoUtils()
