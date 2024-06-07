/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {

        describe('POST - /api/financeiro/v1/Agenda/RecebimentoLote - Recebimento em Lote', () => {
            it('CT1 Recebimento em Lote com 1 Titulo a Receber ', () => {
                cy.fixture('financeiro/agenda/recebimentolote/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);
                            expect(response.body.data).to.be.an('array').that.is.not.empty;

                            response.body.data.forEach((item) => {
                                expect(item).to.have.property('id');
                                expect(item).to.have.property('statusTitulo');
                                expect(item).to.have.property('pessoa');
                                expect(item).to.have.property('empresa');
                                expect(item).to.have.property('fazenda');
                                expect(item).to.have.property('formaPagamento');
                                expect(item).to.have.property('moeda');
                                expect(item).to.have.property('valor');
                                expect(item).to.have.property('dataVencimento');
                                expect(item).to.have.property('saldoParcela');
                                expect(item).to.have.property('tipo');
                                expect(item).to.have.property('origemDocumento');
                                expect(item).to.have.property('numero');
                                expect(item).to.have.property('documentoId');

                                expect(item.id).to.be.a('string');
                                expect(item.statusTitulo).to.be.a('number');
                            });
                        });
                });
            })

            it('CT2 Recebimento em Lote com 2 Títulos a Receber', () => {
                cy.fixture('financeiro/agenda/recebimentolote/payloadCT2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/ListTitulos', payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                        expect(response.status).to.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).to.not.be.null;
                        expect(response.body.data).to.exist;
                        expect(response.body.data).to.be.an('array');
                    });
                });
            });
        })
    })
})
