/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {
        describe('POST - api/financeiro/v1/Agenda/ExportarAgendaFinanceiraTituloCiclosCsv- Titulo Ciclos Csv', () => {

            it.only('CT1 Deve Exportar Agenda de Titulos entre Ciclos', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/exportarAgendaFinanceiraTituloCiclosCsv', payload)
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

                                // Verificar se a primeira linha de dados contém os valores esperados
                                const expectedValues = [
                                    'Cliente Teste API', '06/06/2024', '516.348.600-47', '2023/2023', 'Empresa Teste API', '4',
                                    'Fazenda Teste API', 'Soja', '06/06/2024', 'Transferência Bancária', '001/001',
                                    'Recebido parcialmente', 'Receber', 'Soja - 2023/2023', '56200,04', '56200,04', '50617,14'
                                ];
                                expectedValues.forEach((value, index) => {
                                    expect(firstDataLine[index]).to.equal(value);
                                });
                            }
                        });
                })
            })
        })
    })
})