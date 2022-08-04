/// <reference types="cypress" />

import testDescription from './bdd-description/upload-ofx.description.js'
import seedTestConciliacao from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/conciliacao-bancaria/upload-ofx/upload-ofx.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import { adicionarConciliacao } from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'


context('Funcionalidade', () => {
    context('Movimentações Bancárias', () => {
        before(function () {
            const credenciais = Cypress.env('login_cenarios')
            Authenticate.login(credenciais)
        })

        after(() => {
            Authenticate.logout()
        })

        context('Upload de arquivo OFX', () => {
            describe('Upload de arquivo OFX de Conta Bancária', { tags: '@movimentacaoBancaria' }, () => {
                it('Válido, para conta cadastrada', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.contaValidaCadastrada)

                    adicionarConciliacao(seedTestConciliacao.contaValidaCadastrada)
                })

                it('Válido, para conta NÃO cadastrada', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.contaValidaNaoCadastrada)

                    adicionarConciliacao(seedTestConciliacao.contaValidaNaoCadastrada)
                })

                it('Inválido, sem tags de identificação da conta bancária', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.contaInvalidaSemTag)

                    adicionarConciliacao(seedTestConciliacao.contaInvalidaSemTagACCTID)
                })
            })

            describe('Cartão de Crédito', { tags: '@movimentacaoBancaria' }, () => {
                it('Válido, para cartão cadastrado', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoValidoCadastrado)

                    adicionarConciliacao(seedTestConciliacao.cartaoValido)
                })

                it('Válido, para cartão NÃO cadastrado', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoValidoNaoCadastrado)

                    adicionarConciliacao(seedTestConciliacao.cartaoNaoCadastrado)
                })

                it('Inválido, sem tags de identificação da numeração', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoInvalidoSemTag)

                    adicionarConciliacao(seedTestConciliacao.cartaoInvalidoSemTagACCTID)
                })
            })

            describe('Por banco', () => {
                it('Banco do Brasil', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoDoBrasil)

                    adicionarConciliacao(seedTestConciliacao.bancoDoBrasil)
                })

                it('Bradesco', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoBradesco)

                    adicionarConciliacao(seedTestConciliacao.bradesco)
                })

                it('Caixa', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoCaixa)

                    adicionarConciliacao(seedTestConciliacao.caixa)
                })

                it('Cartão de Crédito', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoValidoCadastrado)

                    adicionarConciliacao(seedTestConciliacao.cartaoDeCredito)
                })

                it('Itaú', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoItau)

                    adicionarConciliacao(seedTestConciliacao.itau)
                })

                it('Santander', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoSantander)

                    adicionarConciliacao(seedTestConciliacao.santander)
                })

                it('Sicred', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoSicred)

                    adicionarConciliacao(seedTestConciliacao.sicred)
                })
            })
        })
    })
})
