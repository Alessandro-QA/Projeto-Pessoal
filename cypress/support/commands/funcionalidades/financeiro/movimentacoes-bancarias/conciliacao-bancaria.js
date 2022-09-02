/// <reference types="cypress" />

import locConciliacaoBancaria from '../../../../locators/funcionalidades/financeiro/movimentacoes-bancarias/locators-conciliacao-bancaria.js'

class ConciliacaoBancaria {

    /**
    * Metodo para adicionar OFX para conciliação bancária
    * @param {*} seedTestConciliacao 
    */
    uploadOfx(seedTestConciliacao) {
        const url = '/financeiro/movimentacoes-bancarias/listagem'
        const locatorTituloPagina = locConciliacaoBancaria.dashboard.titulo
        const tituloPagina = 'Movimentações bancárias'

        cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/ListFilter?**').as('contaBancaria')

        // Navegar para Movimentação Bancaria
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        // Espera necessária para carrecar os componentes da tela
        cy.wait('@contaBancaria', { timeout: 10000 })

        // Abrir opções de movimentação
        cy.getVisible(locConciliacaoBancaria.movimentacaoMenu.dropdownMovimentacoes).click()

        // Clicar em adicionar Conciliação
        cy.getVisible(locConciliacaoBancaria.movimentacaoMenu.conciliacao).click()

        // Adicionar conciliação
        cy.getVisible(locConciliacaoBancaria.adicaoConciliacaoBancaria.titulo).should(($el) => {
            expect($el).to.contain.text('Adição de Conciliação Bancária')
        })

        // Fazer upload do arquivo
        cy.get(locConciliacaoBancaria.adicaoConciliacaoBancaria.uploadOfx)
            .selectFile(seedTestConciliacao.caminhoArquivo, { force: true })

        if (seedTestConciliacao.continuarConciliacao) {
            cy.getVisible(locConciliacaoBancaria.adicaoConciliacaoBancaria.mensagemModal).should(($el) => {
                expect($el).to.contain.text(seedTestConciliacao.mensagem)
            })
            cy.get(locConciliacaoBancaria.adicaoConciliacaoBancaria.continuarConciliacao).click()
        } else {
            if (seedTestConciliacao.valido) {
                // Validar mensagem conciliação
                cy.getVisible(locConciliacaoBancaria.adicaoConciliacaoBancaria.mensagemModal).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.mensagem)
                })
                cy.get(locConciliacaoBancaria.adicaoConciliacaoBancaria.buttonClose).click()
            } else {
                cy.getVisible(locConciliacaoBancaria.adicaoConciliacaoBancaria.mensagemAlerta).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.mensagem)
                })
            }
        }
    }

    /**
    * Metodo para validar lancamento PRESENTE Na conciliação bancária no extrato do MyFarm
    *   @param {*} seedTestConciliacao 
    */
    validarLancamentoPresenteMyFarm(seedTestConciliacao) {

        // Periodo de Referencia
        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.periodoReferencia).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.periodoReferencia)
        })

        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.divergenciasExtratoMyFarm)
            .within(() => {
                // Nome do banco e conta bancária
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.banco).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.banco)
                })

                // Saldo total
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.saldoTotal).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.saldoTotal)
                })

                // Data do Lancamento
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.dataLancamento).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.dataLancamento)
                })

                // Mensagem do card
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.cardLancamentoAusente).should(($el) => {
                    expect($el).to.contain.text('Lançamento Ausente')
                    expect($el).to.contain.text('Os dados informados no Extrato Bancário, à esquerda, não constam no Extrato do myFarm. clique no card e adicione os lançamentos manualmente.')
                })

                // Conciliacao do dia
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.conciliacaoDoDia).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.conciliacaoDoDia)
                })

                // Saldo do dia
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.saldoDoDia).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.saldoDoDia)
                })
            })

        // Validar rodapé
        cy.get(locConciliacaoBancaria.validacaoDivergencias.footer).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.totalDivergencia)
            expect($el).to.contain.text(seedTestConciliacao.lancamentosAConfirmar)
        })
    }

    /**
    * Metodo para validar lancamento AUSENTE na conciliação bancária no extrato do MyFarm
    * @param {*} seedTestConciliacao 
    */
    validarLancamentoAusenteMyFarm(seedTestConciliacao) {

        this.uploadOfx(seedTestConciliacao)

        // Periodo de Referencia
        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.periodoReferencia).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.periodoReferencia)
        })

        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.divergenciasExtratoMyFarm)
            .within(() => {
                // Nome do banco e conta bancária
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.banco).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.banco)
                })

                // Saldo total
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.saldoTotal).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.saldoTotal)
                })

                // Data do Lancamento
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.dataLancamento).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.dataLancamento)
                })

                // Mensagem do card
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.cardLancamentoAusente).should(($el) => {
                    expect($el).to.contain.text('Lançamento Ausente')
                    expect($el).to.contain.text('Os dados informados no Extrato Bancário, à esquerda, não constam no Extrato do myFarm. clique no card e adicione os lançamentos manualmente.')
                })

                // Conciliacao do dia
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.conciliacaoDoDia).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.conciliacaoDoDia)
                })

                // Saldo do dia
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoMyFarm.saldoDoDia).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoMyFarm.saldoDoDia)
                })
            })

        // Validar rodapé
        cy.get(locConciliacaoBancaria.validacaoDivergencias.footer).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.totalDivergencia)
            expect($el).to.contain.text(seedTestConciliacao.lancamentosAConfirmar)
        })
    }

    /**
    * Metodo para validar lancamento PRESENTE na conciliação bancária no Extrato Bancario
    * @param {*} seedTestConciliacao 
    */
    validarLancamentoPresenteExtratoBancario(seedTestConciliacao) {
        this.uploadOfx(seedTestConciliacao)

        // Periodo de Referencia
        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.periodoReferencia).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.periodoReferencia)
        })

        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.divergenciasExtratoBancario)
            .within(() => {
                // Nome do banco (conta bancária)
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.banco).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.banco)
                })

                // Saldo total
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.saldoTotal).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.saldoTotal)
                })

                // Data do Lancamento
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.dataLancamento).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.dataLancamento)
                })

                const lancamentos = seedTestConciliacao.extratoBancario.lancamentos

                lancamentos.forEach((lancamento) => {
                    // Descricao do Lancamento
                    cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.descricaoItem).should(($el) => {
                        expect($el).to.contain.text(lancamento.descricao)
                    })

                    // Valor do Lancamento
                    cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.valorItem).should(($el) => {
                        expect($el).to.contain.text(lancamento.valor)
                    })

                    // Data do Lancamento
                    cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.dataItem).should(($el) => {
                        expect($el).to.have.value(lancamento.data)
                    })

                    // Saldo do dia
                    cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.saldoDoDia).should(($el) => {
                        expect($el).to.contain.text(lancamento.saldoDoDia)
                    })
                })
            })

        // Validar rodapé
        cy.get(locConciliacaoBancaria.validacaoDivergencias.footer).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.totalDivergencia)
            expect($el).to.contain.text(seedTestConciliacao.lancamentosAConfirmar)
        })
    }

    /**
    * Metodo para validar lancamento INDEVIDO na conciliação bancária no Extrato do Bancário
    * @param {*} seedTestConciliacao 
    */
    validarLancamentoIndevidoExtratoBancario(seedTestConciliacao) {

        // Periodo de Referencia
        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.periodoReferencia).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.periodoReferencia)
        })

        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.divergenciasExtratoBancario)
            .within(() => {
                // Nome do banco e conta bancária
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.banco).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.banco)
                })

                // Saldo total
                cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.saldoTotal).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.saldoTotal)
                })

                // Data do Lancamento
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.dataLancamento).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.dataLancamento)
                })

                // Mensagem do card
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.cardLancamentoIndevido).should(($el) => {
                    expect($el).to.contain.text('Lançamento Indevido')
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.descricao)
                })

                // Saldo do dia
                cy.get(locConciliacaoBancaria.validacaoDivergencias.extratoBancario.saldoDoDia).should(($el) => {
                    expect($el).to.contain.text(seedTestConciliacao.extratoBancario.saldoDoDia)
                })
            })

        // Validar rodapé
        cy.get(locConciliacaoBancaria.validacaoDivergencias.footer).should(($el) => {
            expect($el).to.contain.text(seedTestConciliacao.totalDivergencia)
            expect($el).to.contain.text(seedTestConciliacao.lancamentosAConfirmar)
        })
    }

    /**
    * Metodo para finalizar a conciliacao bancaria 
    */
    finalizarConciliacao() {
        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.buttoFinalizarConciliacao).click()
        cy.getVisible(locConciliacaoBancaria.validacaoDivergencias.mensagemSucesso).should(($el) => {
            expect($el).to.contain.text('Conciliação realizada com sucesso')
        })
    }
}

export default new ConciliacaoBancaria()
