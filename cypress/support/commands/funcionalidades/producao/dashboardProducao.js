/// <reference types="cypress" />

import locDashboardProducao from '../../../locators/funcionalidades/producao/dashboard/locators-dashboard.js'

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

    // Navegar para dashboard de Producao
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Fechar cotacoes
    cy.get(locDashboardProducao.cardCotacoes).click()

    // Selecionar safra
    cy.getVisible(locDashboardProducao.selectSafra).click()
      .contains(seedTest.safra).click()

    // Selecionar fazenda
    cy.get(locDashboardProducao.limparSelectFazenda).click({ force: true })
    cy.getVisible(locDashboardProducao.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // Selecionar cultura
    cy.get(locDashboardProducao.cardCultura).first().click()

    cy.wait('@dashboard')

    if (seedTest.quantidade) {
      // Validar cultura do card de cultura
      cy.get(locDashboardProducao.spanTituloCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidade)
      })

      // Validar quantidade do card de cultura
      cy.get(locDashboardProducao.spanQuantidadeCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidadeCultura)
      })

      // Validar hectares do card de cultura
      cy.get(locDashboardProducao.spanHectareCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.hectareCultura)
      })
    }

    if (seedTest.fazenda) {
      // Validar dados do card de fazendas mais produtivas
      cy.get(locDashboardProducao.cardFazendasProdutivas).should(($el) => {
        expect($el).to.contain.text(seedTest.fazenda)
        expect($el).to.contain.text(seedTest.sacaFazendaProdutiva)
      })
    }

    if (seedTest.variedadeProducao) {
      // Validar dados do card de Produção por variedade
      cy.get(locDashboardProducao.cardProducao).should(($el) => {
        expect($el).to.contain.text(seedTest.variedadeProducao)
        expect($el).to.contain.text(seedTest.sacaProducao)
      })
      // Alterar visibilidade para talhao
      cy.get(locDashboardProducao.toggleCardProducao).contains('Talhão').click()
      // Validar dados do card de Produção por talhao
      cy.get(locDashboardProducao.cardProducao).should(($el) => {
        expect($el).to.contain.text(seedTest.talhaoProducao)
        expect($el).to.contain.text(seedTest.fazenda)
        expect($el).to.contain.text(seedTest.sacaTalhaoProducao)
      })
    }

    if (seedTest.varidadeProdutividade) {
      // Validar dados do card de Produtividade por variedade
      cy.get(locDashboardProducao.cardProdutividade).should(($el) => {
        expect($el).to.contain.text(seedTest.varidadeProdutividade)
        expect($el).to.contain.text(seedTest.sacaProdutividade)
      })
      // Alterar visibilidade para talhao
      cy.get(locDashboardProducao.toggleCardProdutividade).contains('Talhão').click()
      // Validar dados do card de Produtividade por variedade
      cy.get(locDashboardProducao.cardProdutividade).should(($el) => {
        expect($el).to.contain.text(seedTest.talhaoProdutividade)
        expect($el).to.contain.text(seedTest.fazenda)
        expect($el).to.contain.text(seedTest.sacatalhaoProdutividade)
      })
    }

    // Validar card de armazenagem interna
    cy.get(locDashboardProducao.cardArmazenagemInterna).should(($el) => {
      expect($el).to.contain.text(seedTest.totalArmazenagemInterna)
      expect($el).to.contain.text(seedTest.sacaArmazenagemInterna)
    })

    // Validar card de armazenagem externa
    cy.get(locDashboardProducao.cardArmazenagemExterna).should(($el) => {
      expect($el).to.contain.text(seedTest.totalArmazenagemExterna)
      expect($el).to.contain.text(seedTest.sacaArmazenagemExterna)
    })

    // Validar card de total recebido
    cy.get(locDashboardProducao.cardTotalRecebido).should(($el) => {
      expect($el).to.contain.text(seedTest.totalRecebido)
    })

    // Validar card de total a receber
    cy.get(locDashboardProducao.cardTotalReceber).should(($el) => {
      expect($el).to.contain.text(seedTest.totalRecebido)
    })

    if (seedTest.entregaFixacoes) {
      // Validar dados da tabela Entrega e Fixacoes
      const entregaFixacoes = seedTest.entregaFixacoes
      entregaFixacoes.forEach((dadoTabela, i) => {
        cy.get(locDashboardProducao.spanCliente).should('have.length', entregaFixacoes.length)

        // cliente
        cy.get(locDashboardProducao.spanCliente).eq(i).should(($el) => {
          expect($el).to.contain.text(dadoTabela.cliente)
        })

        // entregue
        cy.get(locDashboardProducao.spanEntregue).eq(i).should(($el) => {
          expect($el).to.contain.text(dadoTabela.entregue)
        })

        // arrendamentos
        cy.get(locDashboardProducao.spanArrendamentos).eq(i).should(($el) => {
          expect($el).to.contain.text(dadoTabela.arrendamentos)
        })

        // contratos fixados
        cy.get(locDashboardProducao.spanContratosFixados).eq(i).should(($el) => {
          expect($el).to.contain.text(dadoTabela.contratosFixados)
        })

        // fixacoes
        cy.get(locDashboardProducao.spanFixacoes).eq(i).should(($el) => {
          expect($el).to.contain.text(dadoTabela.fixacoes)
        })

        // transferencias
        cy.get(locDashboardProducao.spanTransferencias).eq(i).should(($el) => {
          expect($el).to.contain.text(dadoTabela.transferencias)
        })

        // saldo
        cy.get(locDashboardProducao.spanSaldo).eq(i).should(($el) => {
          expect($el).to.contain.text(dadoTabela.saldo)
        })
      })
    }

    if (seedTest.contratosEntregasFixacoes) {
      // Validar contratos na tabela Entregas e Fixações
      const contratosEntregasFixacoes = seedTest.contratosEntregasFixacoes
      contratosEntregasFixacoes.forEach((contrato, i) => {
        cy.wait(2000)

        // Expandir lista de entregas
        if (contrato.expandir) {
          cy.get(locDashboardProducao.buttonCollapse).eq(i).click()
        }

        cy.wait(2000)

        cy.get(locDashboardProducao.subTabelaEntregaFixacao).within(() => {
          if (contrato.contador) {
            cy.get(locDashboardProducao.spanCliente).should('have.length', contratosEntregasFixacoes.length)
          }

          // cliente
          cy.get(locDashboardProducao.spanCliente).should(($el) => {
            expect($el).to.contain.text(contrato.cliente)
          })

          // entregue
          cy.get(locDashboardProducao.spanEntregue).should(($el) => {
            expect($el).to.contain.text(contrato.entregue)
          })

          // arrendamentos
          cy.get(locDashboardProducao.spanArrendamentos).should(($el) => {
            expect($el).to.contain.text(contrato.arrendamentos)
          })

          // contratos fixados
          cy.get(locDashboardProducao.spanContratosFixados).should(($el) => {
            expect($el).to.contain.text(contrato.contratosFixados)
          })

          // fixacoes
          cy.get(locDashboardProducao.spanFixacoes).should(($el) => {
            expect($el).to.contain.text(contrato.fixacoes)
          })

          // transferencias
          cy.get(locDashboardProducao.spanTransferencias).should(($el) => {
            expect($el).to.contain.text(contrato.transferencias)
          })

          // saldo
          cy.get(locDashboardProducao.spanSaldo).should(($el) => {
            expect($el).to.contain.text(contrato.saldo)
          })
        })

        if (contrato.encolherLista) {
          // Encolher lista de entregas
          cy.get(locDashboardProducao.buttonExpanded).click({ force: true })
        }
      })
    }

    // Saldo total a fixar
    cy.get(locDashboardProducao.spanSaldoTotalFixar).should(($el) => {
      expect($el).to.contain.text(seedTest.saldoTotalFixar)
    })

    // Validar card de preco media de venda por cliente
    if (seedTest.precoMedioPorCliente) {
      cy.get(locDashboardProducao.cardPrecoMedioCliente).should(($el) => {
        expect($el).to.contain.text(seedTest.clientePrecoMedio)
        expect($el).to.contain.text(seedTest.precoMediaCliente)
        expect($el).to.contain.text(seedTest.quantidadeMediaCliente)
      })
    }

    // Validar card de preco media de venda por safra
    if (seedTest.precoMedioPorSafra) {
      cy.get(locDashboardProducao.spanMediaNegociacao).should(($el) => {
        expect($el).to.contain.text(seedTest.precoMediaSafra)
        expect($el).to.contain.text(seedTest.quantidadeMediaNegociada)
      })
    }
  }
}

export default new DashboardProducaoUtils()
