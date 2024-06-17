/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/tag/list/list.description');


context('Financeiro', () => {
    context('TAG', () => {
        describe(`GET - ${Cypress.env('financeiroBackoffice')}/Tag/List - Recupera Lista Geral de Tags`, () => {

            it('CT1 - Recupera Todas as Tags', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/tag/list/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('financeiroBackoffice')}/Tag/List`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.success).to.be.a('boolean')

                            // Verificar os primeiros quatro elementos, se existirem. Evitando testar de todos caso haja 100+ Tags
                            for (let i = 0; i < Math.min(4, response.body.data.length); i++) {
                                const item = response.body.data[i]
                                expect(item).to.have.property('id').and.to.be.a('string')
                                expect(item).to.have.property('descricao').and.to.be.a('string')
                                expect(item).to.have.property('codigo').and.to.be.a('number')
                                expect(item).to.have.property('active').and.to.be.a('boolean')
                            }

                        })
                })
            })

            it('CT2 - Traz somente as TAGS com Status Ativo', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/tag/list/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('financeiroBackoffice')}/Tag/List`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.success).to.be.a('boolean')

                            // Verificar os primeiros quatro elementos, se existirem. Evitando testar de todos caso haja 100+ Tags
                            for (let i = 0; i < Math.min(4, response.body.data.length); i++) {
                                const item = response.body.data[i]
                                expect(item).to.have.property('id').and.to.be.a('string')
                                expect(item).to.have.property('descricao').and.to.be.a('string')
                                expect(item).to.have.property('codigo').and.to.be.a('number')
                                expect(item).to.have.property('active').and.to.be.a('boolean').and.to.be.equal(true)
                            }

                        })
                })
            })

            it('CT3 - Traz somente as TAGS com Status Inativo', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('financeiro/tag/list/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('financeiroBackoffice')}/Tag/List`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.success).to.be.a('boolean')

                            // Verificar os primeiros quatro elementos, se existirem. Evitando testar de todos caso haja 100+ Tags
                            for (let i = 0; i < Math.min(4, response.body.data.length); i++) {
                                const item = response.body.data[i]
                                expect(item).to.have.property('id').and.to.be.a('string')
                                expect(item).to.have.property('descricao').and.to.be.a('string')
                                expect(item).to.have.property('codigo').and.to.be.a('number')
                                expect(item).to.have.property('active').and.to.be.a('boolean').and.to.be.equal(false)
                            }

                        })
                })
            })

        })
    })
})
