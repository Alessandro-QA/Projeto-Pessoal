/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/funcionalidades/financeiro/documentos/editar/documentos.json'
import seedTestDocumento from '../../../../fixtures/funcionalidades/financeiro/documentos/editar/editar-documento.json'
import { editar, listagem, validarDetalhes } from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import testDescritpion from './bdd-description/editar-documento.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
	describe('Documentos | Edição Documento - ', { tags: '@documentos' }, () => {
		var dataAtual = Utils.getDate()
		var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

		var bodyDocumento789456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento789456)
		var bodyDocumento357357 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento357357)
		var bodyDocumento369852 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento369852)
		var bodyDocumento564321 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento564321)

		before(function () {
			const credenciais = Cypress.env('login_cenarios')
			Authenticate.login(credenciais)
			Utils.setAccessTokenToEnv(credenciais)
		})

		after(() => {
			Authenticate.logout()
		})

		context('Cadastro dos documentos utilizados nos cenários', () => {
			it('Utilização da api para cadastro dos documentos', function () {
				Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento789456, 'login_cenarios')
				Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento357357, 'login_cenarios')
				Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento369852, 'login_cenarios')
				Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento564321, 'login_cenarios')
			
			})
		})

		context('Com Rateio entre ciclos e dedutível', () => {
			it('Editar Documento', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.editarComRateio)

				editar(seedTestDocumento.documento789456.filtro, seedTestDocumento.documento789456.editar)
			})

			it('Validar documento editado na tela de listagem de Documentos', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.editarComRateio)

				listagem(seedTestDocumento.documento789456.detalhes)
			})
		})

		context('Sem Rateio entre ciclos e Não dedutível', () => {
			it('Editar Documento', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.editarSemRateio)

				editar(seedTestDocumento.documento357357.filtro, seedTestDocumento.documento357357.editar)
			})

			it('Validar documento editado na tela de listagem de Documentos', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.editarSemRateio)
				listagem(seedTestDocumento.documento357357.detalhes)
			})
		})

		context('Documento já pago', () => {
			it('Pagar documento', function () {
				AgendaFinanceira.pagarPelaAgenda(seedTestDocumento.documento789456.pagarDocumento)
			})

			it('Editar documento (campos de edição não devem estar disponíveis)', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.jaPago)

				editar(seedTestDocumento.documentoPago.filtro, seedTestDocumento.documentoPago.editar)
			})
		})

		context('Documento parcialmente pago', () => {
			it('Pagar parcialmente documento', function () {
				AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento357357.pagarDocumento)
			})

			it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmentePago)

				editar(seedTestDocumento.documento357357.filtro, seedTestDocumento.documento357357.editarPosPagamento)
			})

			it('Validar status de parcialmente pago', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmentePago)

				validarDetalhes(seedTestDocumento.documento357357.detalhesPosPagamento)
			})
		})

		context('Documento parcialmente recebido', () => {
			it('Receber parcialmente documento', function () {
				AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento369852.receberDocumento)
			})

			it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmenteRecebido)

				editar(seedTestDocumento.documento369852.filtro, seedTestDocumento.documento369852.editarPosRecebimento)
			})

			it('Validar status parcialmente recebido', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmenteRecebido)

				validarDetalhes(seedTestDocumento.documento369852.detalhesPosRecebimentoParcial)
			})
		})

		context('Documento recebido', () => {
			it('Receber documento', function () {
				AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento564321.receberDocumento)
			})

			it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.recebido)

				editar(seedTestDocumento.documento564321.filtro, seedTestDocumento.documento564321.editarPosRecebimento)
			})

			it('Validar status de Recebido', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.recebido)

				validarDetalhes(seedTestDocumento.documento564321.detalhesPosRecebimento)
			})
		})
	})
})
