/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/agendarJob/agendarJobReprocessarLivroCaixa/agendarJobReprocessarLivroCaixa.description');

context('Financeiro', () => {
    context('AgendarJob', () => {
        describe(`POST - ${Cypress.env('financeiro')}/AgendarJob/AgendarJobReprocessarLivroCaixa - Agenda o reprocessamento de todo o livro caixa do cliente que está com informações divergentes`, () => {

            it('CT1 - Agenda o reprocessamento de todo o livro caixa do cliente que está com informações divergentes', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/AgendarJob/AgendarJobReprocessarLivroCaixa`, {})
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).to.be.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).to.not.be.null;
                        expect(response.body).be.equal("O job foi agendado com sucesso!");
                    })
            })
        })
    })


    describe(`GET - ${Cypress.env('financeiro')}/AgendarJob/ObterTenantsParaReprocessamento - Obtém todos os tenants que estão para reprocessamento`, () => {

        it('CT2 - Obtém todos os tenants que estão para reprocessamento', () => {

            cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

            cy.fixture('financeiro/agendarJob/agendarJobReprocessarLivroCaixa/paramsCt2.json').then((params) => {
                cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/AgendarJob/ObterTenantsParaReprocessamento`, params)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.be.an('array');
                        response.body.forEach(tenant => {
                            expect(tenant).to.be.a('string');
                        })
                    })
            })
        })
    })
})