/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Dashboard/ExportarResultadoAnaliticoSafraCSV - Obtém o arquivo CSV do Resultado Analítico da Safra`, () => {
            it('CT1 - Deve exportar arquivo CSV', () => {
                cy.fixture('financeiro/dashboard/exportarResultadoAnaliticoSafraCSV/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/ExportarResultadoAnaliticoSafraCSV`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Converte CSV para JSON
                            const csv = response.body;
                            const lines = csv.split('\n');
                            const headers = lines[0].split(';').map(header => header.trim());

                            const items = lines.slice(1).map(line => {
                                const values = line.split(';').map(value => value.trim());
                                if (values.length === headers.length) {
                                    return headers.reduce((obj, header, index) => {
                                        obj[header] = values[index];
                                        return obj;
                                    }, {});
                                }
                                return null; // Retorna null se a linha não tem o número correto de colunas
                            }).filter(item => item !== null); // Remove itens nulos

                            // Verifica se os campos esperados estão presentes em cada item
                            items.forEach((item) => {
                                expect(item).to.have.property('Fazenda');
                                expect(item).to.have.property('Safra');
                                expect(item).to.have.property('Ciclo');
                                expect(item).to.have.property('Conta');
                                expect(item).to.have.property('Data');
                                expect(item).to.have.property('Valor');
                                expect(item).to.have.property('Pessoa');
                                expect(item).to.have.property('Documento');
                                expect(item).to.have.property('Origem');
                                expect(item).to.have.property('Material');
                            });

                        })
                })
            })
        })
    })
})
