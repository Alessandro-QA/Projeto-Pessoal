/// <reference types="cypress" />

import locAgendaFinanceira from '../../../locators/financeiro/agenda-financeira/locators-agenda-financeira.js'

class AgendaFinanceira {
  /**
   * Pagar titulo pela tela de listagem na agenda financeira
   * @param {*} seedTestAgendaFinanceira
   */
  pagarPelaAgenda(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'

    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Recebimento`).as('apiRecebimento')
    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`).as('listagemAgenda')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Agenda Financeira')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        cy.wait('@listagemAgenda')
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    });

    cy.log('Pesquisar por numero do documento')
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}`)

    cy.get(locAgendaFinanceira.dashboard.cardAgenda)
      .contains(seedTestAgendaFinanceira.numeroDocumento)
      .parents(locAgendaFinanceira.dashboard.cardAgenda).within(() => {
        cy.log('Realizar pagamento')
        cy.getVisible(locAgendaFinanceira.dashboard.buttonReceberOuPagar)
          .should('exist').click()
      })

    cy.log('Confirmar pagamento')
    cy.getVisible(locAgendaFinanceira.dashboard.buttonConfirmarPagamento)
      .should('exist').click()

    cy.wait('@apiRecebimento')

    cy.get(locAgendaFinanceira.dashboard.mensagemSucessoPagamento).then(($message) => {
      if (seedTestAgendaFinanceira.moedaEstrangeira) {
        if (seedTestAgendaFinanceira.pagamento) {
          expect($message).exist.and.to.contain.text('OPS! Não permitido realizar o pagamento rápido para titulos negociados em moeda alternativa')
        } else {
          expect($message).exist.and.to.contain.text('OPS! Não permitido realizar o recebimento rápido para titulos negociados em moeda alternativa')
        }
      }
      else if (seedTestAgendaFinanceira.pagamento) {
        expect($message).exist.and.to.contain.text('Pagamento realizado com sucesso')
      } else {
        expect($message).exist.and.to.contain.text('Recebimento realizado com sucesso')
      }
    })

    cy.wait('@listagemAgenda')
  }

  /**
   * Método para pagar o títulos em lote via listagem da Agenda Financeira
   * @param {*} seedTestAgendaFinanceira 
   */
  pagarReceberLote(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'
    const tituloPagamento = 'Pagamento de títulos'
    const tituloRecebimento = 'Recebimento de títulos'

    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Recebimento`)
      .as('apiRecebimento')
    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`)
      .as('listagemAgenda')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Agenda Financeira')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        cy.wait('@listagemAgenda')
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    });

    const cards = seedTestAgendaFinanceira.cardsAgenda
    cards.forEach((card) => {

      cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
        .clear().type(card.cardNumeroDocumento)

      cy.getVisible(locAgendaFinanceira.dashboard.titulo).click({ force: true })

      cy.wait('@listagemAgenda')

      cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento)
        .contains(card.cardNumeroDocumento)
        .parents(locAgendaFinanceira.dashboard.cardBoard)
        .within(() => {
          cy.get(locAgendaFinanceira.dashboard.marcarCard)
            .click({ force: true })
        })

      cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
        .clear()

      cy.getVisible(locAgendaFinanceira.dashboard.titulo).click({ force: true })

    })

    cy.getVisible(locAgendaFinanceira.dashboard.efetuarPagamento).click()

    if (seedTestAgendaFinanceira.pagamentoTitulo) {
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimentoLote.titulo).should(($el) => {
        expect($el).to.contain.text(tituloPagamento)
      })
    }
    else {
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimentoLote.titulo).should(($el) => {
        expect($el).to.contain.text(tituloRecebimento)
      })
    }

    cy.getVisible(locAgendaFinanceira.pagamentoRecebimentoLote.dadosRecimento)
      .find(locAgendaFinanceira.pagamentoRecebimentoLote.formaPagamento).click()
      .getVisible(locAgendaFinanceira.pagamentoRecebimentoLote.selectFormaPagamento)
      .contains(seedTestAgendaFinanceira.formaPagamento).click()

    cy.getVisible(locAgendaFinanceira.pagamentoRecebimentoLote.buttonConfirmarPagamentoRecebimento).click()

    cy.get(locAgendaFinanceira.dashboard.mensagemSucessoPagamento).then(($message) => {
      if (seedTestAgendaFinanceira.moedaEstrangeira) {
        expect($message).exist.and.to.contain.text('OPS! Não permitido recebimento/pagamento em Lote para títulos negociados em moeda alternativa')
      }
      else if (seedTestAgendaFinanceira.pagamento) {
        expect($message).exist.and.to.contain.text('Pagamento feito com sucesso')
      } else {
        expect($message).exist.and.to.contain.text('Recebimento feito com sucesso')
      }
    })
    cy.wait('@listagemAgenda')
  }

  /**
   * Metodo para pagar documento via tela de detalhes
   * @param {*} seedTestAgendaFinanceira 
   */
  pagarReceberTitulo(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'

    cy.intercept('POST', '/api/financeiro/v1/Agenda/Recebimento').as('apiRecebimento')
    cy.intercept('POST', '/api/financeiro/v1/Agenda/Listagem').as('listagemAgenda')
    cy.intercept('GET', '/api/financeiro/v1/Titulo/**').as('getTitulo')
    cy.intercept('GET', '/api/financeiro/v1/Moeda/**').as('getMoeda')

    cy.log('Navegar para Agenda Financeira')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.log('Selecionar Empresa')
    cy.getVisible(locAgendaFinanceira.dashboard.filtroEmpresa)
      .contains(seedTestAgendaFinanceira.empresa).click()

    cy.log('Selecionar Fazenda')
    cy.getVisible(locAgendaFinanceira.dashboard.filtroFazenda)
      .contains(seedTestAgendaFinanceira.fazenda).click()

    cy.log('Pesquisar por numero do documento')
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}{enter}`)

    cy.wait('@listagemAgenda')

    cy.log('Selecionar card na agenda financeira')
    cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento)
      .contains(seedTestAgendaFinanceira.numeroDocumento)
      .parent(locAgendaFinanceira.dashboard.cardAgenda)
      .within(($cardAgenda) => {
        cy.log('card deve existir e estar visivel')
        cy.get($cardAgenda).should('exist').and('be.visible')

        cy.log('abrir detalhes do titulo')
        cy.getVisible($cardAgenda).click()
      })

    cy.wait('@getTitulo')

    cy.reload()

    cy.log('clicar no botão para ir ao modal de recebimento/pagamento')
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.efetuarPagamento).click({ timeout: 30000 })

    cy.log('Selecionar forma de pagamento')
    if (seedTestAgendaFinanceira.formaPagamento) {
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.formaPagamento).click()
        .contains(seedTestAgendaFinanceira.formaPagamento).click()

      cy.log('Informar a data do pagamento/recebimento')
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.dataPagamento)
        .clear().type(`${seedTestAgendaFinanceira.dataPagamento}{enter}`)

      cy.log('Selecionar a conta bancaria')
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.contaBancaria).click()
        .contains(seedTestAgendaFinanceira.contaBancaria).click()

      cy.log('Selecionar tag')
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.tags).click()
        .contains(seedTestAgendaFinanceira.tags).click()

      cy.log('Infomar uma Observação no pagamento / recebimento')
      cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.observacao)
        .clear().type(`${seedTestAgendaFinanceira.observacao}{enter}`)
    }

    if (seedTestAgendaFinanceira.valor) {
      if (!seedTestAgendaFinanceira.moedaEstrangeira) {
        cy.log('Informar o valor de pagamento')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.valor)
          .clear().type(`${seedTestAgendaFinanceira.valor}{enter}`)
      }
      else {
        cy.wait('@getMoeda')

        cy.log('Validar valor do titulo em moeda estrangeira')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.valorEmMoedaEstrangeira).should(($el) => {
          expect($el).to.contains.text(seedTestAgendaFinanceira.valorEmMoedaEstrangeira)
        })

        cy.log('Validar valor pago em moeda estrangeira')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.valorPagoEmMoedaEstrangeira).should(($el) => {
          expect($el).to.contains.value(seedTestAgendaFinanceira.valorPagoMoedaEstrangeira)
        })

        cy.log('Validar input otação no dia do pagamento')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.cotacaoDiaPagamento)
          .clear().realType(seedTestAgendaFinanceira.cotacaoDiaPagamento)


        cy.log('Validar valor do titulo')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.valorDoTitulo).should(($el) => {
          expect($el).to.contains.text(seedTestAgendaFinanceira.valorTitulo)
        })

        cy.log('Validar cotação')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.cotacao).should(($el) => {
          expect($el).to.contains.text(seedTestAgendaFinanceira.cotacao)
        })

        cy.log('Validar valor')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.valorCalculado).should(($el) => {
          expect($el).to.contains.value(seedTestAgendaFinanceira.valor)
        })

        if (seedTestAgendaFinanceira.variacaoCambial) {
          cy.log('Validar Variacao Cambial')
          cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.variacaoCambial).should(($el) => {
            expect($el).to.contains.value(seedTestAgendaFinanceira.variacaoCambial)
          })
        }

        cy.log('Validar Total a pagar')
        cy.getVisible(locAgendaFinanceira.pagamentoRecebimento.totalPagarMoedaEstrangeira).should(($el) => {
          expect($el).to.contains.value(seedTestAgendaFinanceira.totalPagar)
        })
      }
    }

    cy.wait('@listagemAgenda')

    cy.log('Botao de recebimento / pagamento')
    cy.get(locAgendaFinanceira.pagamentoRecebimento.botaoPagarReceber).click({ force: true })

    cy.get(locAgendaFinanceira.pagamentoRecebimento.mensagemSucessoPagamento).then(($message) => {
      if (seedTestAgendaFinanceira.pagamento) {
        expect($message).exist.and.to.contain.text('pagamento realizado com sucesso')
      } else {
        expect($message).exist.and.to.contain.text('recebimento realizado com sucesso')
      }
    })

    cy.wait('@apiRecebimento')
  }

  /**
   * Método para validar títulos pagos e recebidos
   * @param {*} seedTestAgendaFinanceira 
   */
  validarPagosRecebidos(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'

    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`).as('listagemAgenda')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Agenda Financeira')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        cy.wait('@listagemAgenda')
      }
      cy.log(currentPath)
    });

    cy.getVisible(locAgendaFinanceira.dashboard.buttonFiltros).click()

    cy.getVisible(locAgendaFinanceira.dashboard.limparFiltros).click()

    const cards = seedTestAgendaFinanceira.cardsAgenda
    cards.forEach((card) => {

      cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
        .clear().type(card.cardNumeroDocumento)

      cy.getVisible(locAgendaFinanceira.dashboard.titulo).click({ force: true })

      cy.wait('@listagemAgenda')

      cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento)
        .contains(card.cardNumeroDocumento)
        .parents(locAgendaFinanceira.dashboard.cardBoard)

      cy.get(locAgendaFinanceira.dashboard.cardAgenda)
        .within(() => {
          cy.get(locAgendaFinanceira.dashboard.status)
            .invoke('text')
            .then((status) => {
              const cleanedStatus = status.replace(/\s+/g, ' ').trim();
              cy.log('Status:', cleanedStatus);
              if (seedTestAgendaFinanceira.tipoDocumento === 'A pagar') {
                expect(cleanedStatus).to.equal('Pago');
              } else if (seedTestAgendaFinanceira.tipoDocumento === 'A receber') {
                expect(cleanedStatus).to.equal('Recebido');
              }
            });

            cy.get(locAgendaFinanceira.dashboard.cardNomePessoa).should('have.text', card.cardPessoa )
            cy.get(locAgendaFinanceira.dashboard.cardValor).should('have.text', card.cardValor )
            cy.get(locAgendaFinanceira.dashboard.cardSaldoAPagar).should('have.text', card.cardSaldo )
        });

      cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
        .clear()

      cy.getVisible(locAgendaFinanceira.dashboard.titulo).click({ force: true })

    })

    
  }

  /**
   * Validar titulo pela Agenda Financeira
   * @param {*} seedTestAgendaFinanceira
   */
  validarDashboard(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'

    cy.intercept('POST', '/api/financeiro/v1/Agenda/Listagem').as('listagemAgenda')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Agenda Financeira')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        cy.wait('@listagemAgenda')
      }
      cy.log(currentPath)
    });

    if (seedTestAgendaFinanceira.status === 'Pagos') {
      cy.getVisible(locAgendaFinanceira.dashboard.buttonFiltros).click()
      cy.get(locAgendaFinanceira.dashboard.checkBoxTipoPagamento)
        .should('exist').and('be.visible')
        .contains(seedTestAgendaFinanceira.status).click()

        cy.wait('@listagemAgenda')
    }

    cy.log('Pesquisar por numero do documento')
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}{enter}`)

      cy.wait('@listagemAgenda')

    cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento)
      .contains(seedTestAgendaFinanceira.cardNumeroDocumento)
      .parent(locAgendaFinanceira.dashboard.cardAgenda).within(() => {
        cy.log('Validar dados do card de Agenda Financeira')
        if (seedTestAgendaFinanceira.cardStatusDocumento === 'Recebido') {
          cy.get(locAgendaFinanceira.dashboard.statusRecebido).should(($el) => {
            expect($el).to.have.text(seedTestAgendaFinanceira.cardStatusDocumento)
          })
        } else {
          cy.get(locAgendaFinanceira.dashboard.status).should(($el) => {
            const text = $el.text().trim(); // Remove espaços em branco no início e no final
            expect(text).to.equal(seedTestAgendaFinanceira.cardStatusDocumento);
          });
        }

        cy.get(locAgendaFinanceira.dashboard.cardNomePessoa).should(($el) => {
          expect($el).to.have.text(seedTestAgendaFinanceira.cardPessoaDocumento)
        })
        cy.get(locAgendaFinanceira.dashboard.cardValor).should(($el) => {
          const text = $el.text().replace('R$', '').replace(/\./g, '').replace(',', '.').trim(); // Remove 'R$', substitui pontos por nada e vírgulas por pontos
          expect(text).to.include(seedTestAgendaFinanceira.cardValorDocumento);
        })
        cy.get(locAgendaFinanceira.dashboard.cardSaldoAPagar).should(($el) => {
          const text = $el.text().replace('R$', '').replace(/\./g, '').replace(',', '.').trim(); // Remove 'R$', substitui pontos por nada e vírgulas por pontos
          expect(text).to.include(seedTestAgendaFinanceira.cardSaldoAPagar);
        })
        cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento).should(($el) => {
          expect($el).to.have.text(seedTestAgendaFinanceira.cardNumeroDocumento)
        })
      })
  }

  /**
   * Validar detalhes na agenda financeira
   * @param {*} seedTestAgendaFinanceira
   */
  validarDetalhes(seedTestAgendaFinanceira) {
    const url = '/financeiro/agenda-financeira'
    const locatorTituloPagina = locAgendaFinanceira.dashboard.titulo
    const tituloPagina = 'Agenda financeira'
    cy.log('Navegar para Agenda Financeira')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.log('Selecionar Empresa')
    cy.getVisible(locAgendaFinanceira.dashboard.filtroEmpresa)
      .contains(seedTestAgendaFinanceira.empresaDocumento).click()

    cy.log('Selecionar Fazenda')
    cy.getVisible(locAgendaFinanceira.dashboard.filtroFazenda)
      .contains(seedTestAgendaFinanceira.fazendaDocumento).click()

    cy.log('Pesquisar por numero do documento')
    cy.getVisible(locAgendaFinanceira.dashboard.pesquisarDocumento)
      .clear().type(`${seedTestAgendaFinanceira.numeroDocumento}{enter}`)

    cy.get(locAgendaFinanceira.dashboard.cardNumeroDocumento)
      .contains(seedTestAgendaFinanceira.cardNumeroDocumento)
      .parent(locAgendaFinanceira.dashboard.cardAgenda)
      .within(($cardAgenda) => {
        cy.log('card deve existir e estar visivel')
        cy.get($cardAgenda).should('exist').and('be.visible')

        cy.log('abrir detalhes do titulo')
        cy.getVisible($cardAgenda).click()
      })

    cy.log('validar status do titulo')
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.statusTitulo).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.statusTitulo)
    })

    cy.log('valor do titulo')
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.valorTitulo).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.valorTitulo)
    })

    cy.log('forma de pagamento')
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.formaPagamento).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.formaPagamento)
    })

    cy.log('condicao de pagamento')
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.condicaoPagamento).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.condicaoPagamento)
    })

    cy.log('nome fornecedor')
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.fornecedor).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.fornecedor)
    })

    cy.log('cnpj fornecedor')
    cy.getVisible(locAgendaFinanceira.detalhesTitulo.cnpj).should(($el) => {
      expect($el).to.contain.text(seedTestAgendaFinanceira.cnpj)
    })

    if (seedTestAgendaFinanceira.validarTabelaHistorico) {
      cy.log('valor')
      cy.get(locAgendaFinanceira.detalhesTitulo.tabelaHistoricoPagamento).should(($tabela) => {
        expect($tabela).to.contain(seedTestAgendaFinanceira.valor)
        expect($tabela).to.contain(seedTestAgendaFinanceira.valorPagamento)
        expect($tabela).to.contain(seedTestAgendaFinanceira.contaBancaria)
        expect($tabela).to.contain(seedTestAgendaFinanceira.tipo)
      })
    }
  }
}

export default new AgendaFinanceira()
