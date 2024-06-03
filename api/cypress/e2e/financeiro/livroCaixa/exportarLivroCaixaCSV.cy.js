/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe('GET - /api/financeiro/v1/LivroCaixa/ExportarLivroCaixaCSV - Exporta arquivo do Livro Caixa em CSV', () => {
            it('CT1 - Deve exportar registro do Livro Caixa em CSV', () => {
                cy.fixture('financeiro/livroCaixa/exportarLivroCaixaCSV/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/LivroCaixa/ExportarLivroCaixaCSV', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null  

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
                                expect(item).to.have.property('Data')
                                expect(item).to.have.property('Descrição')
                                expect(item).to.have.property('Produtor')
                                expect(item).to.have.property('Fazenda')
                                expect(item).to.have.property('Inscrição Estadual (IE)')
                                expect(item).to.have.property('Conta Bancária')
                                expect(item).to.have.property('Histórico')
                                expect(item).to.have.property('Valor')
                                expect(item).to.have.property('Saída')
                                expect(item).to.have.property('Dedutível')
                                expect(item).to.have.property('Tipo de Documento')
                                expect(item).to.have.property('Pessoa')
                                expect(item).to.have.property('Pessoa CPF/CNPJ')
                                expect(item).to.have.property('Status')
                            })

                        })
                })
            })
        })
    })
})