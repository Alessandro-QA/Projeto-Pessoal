/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/documentos/edicao/documentos.json'
import seedTestDocumento from '../../../../fixtures/financeiro/documentos/edicao/editar-documento.json'
import { editar, listagem, validarDetalhes } from '../../../../support/commands/financeiro/documentos/documentos.js'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import testDescritpion from './bdd-description/editar-documento.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
	var dataAtual = Utils.getDate()
	var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

	var bodyDocumento8765432 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento8765432)
	var bodyDocumento789456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento789456)
	var bodyDocumento357357 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento357357)
	var bodyDocumento741852 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento741852)
	var bodyDocumento369852 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento369852)
	var bodyDocumento564321 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento564321)
	var bodyDocumento789 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento789)

	before(function () {
		const credenciais = Cypress.env('login_cenarios')
		Authenticate.login(credenciais)
		Utils.setAccessTokenToEnv(credenciais)
	})

	after(() => {
		Authenticate.logout()
	})

	describe('Documentos', { tags: '@documentos' }, () => {
		context('Edição', () => {
			context('Com Rateio entre ciclos e dedutível', () => {
				it('Cadastrar documento 789456 por API', function () {
					Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento789456, 'login_cenarios')
				})

				it('Editar Documento', function () {
					// cy.allure().severity('critical').startStep('test content')
					//	.descriptionHtml(testDescritpion.editarComRateio)

					editar(seedTestDocumento.documento789456.filtro, seedTestDocumento.documento789456.editar)
				})

				it('Validar documento editado na tela de listagem de Documentos', function () {
					// cy.allure().severity('normal').startStep('test content')
						//.descriptionHtml(testDescritpion.editarComRateio)

					listagem(seedTestDocumento.documento789456.detalhes)
				})
			})

			context('Sem Rateio entre ciclos e Não dedutível', () => {
				it('Cadastrar documento 357357 por API', function () {
					Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento357357, 'login_cenarios')
				})

				it('Editar Documento', function () {
					// cy.allure().severity('critical').startStep('test content')
					//	.descriptionHtml(testDescritpion.editarSemRateio)

					editar(seedTestDocumento.documento357357.filtro, seedTestDocumento.documento357357.editar)
				})

				it('Validar documento editado na tela de listagem de Documentos', function () {
					// cy.allure().severity('normal').startStep('test content')
					//	.descriptionHtml(testDescritpion.editarSemRateio)
					listagem(seedTestDocumento.documento357357.detalhes)
				})
			})

			context('Já pago', () => {
				it('Cadastrar documento 8765432 por API', function () {
					Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento8765432, 'login_cenarios')
				})

				it('Pagar documento', function () {
					AgendaFinanceira.pagarPelaAgenda(seedTestDocumento.documento8765432.pagarDocumento)
				})

				it('Editar documento (campos de edição não devem estar disponíveis)', function () {
					// cy.allure().severity('normal').startStep('test content')
					//	.descriptionHtml(testDescritpion.jaPago)

					editar(seedTestDocumento.documentoPago8765432.filtro, seedTestDocumento.documentoPago8765432.editar)
				})
			})

			context('Parcialmente pago', () => {
				it('Cadastrar documento 741852 por API', function () {
					Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento741852, 'login_cenarios')
				})

				it('Pagar parcialmente documento', function () {
					AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento741852.pagarDocumento)
				})

				it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
					// cy.allure().severity('critical').startStep('test content')
					//	.descriptionHtml(testDescritpion.parcialmentePago)

					editar(seedTestDocumento.documento741852.filtro, seedTestDocumento.documento741852.editarPosPagamento)
				})

				it('Validar status de parcialmente pago', function () {
					// cy.allure().severity('normal').startStep('test content')
					//	.descriptionHtml(testDescritpion.parcialmentePago)

					validarDetalhes(seedTestDocumento.documento741852.detalhesPosPagamento)
				})
			})

			context('Parcialmente recebido', () => {
				it('Cadastrar documento 369852 por API', function () {
					Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento369852, 'login_cenarios')
				})

				it('Receber parcialmente documento', function () {
					AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento369852.receberDocumento)
				})

				it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
					// cy.allure().severity('critical').startStep('test content')
					//	.descriptionHtml(testDescritpion.parcialmenteRecebido)

					editar(seedTestDocumento.documento369852.filtro, seedTestDocumento.documento369852.editarPosRecebimento)
				})

				it('Validar status parcialmente recebido', function () {
					// cy.allure().severity('normal').startStep('test content')
					//	.descriptionHtml(testDescritpion.parcialmenteRecebido)

					validarDetalhes(seedTestDocumento.documento369852.detalhesPosRecebimentoParcial)
				})
			})

			context('Recebido', () => {
				it('Cadastrar documento 564321 por API', function () {
					Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento564321, 'login_cenarios')
				})

				it('Receber documento', function () {
					AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento564321.receberDocumento)
				})

				it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
					// cy.allure().severity('normal').startStep('test content')
					//	.descriptionHtml(testDescritpion.recebido)

					editar(seedTestDocumento.documento564321.filtro, seedTestDocumento.documento564321.editarPosRecebimento)
				})

				it('Validar status de Recebido', function () {
					// cy.allure().severity('normal').startStep('test content')
					//	.descriptionHtml(testDescritpion.recebido)

					validarDetalhes(seedTestDocumento.documento564321.detalhesPosRecebimento)
				})
			})

			context('Com exclusão de anexo', () => {
				it('Cadastrar documento 789 por API', function () {
					Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento789, 'login_cenarios')
				})

				it('Editar documento, excluir anexo', function () {
					// cy.allure().severity('normal').startStep('test content')
					//	.descriptionHtml(testDescritpion.excluirAnexo)

					editar(seedTestDocumento.documento789.filtro, seedTestDocumento.documento789.editar)
				})

				it('Validar detalhes após excluir anexo', function () {
					validarDetalhes(seedTestDocumento.documento789.detalhes)
				})
			})
		})
	})
})