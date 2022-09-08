/// <reference types="cypress" />

import testDescription from './bdd-description/lancamento-indevido.description.js'
import seedTestConciliacao from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/conciliacao-bancaria/conciliacao/lancamento-indevido/conciliacao.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import ConciliacaoBancaria from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/conciliacao-bancaria.js'
import Movimentacao from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'

context('Funcionalidade', () => {
    context('Movimentações Bancárias', () => {
        before(function () {
            const credenciais = Cypress.env('login_cenarios')
            Authenticate.login(credenciais)
        })

        after(() => {
            Authenticate.logout()
        })

        context('Conciliação Bancária', () => {
            describe('Lançamento Indevido - Pagamento', { tags: '@movimentacaoBancaria' }, () => {
                it('Adicionar pagamento indevido', function () {
                    cy.allure().severity('normal').startStep('test content').descriptionHtml(testDescription.pagamento)

                    Movimentacao.adicionarPagamentoRecebimento(seedTestConciliacao.pagamento)
                })

                it('Validar card no Extrato Bancário', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoIndevidoExtratoBancario(seedTestConciliacao.lancamentoIndevidoPagamento)
                })

                it('Validar card no Extrato do MyFarm', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoPresenteMyFarm(seedTestConciliacao.lancamentoIndevidoPagamento)
                })

                it('Finalizar a Conciliação Bancária', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.finalizarConciliacao)

                    ConciliacaoBancaria.finalizarConciliacao(seedTestConciliacao.lancamentoIndevidoPagamento)
                })
            })

            describe('Lançamento Indevido - Recebimento', { tags: '@movimentacaoBancaria' }, () => {
                it('Adicionar recebimento indevido', function () {
                    cy.allure().severity('normal').startStep('test content').descriptionHtml(testDescription.recebimento)

                    Movimentacao.adicionarPagamentoRecebimento(seedTestConciliacao.recebimento)
                })

                it('Validar card no Extrato Bancário', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoIndevidoExtratoBancario(seedTestConciliacao.lancamentoIndevidoRecebimento)
                })

                it('Validar card no Extrato do MyFarm', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoIndevido)

                    ConciliacaoBancaria.validarLancamentoPresenteMyFarm(seedTestConciliacao.lancamentoIndevidoRecebimento)
                })

                it('Finalizar a Conciliação Bancária', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.finalizarConciliacao)

                    ConciliacaoBancaria.finalizarConciliacao(seedTestConciliacao.lancamentoIndevidoRecebimento)
                })
            })
        })
    })
})
