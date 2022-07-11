/// <reference types="cypress" />

import documento from '../../../../fixtures/funcionalidades/financeiro/documentos/editar/documento.json'
import seedTestDocumento from '../../../../fixtures/funcionalidades/financeiro/documentos/editar/editar-documento.json'
import Documentos from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import testDescritpion from './bdd-description/editar-documento.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
	describe('FUNCIONALIDADES > Documentos | Editar Documento - ', { tags: '@documentos' }, () => {
		var dataAtual = Utils.getDate()
		var bodyDocumento789456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento789456)
		var bodyDocumento357357 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento357357)
		var bodyDocumento369852 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento369852)

		before(function () {
			const credenciais = Cypress.env('login_cenarios')
			Authenticate.login(credenciais)
			Utils.setAccessTokenToEnv(credenciais)
		})

		after(() => {
			Authenticate.logout()
		})

		it('Cadastrar documentos via API', function () {
			Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento789456, 'login_cenarios')
			Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento357357, 'login_cenarios')
			Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento369852, 'login_cenarios')
		})

		describe('Editar documento Com Rateio entre ciclos e dedutível', () => {
			it('Editar Documento', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.editarComRateio)

				Documentos.editar(seedTestDocumento.documento789456.filtro, seedTestDocumento.documento789456.editar)
			})

			it('Validar documento editado na tela de listagem de Documentos', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.editarComRateio)

				Documentos.listagem(seedTestDocumento.documento789456.detalhes)
			})
		})

		describe('Editar documento sem Rateio entre ciclos e Não dedutível', () => {
			it('Editar Documento', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.editarSemRateio)

				Documentos.editar(seedTestDocumento.documento357357.filtro, seedTestDocumento.documento357357.editar)
			})

			it('Validar documento editado na tela de listagme de Documetnos0', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.editarSemRateio)
				Documentos.listagem(seedTestDocumento.documento357357.detalhes)
			})
		})

		describe('Editar documento já pago', () => {
			it('Pagar documento', function () {
				AgendaFinanceira.pagarPelaAgenda(seedTestDocumento.documento789456.pagarDocumento)
			})

			it('Editar documento (campos de edição não devem estar disponíveis)', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.jaPago)

				Documentos.editar(seedTestDocumento.documentoPago.filtro, seedTestDocumento.documentoPago.editar)
			})
		})

		describe('Editar documento parcialmente pago', () => {
			it('Pagar parcialmente documento', function () {
				AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento357357.pagarDocumento)
			})

			it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmentePago)

				Documentos.editar(seedTestDocumento.documento357357.filtro, seedTestDocumento.documento357357.editarPosPagamento)
			})

			it('Validar status de parcialmente pago', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmentePago)

				Documentos.validarDetalhes(seedTestDocumento.documento357357.detalhesPosPagamento)
			})
		})

		describe('Editar documento parcialmente recebido', () => {
			it('Receber parcialmente documento', function () {
				AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento369852.receberDocumento)
			})

			it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
				cy.allure().severity('critical').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmenteRecebido)

				Documentos.editar(seedTestDocumento.documento369852.filtro, seedTestDocumento.documento369852.editarPosRecebimento)
			})

			it('Validar status parcialmente recebido', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.parcialmenteRecebido)

				Documentos.validarDetalhes(seedTestDocumento.documento369852.detalhesPosRecebimentoParcial)
			})
		})

		describe('Editar documento recebido', () => {
			it('Receber documento', function () {
				AgendaFinanceira.pagarReceberTitulo(seedTestDocumento.documento369852.receberDocumento)
			})

			it('Editar documento (campos de edição não devem estar dispovíveis)', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.recebido)

				Documentos.editar(seedTestDocumento.documento369852.filtro, seedTestDocumento.documento369852.editarPosRecebimento)
			})

			it('Validar status de Recebido', function () {
				cy.allure().severity('normal').startStep('test content')
					.descriptionHtml(testDescritpion.recebido)

				Documentos.validarDetalhes(seedTestDocumento.documento369852.detalhesPosRecebimento)
			})
		})
	})
})
