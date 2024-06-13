/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Documento/EdicaoOrigemHabilitada/{origemId} - Obtém indicação de que o documento pode ser editado pelo origemId`, () => {

            it('CT1 - Obtém indicação de que o documento pode ser editado pelo origemId', () => {
                // essa rota é chamada na edição de um contrato e o id é do contrato
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/EdicaoOrigemHabilitada/7a58cb86-be72-4881-b0ed-2a04049a9ab6`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean')
                    })
            })
        })
    })
})
