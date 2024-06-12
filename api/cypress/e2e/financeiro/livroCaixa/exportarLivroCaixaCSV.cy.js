/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe(`GET - \${Cypress.env('financeiro')}/LivroCaixa/ExportarLivroCaixaCSV - Exporta arquivo do Livro Caixa em CSV`, () => {
            it('CT1 - Deve exportar registro do Livro Caixa em CSV e verificar a primeira linha', () => {
                cy.fixture('financeiro/livroCaixa/exportarLivroCaixaCSV/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa/ExportarLivroCaixaCSV`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).be.not.null;

                            // Obter CSV e dividir em linhas
                            const csv = response.body;
                            const lines = csv.split('\n');

                            // Verificar se há pelo menos uma linha no CSV
                            expect(lines.length).to.be.at.least(1);

                            // Pegar a primeira linha (cabeçalho) e dividir em colunas
                            const headers = lines[0].split(';').map(header => header.trim());

                            // Verificar se os campos esperados estão presentes no cabeçalho
                            expect(headers).to.include.members([
                                'Data', 'Descrição', 'Produtor', 'Fazenda', 'Inscrição Estadual (IE)',
                                'Conta Bancária', 'Histórico', 'Valor', 'Saída', 'Dedutível',
                                'Tipo de Documento', 'Pessoa', 'Pessoa CPF/CNPJ', 'Status'
                            ]);

                            // Se houver mais de uma linha, verificar apenas a primeira linha de dados
                            if (lines.length > 1) {
                                const firstDataLine = lines[1].split(';').map(value => value.trim());
                                
                                // Verificar se a primeira linha possui o mesmo número de colunas que o cabeçalho
                                expect(firstDataLine.length).to.equal(headers.length);
                            }
                        });
                });
            });
        });
    });
});