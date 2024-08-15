/// <reference types='Cypress' />

const description = require('../../../fixtures/producaoAgricola/enums/enums.ContratoStatus.description')

context('Produção Agrícola', () => {
    context('Enums', () => {
        describe(`GET - ${Cypress.env('producaoAgricola')}/Enums/ContratoStatus - Obtém todos os Status de Contratos`, () => {

            it('CT1 - Obter todos os Status de Contratos', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/Enums/ContratoStatus`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.be.an('array').that.is.not.empty

                        response.body.forEach((status) => {
                            expect(status.value).to.be.a('number')
                            expect(status.enumValue).to.be.a('string')
                            expect(status.enumDescription).to.be.a('string')
                        })
                    })
            })
        })
    })
})