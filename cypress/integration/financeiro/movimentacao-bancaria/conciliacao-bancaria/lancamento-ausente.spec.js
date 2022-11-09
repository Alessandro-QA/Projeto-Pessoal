/// <reference types="cypress" />

import testDescription from './bdd-description/lancamento-ausente.description.js'
import seedTestConciliacao from '../../../../fixtures/financeiro/movimentaca-bancaria/conciliacao-bancaria/conciliacao/lancamento-ausente/conciliacao.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import ConciliacaoBancaria from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/conciliacao-bancaria.js'

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
            context('Lançamento Ausente - Pagamento', () => {
                it('Deve validar card no Extrato Bancário', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoPresenteExtratoBancario(seedTestConciliacao.lancamentoAusentePagamento)
                })

                it('Deve validar card no Extrato do MyFarm e finalizar conciliação', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoAusenteMyFarm(seedTestConciliacao.lancamentoAusentePagamento)
                })

                it('Deve finalizar a Conciliação Bancária', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.finalizarConciliacao)

                    ConciliacaoBancaria.finalizarConciliacao(seedTestConciliacao.lancamentoAusentePagamento)
                })
            })

            context('Lançamento Ausente - Recebimento', () => {
                it('Deve validar card no Extrato Bancário', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoPresenteExtratoBancario(seedTestConciliacao.lancamentoAusenteRecebimento)
                })

                it('Deve validar card no Extrato do MyFarm e finalizar conciliação', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoAusenteMyFarm(seedTestConciliacao.lancamentoAusenteRecebimento)
                })

                it('Deve finalizar a Conciliação Bancária', function () {
                    cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.finalizarConciliacao)

                    ConciliacaoBancaria.finalizarConciliacao(seedTestConciliacao.lancamentoAusentePagamento)
                })
            })
        })
    })
})
