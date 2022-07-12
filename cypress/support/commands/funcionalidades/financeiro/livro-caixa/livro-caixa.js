/// <reference types="cypress" />

import locLivroCaixa from '../../../../locators/funcionalidades/financeiro/livro-caixa/locators-livro-caixa'

const url = '/financeiro/livro-caixa'
const locatorTituloPagina = locLivroCaixa.dashboard.titulo
const tituloPagina = 'Livro caixa'

class LivroCaixa {
  /**
   * Validar dashboard do Livro Caixa
   * @param {*} seedTestLivroCaixa
   */
  validarDashboard(seedTestLivroCaixa) {
    const url = '/financeiro/livro-caixa'
    const locatorTituloPagina = locLivroCaixa.dashboard.titulo
    const tituloPagina = 'Livro caixa'
    var livrosCaixa = seedTestLivroCaixa.cardLivroCaixa

    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/financeiro/v1/LivroCaixa/**').as('ApiLivroCaixa')

    // Validar dados card produtores
    cy.get(locLivroCaixa.dashboard.cardProdutores).contains(seedTestLivroCaixa.nomeEmpresa)
      .parents(locLivroCaixa.dashboard.cardProdutores).within(() => {
        cy.getVisible(locLivroCaixa.dashboard.cardProdutoresProdutor).should(($el) => {
          expect($el).to.contain.text(seedTestLivroCaixa.nomeEmpresa)
        })
        cy.getVisible(locLivroCaixa.dashboard.cardProdutoresCpf).should(($el) => {
          expect($el).to.contain.text(seedTestLivroCaixa.cpfEmpresa)
        })
        cy.getVisible(locLivroCaixa.dashboard.cardProdutoresTotalEntrada).should(($el) => {
          expect($el).to.contain.text(seedTestLivroCaixa.totalEntrada)
        })
        cy.getVisible(locLivroCaixa.dashboard.cardProdutoresTotalSaida).should(($el) => {
          expect($el).to.contain.text(seedTestLivroCaixa.totalSaida)
        })
        cy.getVisible(locLivroCaixa.dashboard.cardProdutoresSaldo).should(($el) => {
          expect($el).to.contain.text(seedTestLivroCaixa.saldoAtualizado)
        })
        cy.getVisible(locLivroCaixa.dashboard.cardProdutoresIRRF).should(($el) => {
          expect($el).to.contain.text(seedTestLivroCaixa.estimativaIRRF)
        })
      })

    // Abrir livro caixa produtor
    cy.get(locLivroCaixa.dashboard.cardProdutores)
      .contains(seedTestLivroCaixa.nomeEmpresa).click()

    cy.wait('@ApiLivroCaixa', { timeout: 10000 })

    // Validar titulo Lançamentos
    cy.getVisible(locLivroCaixa.lancamentos.titulo)
      .contains('Lançamentos')

    // Validar dados livro caixa com mais de um lançamento
    if (seedTestLivroCaixa.cardLivroCaixa.length > 1) {
      // Validar nome produtor do livro caixa
      cy.getVisible(locLivroCaixa.lancamentos.filtroEmpresa).should(($el) => {
        expect($el).to.contain.text(seedTestLivroCaixa.nomeEmpresa)
      })

      // se lancamento for nao dedutivel
      if (seedTestLivroCaixa.naoDedutivel === true) {
        cy.getVisible(locLivroCaixa.lancamentos.cardLateralDeducao).click()
      }

      // Validar dados do livro caixa
      livrosCaixa.forEach((livroCaixa) => {
        cy.get(locLivroCaixa.lancamentos.cardLancamentosConta).should(($el) => {
          expect($el).to.contain.text(livroCaixa.contaContabil)
        })
        cy.get(locLivroCaixa.lancamentos.cardLancamentosHistorico).should(($el) => {
          expect($el).to.contain.text(livroCaixa.historico)
        })
        cy.get(locLivroCaixa.lancamentos.cardLancamentosValor).should(($el) => {
          expect($el).to.contain.text(livroCaixa.valor)
        })
        cy.get(locLivroCaixa.lancamentos.cardLancamentosInfo).should(($el) => {
          expect($el).to.contain.text(livroCaixa.tipo)
        })
        cy.get(locLivroCaixa.lancamentos.cardLancamentosInfo).should(($el) => {
          expect($el).to.contain.text(livroCaixa.deducao)
        })
      })
    }
    // Validar dados livro caixa com um lançamento
    else {
      // Validar nome produtor do livro caixa
      cy.getVisible(locLivroCaixa.lancamentos.filtroEmpresa).should(($el) => {
        expect($el).to.contain.text(seedTestLivroCaixa.nomeEmpresa)
      })

      // se lancamento for nao dedutivel
      if (seedTestLivroCaixa.naoDedutivel === true) {
        cy.getVisible(locLivroCaixa.lancamentos.cardLateralDeducao).click()
      }

      // Validar dados do livro caixa
      cy.getVisible(locLivroCaixa.lancamentos.cardLancamentosConta).should(($el) => {
        expect($el).to.contain.text(seedTestLivroCaixa.cardLivroCaixa[0].contaContabil)
      })
      cy.getVisible(locLivroCaixa.lancamentos.cardLancamentosHistorico).should(($el) => {
        expect($el).to.contain.text(seedTestLivroCaixa.cardLivroCaixa[0].historico)
      })
      cy.getVisible(locLivroCaixa.lancamentos.cardLancamentosValor).should(($el) => {
        expect($el).to.contain.text(seedTestLivroCaixa.cardLivroCaixa[0].valor)
      })
      cy.getVisible(locLivroCaixa.lancamentos.cardLancamentosInfo).should(($el) => {
        expect($el).to.contain.text(seedTestLivroCaixa.cardLivroCaixa[0].tipo)
      })
      cy.getVisible(locLivroCaixa.lancamentos.cardLancamentosInfo).should(($el) => {
        expect($el).to.contain.text(seedTestLivroCaixa.cardLivroCaixa[0].deducao)
      })
    }

    // Card Lateral
    cy.getVisible(locLivroCaixa.lancamentos.cardLateralSaldoAnterior).should(($el) => {
      expect($el).to.contain.text(seedTestLivroCaixa.saldoAnterior)
    })
    cy.getVisible(locLivroCaixa.lancamentos.cardLateralSaldoAtual).should(($el) => {
      expect($el).to.contain.text(seedTestLivroCaixa.saldoAtual)
    })
    cy.getVisible(locLivroCaixa.lancamentos.cardLateralDeducao).should(($el) => {
      expect($el).to.contain.text(seedTestLivroCaixa.saldoDeducao)
    })
    cy.getVisible(locLivroCaixa.lancamentos.cardLateralEstimativaIRRF).should(($el) => {
      expect($el).to.contain.text(seedTestLivroCaixa.cardEstimativaIRRF)
    })
  }

  /**
   * Validar lançamento no Livro Caixa
   * @param {*} seedTestLancamentoLivroCaixa
   */
  validarLancamento(seedTestLancamentoLivroCaixa) {
    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', '/api/pessoa/v1/Pessoa/**/IE').as('ApiPessoaIE')
    cy.intercept('GET', '/api/pessoa/v1/Pessoa/**').as('ApiPessoa')
    cy.intercept('GET', '/api/financeiro/v1/LivroCaixa/ProdutorLivroCaixa?**').as('ApiProdutorLivroCaixa')

    // Abrir livro caixa produtor
    cy.get(locLivroCaixa.dashboard.cardProdutores)
      .contains(seedTestLancamentoLivroCaixa.empresa).click()
    cy.wait('@ApiProdutorLivroCaixa', { timeout: 10000 })

    // Validar titulo Lançamentos
    cy.getVisible(locLivroCaixa.lancamentos.titulo)
      .contains('Lançamentos')

    // se lancamento for nao dedutivel
    if (seedTestLancamentoLivroCaixa.naoDedutivel === true) {
      cy.getVisible(locLivroCaixa.lancamentos.cardLateralDeducao).click()
    }

    // Abrir lancamento livro caixa
    cy.getVisible(locLivroCaixa.lancamentos.cardLancamentosConta).click()

    // Aguarda carregamento dos dados no modal
    cy.wait('@ApiPessoa', { timeout: 10000 })
    cy.wait('@ApiPessoaIE', { timeout: 10000 })

    // Validar tipo de lancamento
    cy.getVisible(locLivroCaixa.editarLancamento.tipoLancamentoAtivo).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.tipoLancamento)
    })

    // Validar tipo de deducao
    cy.getVisible(locLivroCaixa.editarLancamento.tipoDeducaoAtivo).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.deducao)
    })

    // Validar conta contabil
    cy.getVisible(locLivroCaixa.editarLancamento.contaContabil).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.contaContabil)
    })

    // Validar fazenda
    cy.get(locLivroCaixa.editarLancamento.fazenda).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.fazenda)
    })

    // Validar tipo do documento
    cy.getVisible(locLivroCaixa.editarLancamento.tipoDocumento).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.tipoDocumento)
    })

    // Validar empresa
    cy.getVisible(locLivroCaixa.editarLancamento.empresa).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.empresa)
    })

    // Validar inscricao estadual
    cy.getVisible(locLivroCaixa.editarLancamento.inscricaoEstadual).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.inscricaoEstadual)
    })

    // Validar conta bancaria
    cy.getVisible(locLivroCaixa.editarLancamento.contaBancaria).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.contaBancaria)
    })

    // validar pessoa
    cy.getVisible(locLivroCaixa.editarLancamento.pessoa).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.pessoa)
    })

    // Validar status
    cy.getVisible(locLivroCaixa.editarLancamento.statusLancamentoAtivo).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.status)
    })

    // Fechar modal
    cy.getVisible(locLivroCaixa.editarLancamento.cancelar).click()
  }

  /**
   * Validar a exclusão no Livro Caixa
   * @param {*} seedTestExclusaoLivroCaixa
   */
  validarExclusao(seedTestExclusaoLivroCaixa) {
    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Validar dados card produtores
    cy.get(locLivroCaixa.dashboard.cardProdutores)
      .contains(seedTestExclusaoLivroCaixa.nomeEmpresa)
      .parentsUntil(locLivroCaixa.dashboard.cardProdutores).within(() => {
        cy.get(locLivroCaixa.dashboard.cardProdutoresProdutor).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.nomeEmpresa)
        })
        cy.get(locLivroCaixa.dashboard.cardProdutoresCpf).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.cpfEmpresa)
        })
        cy.get(locLivroCaixa.dashboard.cardProdutoresTotalEntrada).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.totalEntrada)
        })
        cy.get(locLivroCaixa.dashboard.cardProdutoresTotalSaida).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.totalSaida)
        })
        cy.get(locLivroCaixa.dashboard.cardProdutoresSaldo).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.saldoAtualizado)
        })
        cy.get(locLivroCaixa.dashboard.cardProdutoresIRRF).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.estimativaIRRF)
        })
      })

    // Abrir livro caixa produtor
    cy.get(locLivroCaixa.dashboard.cardProdutores)
      .contains(seedTestExclusaoLivroCaixa.nomeEmpresa).click()
      .then(() => {
        // Validar titulo lançamentos
        cy.getVisible(locLivroCaixa.lancamentos.titulo).contains('Lançamentos')

        // Selecionar empresa
        cy.getVisible(locLivroCaixa.lancamentos.filtroEmpresa).click()
          .contains(seedTestExclusaoLivroCaixa.nomeEmpresa).click()

        // Se lancamento for nao dedutivel
        if (seedTestExclusaoLivroCaixa.naoDedutivel === true) {
          cy.get(locLivroCaixa.lancamentos.cardLateralDeducao).click()
        }

        // Validar inexistencia do card de lancamentos
        cy.get(locLivroCaixa.lancamentos.cardLivroCaixa).should('not.exist')
        cy.get(locLivroCaixa.lancamentos.cardLancamentosConta).should('not.exist')
        cy.get(locLivroCaixa.lancamentos.cardLancamentosHistorico).should('not.exist')
        cy.get(locLivroCaixa.lancamentos.cardLancamentosValor).should('not.exist')
        cy.get(locLivroCaixa.lancamentos.cardLancamentosInfo).should('not.exist')
        cy.get(locLivroCaixa.lancamentos.cardLancamentosInfo).should('not.exist')

        // Validar valores dos cards Laterais
        cy.getVisible(locLivroCaixa.lancamentos.cardLateralSaldoAnterior).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.saldoAnterior)
        })
        cy.getVisible(locLivroCaixa.lancamentos.cardLateralSaldoAtual).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.saldoAtual)
        })
        cy.getVisible(locLivroCaixa.lancamentos.cardLateralDeducao).should(($el) => {
          expect($el).to.contain.text(seedTestExclusaoLivroCaixa.saldoDeducao)
        })
      })
  }

  /**
   * Exportar livro Caixa
   * @param {*} seedTestLivroCaixa
   */
  exportar(seedTestLivroCaixa) {
    const path = require('path')

    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Abrir livro caixa produtor
    cy.get(locLivroCaixa.dashboard.cardProdutores)
      .contains(seedTestLivroCaixa.nomeEmpresa).click()
      .then(() => {
        // Validar titulo lançamentos
        cy.getVisible(locLivroCaixa.lancamentos.titulo).contains('Lançamentos')

        // Selecionar empresa
        cy.getVisible(locLivroCaixa.lancamentos.filtroEmpresa).click()
          .contains(seedTestLivroCaixa.nomeEmpresa).click()

        // Exportar CSV e validar o download do arquivo
        cy.getVisible(locLivroCaixa.lancamentos.buttonExportarCSV).click().then(() => {
          const downloadsFolder = Cypress.config('downloadsFolder')
          cy.readFile(path.join(downloadsFolder, 'livro-caixa.csv')).should('exist')
        })
      })
  }
}

export default new LivroCaixa()
