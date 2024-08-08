/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/fazenda/fazenda.description')
const { validateFazendaResponse } = require('../../../fixtures/fazenda/fazenda/validate')

context('Fazenda', () => {
    describe(`POST/PUT/DELETE - ${Cypress.env('fazenda')}/Fazenda - Gerenciamento de Fazenda`, () => {

        let fazendaId
        const initialName = `Fazenda_${Date.now()}`
        const updatedName = `Fazenda_Updated_${Date.now()}`

        // Teste de criação de fazenda
        it('CT1 - Criar fazenda', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/fazenda/payloadCt1.json').then((payload) => {
                payload.nome = initialName // Define o nome inicial

                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`, payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                        expect(response.status).to.equal(200)

                        validateFazendaResponse(response)

                        // Salvar o ID da fazenda criada para uso posterior
                        fazendaId = response.body.data.id
                    })
            })
        })

        it('CT2 -  Deve editar fazenda', () => {
            cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

            cy.fixture('fazenda/fazenda/payloadCt2.json').then((payload) => {
                payload.nome = updatedName // Define o nome atualizado

                cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`, payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                        expect(response.status).to.equal(200)

                        validateFazendaResponse(response)
                    })
            })
        })

        it('CT3 - Deve aplicar patch para desativar a fazenda', () => {
            cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

            cy.fixture('fazenda/fazenda/paramsCt1.json').then((params) => {

                cy.patchRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/Disable/${params.id}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                        expect(response.status).to.equal(200)
                        expect(response.body.success).to.be.true
                        expect(response.body.data).to.be.true

                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/${params.id}`)
                            .then((response) => {
                                expect(response.body).to.have.property('ativo').that.is.a('boolean').to.be.false

                            })

                    })
            })
        })

        it('CT4 - Deve realizar o patch para ativação da fazenda ', () => {
            cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

            cy.fixture('fazenda/fazenda/paramsCt2.json').then((params) => {

                cy.patchRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/Activate/${params.id}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                        expect(response.status).to.equal(200)

                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/${params.id}`)
                            .then((response) => {
                                expect(response.body).to.have.property('ativo').that.is.a('boolean').to.be.true

                            })
                    })
            })
        })

        it('CT5 - Deletar fazenda', () => {
            cy.allureDescriptionHtml(description.Ct5).allureSeverity('normal')

            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`, fazendaId)
                .then((response) => {
                    expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                    expect(response.status).to.equal(200)

                })
        })
    })
})
