/// <reference types='Cypress' />

const description = require('../../../fixtures/producaoAgricola/enums/enums.OrigemPesagem.description')

context('Produção Agrícola', () => {
    context('Enums', () => {
        describe(`GET - ${Cypress.env('producaoAgricola')}/Enums/OrigemPesagem - Obtém as origens de pesagem existentes.`, () => {

            it('CT1 - Obter as origens de pesagem existentes ', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/Enums/OrigemPesagem`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.be.an('array').that.is.not.empty

                        response.body.forEach((origem) => {
                            expect(origem.value).to.be.a('number')
                            expect(origem.enumValue).to.be.a('string')
                            expect(origem.enumDescription).to.be.a('string')
                        })
                    })
            })
        })
    })
})