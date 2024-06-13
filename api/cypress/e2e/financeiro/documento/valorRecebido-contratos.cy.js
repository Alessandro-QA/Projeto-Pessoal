/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`POST - ${Cypress.env('financeiro')}/v1/Documento/ValorRecebido/Contratos - Obtém os Valores Recebidos dos Contratos`, () => {

            it('CT1 - Obter valores Recebidos de Documentos pelos IDs', () => {
                cy.fixture('financeiro/documento/valorRecebido-contratos/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/ValorRecebido/Contratos`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null  

                            cy.fixture('financeiro/documento/valorRecebido-contratos/bodyCt1.json').then((body) => { 
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })
        })
    })
})