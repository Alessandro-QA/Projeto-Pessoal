/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Agenda/ExportarAgendaFinanceiraTituloCiclosCsv- Titulo Ciclos Csv`, () => {

            it('CT1 Deve Exportar Agenda de Titulos entre Ciclos', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/exportarAgendaFinanceiraTituloCiclosCsv`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Obter CSV e dividir em linhas
                            const csv = response.body;
                            console.log('CSV:', csv); // Log do CSV completo
                            const lines = csv.split('\n');

                            // Verificar se há pelo menos uma linha no CSV
                            expect(lines.length).to.be.at.least(1);
                            console.log('Lines:', lines); // Log das linhas do CSV

                            // Pegar a primeira linha (cabeçalho) e dividir em colunas
                            const headers = lines[0].split(';').map(header => header.trim());
                            console.log('Headers:', headers); // Log dos cabeçalhos

                            // Verificar se os campos esperados estão presentes no cabeçalho
                            expect(headers).to.include.members([
                                'Pessoa', 'Data de Emissão', 'CPF/CNPJ Pessoa', 'Safra', 'Empresa', 'Número',
                                'Fazenda', 'Categorias', 'Data de Vencimento', 'Forma de Pagamento', 'Parcelas',
                                'Status', 'Tipo', 'Ciclo', 'Valor Ciclo', 'Valor Total', 'Saldo'
                            ]);

                            // Se houver mais de uma linha, verificar a primeira linha de dados
                            if (lines.length > 1) {
                                const firstDataLine = lines[1].split(';').map(value => value.trim());
                                console.log('First Data Line:', firstDataLine); // Log da primeira linha de dados

                                // Verificar se a primeira linha possui o mesmo número de colunas que o cabeçalho
                                expect(firstDataLine.length).to.equal(headers.length);
                            }
                        });
                });
            });
        });
    });
});
