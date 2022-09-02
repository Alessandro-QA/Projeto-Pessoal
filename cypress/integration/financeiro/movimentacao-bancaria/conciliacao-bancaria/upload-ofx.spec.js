/// <reference types="cypress" />

import testDescription from './bdd-description/upload-ofx.description.js'
import seedTestConciliacao from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/conciliacao-bancaria/upload-ofx/upload-ofx.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import { uploadOfx } from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/conciliacao-bancaria.js'

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
            describe('Conta Bancária', { tags: '@movimentacaoBancaria' }, () => {
                it('Válido, para conta cadastrada', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.contaValidaCadastrada)

                    uploadOfx(seedTestConciliacao.contaValidaCadastrada)
                })

                it('Válido, para conta NÃO cadastrada', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.contaValidaNaoCadastrada)

                    uploadOfx(seedTestConciliacao.contaValidaNaoCadastrada)
                })

                it('Inválido, sem tags de identificação da conta bancária', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.contaInvalidaSemTag)

                    uploadOfx(seedTestConciliacao.contaInvalidaSemTagACCTID)
                })
            })

            describe('Cartão de Crédito', { tags: '@movimentacaoBancaria' }, () => {
                it('Válido, para cartão cadastrado', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoValidoCadastrado)

                    uploadOfx(seedTestConciliacao.cartaoValido)
                })

                it('Válido, para cartão NÃO cadastrado', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoValidoNaoCadastrado)

                    uploadOfx(seedTestConciliacao.cartaoNaoCadastrado)
                })

                it('Inválido, sem tags de identificação da numeração', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoInvalidoSemTag)

                    uploadOfx(seedTestConciliacao.cartaoInvalidoSemTagACCTID)
                })
            })

            describe('Por banco', () => {
                it('Banco do Brasil', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoDoBrasil)

                    uploadOfx(seedTestConciliacao.bancoDoBrasil)
                })

                it('Bradesco', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoBradesco)

                    uploadOfx(seedTestConciliacao.bradesco)
                })

                it('Caixa', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoCaixa)

                    uploadOfx(seedTestConciliacao.caixa)
                })

                it('Cartão de Crédito', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.cartaoValidoCadastrado)

                    uploadOfx(seedTestConciliacao.cartaoDeCredito)
                })

                it('Itaú', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoItau)

                    uploadOfx(seedTestConciliacao.itau)
                })

                it('Santander', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoSantander)

                    uploadOfx(seedTestConciliacao.santander)
                })

                it('Sicred', function () {
                    cy.allure().severity('critical').startStep('test content')
                        .descriptionHtml(testDescription.bancoSicred)

                    uploadOfx(seedTestConciliacao.sicred)
                })
            })
        })
    })
})
