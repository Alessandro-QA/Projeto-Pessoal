/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Encontro Contas', () => {
        describe(`GET - ${Cypress.env('financeiro')}/EncontroContas/Pessoa/{pessoaId}/Titulos/Moeda/{moedaId}/List - Lista os Títulos pela Pessoa e Pela Moeda`, () => {

            it('CT1 - Deve obter a Lista de Títulos A Pagar e a Receber por Cliente e Moeda', () => {
                cy.fixture('financeiro/encontroContas/list/paramsCt1.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/EncontroContas/Pessoa/${params.pessoaID}/Titulos/Moeda/${params.moedaID}/List`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).be.not.null;

                            const { titulosAPagar, titulosAReceber } = response.body.data;

                            // Função auxiliar para verificar os campos e tipos dos títulos
                            const verificarTitulos = (titulos) => {
                                const expectedProperties = [
                                    { key: 'id', type: 'string' },
                                    { key: 'empresaId', type: 'string' },
                                    { key: 'empresaDescricacaoId', type: 'string' },
                                    { key: 'numeroDocumento', type: 'string' },
                                    { key: 'documentoId', type: 'string' },
                                    { key: 'vencimento', type: 'string' },
                                    { key: 'moedaPadraoId', type: 'string' },
                                    { key: 'moedaAlternativaId', type: 'string' },
                                    { key: 'moedaPadraoDescricao', type: 'string' },
                                    { key: 'valor', type: 'number' },
                                    { key: 'valorAltenativo', type: 'number' },
                                    { key: 'saldo', type: 'number' },
                                    { key: 'saldoAlternativo', type: 'number' },
                                    { key: 'isMoedaAlternativa', type: 'boolean' }
                                ];

                                const allValid = titulos.every(titulo =>
                                    titulo.titulos.every(t =>
                                        expectedProperties.every(({ key, type }) =>
                                            typeof t[key] === type
                                        )
                                    )
                                );

                                expect(allValid).to.be.true;
                            };

                            // Verificar títulos a pagar
                            verificarTitulos(titulosAPagar);

                            // Verificar títulos a receber
                            verificarTitulos(titulosAReceber);
                        });
                });
            });
        });
    });
});