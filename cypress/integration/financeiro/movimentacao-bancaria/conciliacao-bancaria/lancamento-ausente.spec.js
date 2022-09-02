/// <reference types="cypress" />

import testDescription from './bdd-description/lancamento-ausente.description.js'
import seedTestConciliacao from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/conciliacao-bancaria/conciliacao/lancamento-ausente/conciliacao.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import ConciliacaoBancaria from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/conciliacao-bancaria.js'

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
            describe('Lançamento Ausente - Pagamento', { tags: '@movimentacaoBancaria' }, () => {
                it('Validar card no Extrato Bancário', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoPresenteExtratoBancario(seedTestConciliacao.lancamentoAusentePagamento)
                })

                it('Validar card no Extrato do MyFarm e finalizar conciliação', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoAusenteMyFarm(seedTestConciliacao.lancamentoAusentePagamento)
                    ConciliacaoBancaria.finalizarConciliacao()
                })


            })

            describe('Lançamento Ausente - Recebimento', { tags: '@movimentacaoBancaria' }, () => {
                it('Validar card no Extrato Bancário', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoPresenteExtratoBancario(seedTestConciliacao.lancamentoAusenteRecebimento)
                })

                it('Validar card no Extrato do MyFarm e finalizar conciliação', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.lancamentoAusente)

                    ConciliacaoBancaria.validarLancamentoAusenteMyFarm(seedTestConciliacao.lancamentoAusenteRecebimento)
                    ConciliacaoBancaria.finalizarConciliacao()
                })
            })
        })
    })
})
