/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/list/list.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/List - Lista da Fazenda`, () => {

        it('CT1 - Buscar fazendas ativas', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/list/paramsCt1.json').then((params) => {
                cy.getRequestWithMoreParams(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/List`, params)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Valida se todas as fazendas têm o status "ativo" como true
                        response.body.forEach((fazenda) => {
                            expect(fazenda).to.be.an('object')
                            expect(fazenda).to.have.property('ativo', true)
                        })
                    })
            })
        })

        it('CT2 - Buscar fazendas inativas', () => {
            cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

            cy.fixture('fazenda/list/paramsCt2.json').then((params) => {
                cy.getRequestWithMoreParams(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/List`, params)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Valida se todas as fazendas têm o status "ativo" como false
                        response.body.forEach((fazenda) => {
                            expect(fazenda).to.be.an('object')
                            expect(fazenda).to.have.property('ativo', false)
                        })
                    })
            })
        })

        it('CT3 - Buscar fazendas pelo Nome', () => {
            cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

            cy.fixture('fazenda/list/paramsCt3.json').then((params) => {
                cy.getRequestWithMoreParams(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/List`, params)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Verifica se a resposta é um array
                        expect(response.body).to.be.an('array')

                        // Verifica se todos os objetos no array contêm o nome esperado
                        const expectedName = params.Nome
                        response.body.forEach((fazenda) => {
                            expect(fazenda).to.be.an('object')
                            expect(fazenda).to.have.property('nome')
                            expect(fazenda.nome).to.equal(expectedName)
                        })
                    })
            })
        })
    })
})
