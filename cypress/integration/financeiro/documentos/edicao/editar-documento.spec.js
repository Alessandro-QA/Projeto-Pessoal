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
		})

		it('Com Rateio entre ciclos e dedutível', function () {
			cy.allure().severity('critical').startStep('test content')
				.descriptionHtml(testDescritpion.editarComRateio)

			Documentos.editar(seedTestDocumento.documento789456.filtro, seedTestDocumento.documento789456.editar)

			Documentos.listagem(seedTestDocumento.documento789456.detalhes)
		})

		it('Sem Rateio entre ciclos e Não dedutível', function () {
			cy.allure().severity('critical').startStep('test content')
				.descriptionHtml(testDescritpion.editarSemRateio)

			Documentos.editar(seedTestDocumento.documento357357.filtro, seedTestDocumento.documento357357.editar)

			Documentos.listagem(seedTestDocumento.documento357357.detalhes)
		})

		it('Documento já pago', function () {
			cy.allure().severity('critical').startStep('test content')
				.descriptionHtml(testDescritpion.jaPago)

			// Pagar documento via agenda financeira
			AgendaFinanceira.pagarPelaAgenda(seedTestDocumento.documento789456.pagarDocumento)

			Documentos.editar(seedTestDocumento.documentoPago.filtro, seedTestDocumento.documentoPago.editar)
		})
	})
})
