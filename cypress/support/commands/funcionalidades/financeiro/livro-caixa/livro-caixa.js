/// <reference types="cypress" />

import locLivroCaixa from '../../../../locators/funcionalidades/financeiro/livro-caixa/locators-livro-caixa'

const url = '/financeiro/livro-caixa'
const locatorTituloPagina = locLivroCaixa.dashboard.titulo
const tituloPagina = 'Livro caixa'
const novoLancamento = 'Novo lançamento'

class LivroCaixa {
  /**
   * Validar listagem de produtores do Livro Caixa
   * @param {*} seedTestLivroCaixa 
   */
  validarListagem(seedTestLivroCaixa) {
    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/financeiro/v1/LivroCaixa/**')
      .as('ApiLivroCaixa')

    // Filtrar por Produtor
    if (seedTestLivroCaixa.filtroProdutor) {
      cy.getVisible(locLivroCaixa.dashboard.filtroProdutor).click()
        .contains(seedTestLivroCaixa.filtroProdutor).click()
    }

    // Filtrar por ano
    if (seedTestLivroCaixa.filtroAno) {
      cy.getVisible(locLivroCaixa.dashboard.filtroAno).clear()
        .type(`${seedTestLivroCaixa.filtroAno}{enter}`)
    }

    if (seedTestLivroCaixa.cardComparativo) {
      const cardComparativo = seedTestLivroCaixa.cardComparativo
      // Validar dados do card comparativo dos produtores
      cardComparativo.forEach((comparativo, index) => {
        // Validar quantidade de cards visíveis
        cy.get(locLivroCaixa.dashboard.cardComparativo).should('have.length', cardComparativo.length)
        // Validar nome da empresa
        cy.get(locLivroCaixa.dashboard.cardComparativo).eq(index).should(($el) => {
          expect($el).to.contain.text(comparativo.nomeEmpresa)
        })
        // Validar valor da entrada
        cy.get(locLivroCaixa.dashboard.cardComparativo).eq(index).should(($el) => {
          expect($el).to.contain.text(comparativo.valorEntrada)
        })
        // Validar valor da saída
        cy.get(locLivroCaixa.dashboard.cardComparativo).eq(index).should(($el) => {
          expect($el).to.contain.text(comparativo.valorSaida)
        })
      })
    }

    const cardProdutor = seedTestLivroCaixa.cardProdutores
    // Validar dados card produtores
    cardProdutor.forEach((produtor, index) => {
      // Validar quantidade de cards visíveis
      cy.get(locLivroCaixa.dashboard.cardProdutores).should('have.length', cardProdutor.length)

      // Validar nome da empresa
      cy.get(locLivroCaixa.dashboard.cardProdutoresProdutor).eq(index).should(($el) => {
        expect($el).to.contain.text(produtor.nomeEmpresa)
      })
      // Validar cpf da empresa/pessoa
      cy.get(locLivroCaixa.dashboard.cardProdutoresCpf).eq(index).should(($el) => {
        expect($el).to.contain.text(produtor.cpfEmpresa)
      })
      // Validar valor total de entradas
      cy.get(locLivroCaixa.dashboard.cardProdutoresTotalEntrada).eq(index).should(($el) => {
        expect($el).to.contain.text(produtor.totalEntrada)
      })
      // Validar valor total de saídas
      cy.get(locLivroCaixa.dashboard.cardProdutoresTotalSaida).eq(index).should(($el) => {
        expect($el).to.contain.text(produtor.totalSaida)
      })
      // Validar o saldo atualizado
      cy.get(locLivroCaixa.dashboard.cardProdutoresSaldo).eq(index).should(($el) => {
        expect($el).to.contain.text(produtor.saldoAtualizado)
      })
      // Validar a estimativa de IRRF
      cy.get(locLivroCaixa.dashboard.cardProdutoresIRRF).eq(index).should(($el) => {
        expect($el).to.contain.text(produtor.estimativaIRRF)
      })
    })
  }

  /**
   * Validar os Lançamentos do produtor no Livro Caixa
   * @param {*} seedTestLivroCaixa
   */
  validarLancamentos(seedTestLivroCaixa) {
    const url = '/financeiro/livro-caixa'
    const locatorTituloPagina = locLivroCaixa.dashboard.titulo
    const tituloPagina = 'Livro caixa'

    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/financeiro/v1/LivroCaixa/**')
      .as('ApiLivroCaixa')
    cy.intercept('/api/financeiro/v1/LivroCaixa/ProdutorLivroCaixa?**')
      .as('ApiProdutorLivro')

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

      // abrir os filtros
    if (seedTestLivroCaixa.filtros) {
      cy.getVisible(locLivroCaixa.lancamentos.abrirFiltros).click()

      cy.wait('@ApiProdutorLivro', { timeout: 20000 })

      // filtrar pelo produtor
      if (seedTestLivroCaixa.filtroProdutor) {
        cy.getVisible(locLivroCaixa.lancamentos.filtroProdutor).click()
          .contains(seedTestLivroCaixa.filtroProdutor).click()
      }

      if (seedTestLivroCaixa.filtroDataInicio) {
        // informar a data ínicio do filtro
        cy.getVisible(locLivroCaixa.lancamentos.filtroDataInicio).clear()
          .type(`${seedTestLivroCaixa.filtroDataInicio}{enter}`)

        // informar a data FIM do filtro
        cy.getVisible(locLivroCaixa.lancamentos.filtroDataFim).clear()
          .type(`${seedTestLivroCaixa.filtroDataFim}{enter}`)
      }

      // filtrar pela conta contabil
      if (seedTestLivroCaixa.contaContabil) {
        cy.getVisible(locLivroCaixa.lancamentos.selectConta).click()
          .contains(seedTestLivroCaixa.contaContabil).click()
      }

      // filtrar pela fazenda
      if (seedTestLivroCaixa.filtroFazenda) {
        cy.getVisible(locLivroCaixa.lancamentos.selectFazenda).click()
          .contains(seedTestLivroCaixa.filtroFazenda).click()
      }

      // filtrar pela pessoa
      if (seedTestLivroCaixa.filtroPessoa) {
        cy.getVisible(locLivroCaixa.lancamentos.selectPessoa).click()
          .contains(seedTestLivroCaixa.filtroPessoa).click()
      }

      // filtrar pelo tipo de lançamento
      if (seedTestLivroCaixa.filtroTipo) {
        cy.getVisible(locLivroCaixa.lancamentos.selectTipo).click()
        cy.getVisible(locLivroCaixa.lancamentos.selectTipo).find('ul').then(($el) => {
          if (seedTestLivroCaixa.filtroTipo === 'Entrada e Saída') {
            cy.get($el).children().eq(0).click()
          }
          else if (seedTestLivroCaixa.filtroTipo === 'Saída') {
            cy.get($el).children().eq(1).click()
          }
          else {
            cy.get($el).children().eq(2).click()
          }
        })
      }

      // filtrar pela origem do lançamento
      if (seedTestLivroCaixa.filtroOrigem) {
        cy.getVisible(locLivroCaixa.lancamentos.selectOrigem).click()
          .contains(seedTestLivroCaixa.filtroOrigem).click()
      }

      // filtrar por status ativo/inativo
      if (seedTestLivroCaixa.filtroStatus) {
        cy.getVisible(locLivroCaixa.lancamentos.selectOrigem).click()
          .contains(seedTestLivroCaixa.filtroStatus).click()
      }

      // filtrar por status dedutivel/naodedutivel
      if (seedTestLivroCaixa.filtroStatusDedutivel) {
        cy.getVisible(locLivroCaixa.lancamentos.selectStatusDedutivel).click()
        cy.getVisible(locLivroCaixa.lancamentos.selectStatusDedutivel).find('ul').then(($el) => {
          if (seedTestLivroCaixa.filtroStatusDedutivel === 'Dedutíveis e Não dedutíveis') {
            cy.get($el).children().eq(0).click()
          }
          else if (seedTestLivroCaixa.filtroStatusDedutivel === 'Dedutíveis') {
            cy.get($el).children().eq(1).click()
          }
          else {
            cy.get($el).children().eq(2).click()
          }
        })
      }
      cy.wait(2000)
    }

    cy.wait('@ApiLivroCaixa', { timeout: 20000 })

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
      var livrosCaixa = seedTestLivroCaixa.cardLivroCaixa
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
   * Validar detalhes do lançamento no Livro Caixa
   * @param {*} seedTestLancamentoLivroCaixa
   */
  validarLancamento(seedTestLancamentoLivroCaixa) {
    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', '/api/pessoa/v1/Pessoa/**/IE')
      .as('ApiPessoaIE')
    cy.intercept('GET', '/api/pessoa/v1/Pessoa/**')
      .as('ApiPessoa')
    cy.intercept('GET', '/api/financeiro/v1/LivroCaixa/ProdutorLivroCaixa?**')
      .as('ApiProdutorLivroCaixa')

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
    cy.get(locLivroCaixa.lancamentos.cardLancamentosConta)
      .contains(seedTestLancamentoLivroCaixa.contaContabil).click()

    // Aguarda carregamento dos dados no modal
    cy.wait('@ApiPessoa', { timeout: 10000 })
    cy.wait('@ApiPessoaIE', { timeout: 10000 })

    // Validar tipo de lancamento
    cy.getVisible(locLivroCaixa.adicionarLancamento.tipoLancamentoAtivo).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.tipoLancamento)
    })

    // Validar tipo de deducao
    cy.getVisible(locLivroCaixa.adicionarLancamento.tipoDeducaoAtivo).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.deducao)
    })

    // Validar conta contabil
    cy.getVisible(locLivroCaixa.adicionarLancamento.contaContabil).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.contaContabil)
    })

    // Validar fazenda
    cy.get(locLivroCaixa.adicionarLancamento.fazenda).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.fazenda)
    })

    // Validar tipo do documento
    cy.getVisible(locLivroCaixa.adicionarLancamento.tipoDocumento).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.tipoDocumento)
    })

    // Validar empresa
    cy.getVisible(locLivroCaixa.adicionarLancamento.empresa).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.empresa)
    })

    // Validar inscricao estadual
    cy.getVisible(locLivroCaixa.adicionarLancamento.inscricaoEstadual).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.inscricaoEstadual)
    })

    // Validar conta bancaria
    cy.getVisible(locLivroCaixa.adicionarLancamento.contaBancaria).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.contaBancaria)
    })

    // validar pessoa
    cy.getVisible(locLivroCaixa.adicionarLancamento.pessoa).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.pessoa)
    })

    // Validar status
    cy.getVisible(locLivroCaixa.adicionarLancamento.statusLancamentoAtivo).should(($el) => {
      expect($el).to.contain.text(seedTestLancamentoLivroCaixa.status)
    })

    // Fechar modal
    cy.getVisible(locLivroCaixa.adicionarLancamento.cancelar).click()
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
   * Adicionar lançamentos no Livro Caixa
   * @param {*} seedTestLivroCaixa 
   */
  adicionarEditarLancamento(seedTestLivroCaixa) {
    cy.intercept('GET', '/api/financeiro/v1/LivroCaixa/ProdutorLivroCaixa?**')
      .as('ApiProdutorLivroCaixa')

    // Navegar para Livro Caixa
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Abrir livro caixa produtor
    cy.get(locLivroCaixa.dashboard.cardProdutores)
      .contains(seedTestLivroCaixa.empresa).click()

    cy.wait('@ApiProdutorLivroCaixa', { timeout: 10000 })

    if (seedTestLivroCaixa.editar) {
      // Abrir lancamento livro caixa
      cy.get(locLivroCaixa.lancamentos.cardLancamentosConta)
        .contains(seedTestLivroCaixa.contaContabil).click()
    }
    else {
      // Clicar no ícone de adicionar lançamento
      cy.getVisible(locLivroCaixa.lancamentos.adicionarLancamento).click()

      // Validar modal de lançamento
      cy.getVisible(locLivroCaixa.adicionarLancamento.tituloModal)
      .contains(novoLancamento)
    }

    // selecionar o tipo de lançamento
    cy.getVisible(locLivroCaixa.adicionarLancamento.tipoLancamento)
      .contains(seedTestLivroCaixa.tipoLancamento).click()

    // espera necessária para que o tipo de lançamento fique estável
    cy.wait(2000)

    // selecionar o tipo de dedução
    cy.getVisible(locLivroCaixa.adicionarLancamento.tipoDeducao)
      .contains(seedTestLivroCaixa.deducao).click()

    // informar a data do lançamento
    cy.getVisible(locLivroCaixa.adicionarLancamento.data).clear()
      .type(`${seedTestLivroCaixa.data}{esc}`)

    // informar o valor
    cy.getVisible(locLivroCaixa.adicionarLancamento.valor).clear()
      .type(seedTestLivroCaixa.valor)

    // selecionar a conta contabil
    cy.getVisible(locLivroCaixa.adicionarLancamento.contaContabil).click()
      .contains(seedTestLivroCaixa.contaContabil).click()

    // informar o histórico 
    if (seedTestLivroCaixa.historico) {
      cy.getVisible(locLivroCaixa.adicionarLancamento.historico)
        .type(seedTestLivroCaixa.historico)
    }

    // selecionar o tipo de documento
    cy.getVisible(locLivroCaixa.adicionarLancamento.tipoDocumento).click()
      .contains(seedTestLivroCaixa.tipoDocumento).click()

    // selecionar a empresa
    cy.getVisible(locLivroCaixa.adicionarLancamento.empresa).click()
      .contains(seedTestLivroCaixa.empresaLancamento).click()

    // selecionar a inscrição estadual da empresa
    cy.getVisible(locLivroCaixa.adicionarLancamento.inscricaoEstadual).click()
      .contains(seedTestLivroCaixa.inscricaoEstadual).click()

    // selecionar a conta bancária de onde será realizada o débito/crédito
    cy.getVisible(locLivroCaixa.adicionarLancamento.contaBancaria).click()
      .contains(seedTestLivroCaixa.contaBancaria).click()

    // selecionar a pessoa
    cy.getVisible(locLivroCaixa.adicionarLancamento.pessoa).click()
      .contains(seedTestLivroCaixa.pessoa).click()

    // clicar em salvar o lançamento
    if (seedTestLivroCaixa.salvar) {
      cy.getVisible(locLivroCaixa.adicionarLancamento.salvar).click()
    }
    else {
      // cancelar o lançamento
      cy.getVisible(locLivroCaixa.adicionarLancamento.cancelar).click()
    }
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
