/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/list/list.description')
const { validateFazendaListResponse } = require('../../../fixtures/fazenda/getFazenda/validate')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/List?Situacao=Ativo - Lista da Fazenda`, () => {

        it('CT1 - Buscar fazendas ativas', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/list/payloadCt1.json').then((payload) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/List?Situacao=Ativo`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Valida a estrutura da resposta usando a função de validação
                        validateFazendaListResponse(response)
                    })
            })
        })
        it('CT2 - Buscar fazendas inativas', () => {
            cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

            cy.fixture('fazenda/list/payloadCt2.json').then((payload) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/List?Situacao=Inativo`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Valida a estrutura da resposta usando a função de validação
                        validateFazendaListResponse(response)

                    })
            })
        })
    })
})
