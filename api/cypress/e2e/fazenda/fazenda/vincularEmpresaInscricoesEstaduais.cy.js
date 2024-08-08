/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/vincularEmpresaInscricoesEstaduais/vincularEmpresaInscricoesEstaduais.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/VincularEmpresaInscriçõesEstaduais - Vincular Empresa a Inscrições Estaduais`, () => {

        it('CT1 - Vincular Empresas a Incrições Estaduais', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/listarFazendasComEmpresa/paramsCt1.json').then((payload) => {
                cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/VincularEmpresaInscricoesEstaduais`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                        expect(response.body).to.have.property('success').that.is.true
                    })
            })
        })

    })
})
