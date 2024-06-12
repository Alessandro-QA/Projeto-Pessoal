/// <reference types="cypress" />

import testDescription from './bdd-description/lancamento-indevido.description.js'
import seedTestConciliacao from '../../../../fixtures/financeiro/movimentaca-bancaria/conciliacao-bancaria/conciliacao/lancamento-indevido/conciliacao.json'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import ConciliacaoBancaria from '../../../../support/commands/financeiro/movimentacoes-bancarias/conciliacao-bancaria.js'
import Movimentacao from '../../../../support/commands/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
    before(function () {
        const credenciais = Cypress.env('login_cenarios')
        Authenticate.login(credenciais)
    })

    after(() => {
        Authenticate.logout()
    })

    describe('Movimentações Bancárias', { tags: '@movimentacoesBancarias' }, () => {
        context('Adicionar Conciliação Bancária', () => {
            describe('Lançamento Indevido - Pagamento', () => {
                it('Deve adicionar pagamento indevido', function () {
                    // cy.allure().severity('normal').startStep('test content').descriptionHtml(testDescription.pagamento)

                    Movimentacao.adicionarPagamentoRecebimento(seedTestConciliacao.pagamento)
                })

                it('Deve validar card no Extrato Bancário', function () {
                    // cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoIndevidoExtratoBancario(seedTestConciliacao.lancamentoIndevidoPagamento)
                })

                it('Deve validar card no Extrato do MyFarm', function () {
                    // cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoPresenteMyFarm(seedTestConciliacao.lancamentoIndevidoPagamento)
                })

                it('Deve finalizar a Conciliação Bancária', function () {
                    // cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.finalizarConciliacao)

                    ConciliacaoBancaria.finalizarConciliacao(seedTestConciliacao.lancamentoIndevidoPagamento)
                })
            })

            describe('Lançamento Indevido - Recebimento', { tags: '@movimentacaoBancaria' }, () => {
                it('Deve adicionar recebimento indevido', function () {
                    // cy.allure().severity('normal').startStep('test content').descriptionHtml(testDescription.recebimento)

                    Movimentacao.adicionarPagamentoRecebimento(seedTestConciliacao.recebimento)
                })

                it('Deve validar card no Extrato Bancário', function () {
                    // cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoIndevidoExtratoBancario(seedTestConciliacao.lancamentoIndevidoRecebimento)
                })

                it('Deve validar card no Extrato do MyFarm', function () {
                    // cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoPresenteMyFarm(seedTestConciliacao.lancamentoIndevidoRecebimento)
                })

                it('Deve finalizar a Conciliação Bancária', function () {
                    // cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.finalizarConciliacao)

                    ConciliacaoBancaria.finalizarConciliacao(seedTestConciliacao.lancamentoIndevidoRecebimento)
                })
            })
        })
    })
})
