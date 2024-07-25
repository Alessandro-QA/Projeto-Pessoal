/// <reference types='Cypress' />

context('Safra', () => {
    context('Consulta de Safra', () => {

        describe(`GET - ${Cypress.env('safra')}/Safra - Listar Safras`, () => {

            it('CT1 - Deve Listar todas Safras Cadastradas', () => {
                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('safra')}/Safra`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).to.be.equal(200);
                        expect(response.body).to.not.be.null;
                        expect(response.body).to.exist;

                        // Verificando cada objeto dentro do array data
                        response.body.forEach(item => {
                            expect(item).to.have.property('id').that.is.a('string');
                            expect(item).to.have.property('descricao').that.is.a('string');
                            expect(item).to.have.property('dataInicial').that.is.a('string');
                            expect(item).to.have.property('dataFinal').that.is.a('string');
                            expect(item).to.have.property('ativo').that.is.a('boolean');
                        });
                    });
            });

            it('CT2 - Deve Trazer somente uma Safra pelo seu ID', () => {

                cy.fixture('safra/getSafra/payloadCt2.json').then((payload) => {
                    cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('safra')}/Safra/${payload.id}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            expect(response.body).to.have.property('id').that.is.a('string').to.be.equal(payload.id);
                            expect(response.body).to.have.property('descricao').that.is.a('string');
                            expect(response.body).to.have.property('dataInicial').that.is.a('string');
                            expect(response.body).to.have.property('dataFinal').that.is.a('string');
                            expect(response.body).to.have.property('ativo').that.is.a('boolean');

                        });
                });
            });

            it.only('CT3 - Deve Trazer a Safra filtrada pela Descrição', () => {

                cy.fixture('safra/getSafra/payloadCt3.json').then((payload) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('safra')}/Safra`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            expect(response.body).to.have.property('id').that.is.a('string');
                            expect(response.body).to.have.property('descricao').that.is.a('string');
                            expect(response.body).to.have.property('dataInicial').that.is.a('string');
                            expect(response.body).to.have.property('dataFinal').that.is.a('string');
                            expect(response.body).to.have.property('ativo').that.is.a('boolean');

                        });
                });
            });

        });
    });
});
