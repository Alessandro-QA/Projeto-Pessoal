/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {
        describe('POST - /api/financeiro/v1/Agenda/CSV - CSV', () => {

            it('CT1 Deve haver CSV de Todas as Empresas', () => {
                cy.fixture('financeiro/agenda/CSV/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/CSV', payload).then((response) => {
                        // Verifica se a solicitação foi bem-sucedida e se os dados estão presentes
                        expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                        expect(response.status).to.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null

                        //Obter CSV e dividir em linhas
                        const csv = response.body;
                        const lines = csv.split('\n');

                        // Verificar se há pelo menos uma linha no CSV
                        expect(lines.length).to.be.at.least(1);

                        // Pegar a primeira linha (cabeçalho) e dividir em colunas
                        const headers = lines[0].split(';').map(header => header.trim());

                        // Verificar se os campos esperados estão presentes no cabeçalho
                        expect(headers).to.include.members([
                            'Pessoa', 'Data de Emissão', 'CPF/CNPJ Pessoa', 'Safra', 'Empresa', 'Número',
                            'Fazenda', 'Categorias', 'Data de Vencimento', 'Forma de Pagamento', 'Parcelas',
                            'Status', 'Tipo', 'Valor', 'Saldo'
                        ])

                        // Se houver mais de uma linha, verificar apenas a primeira linha de dados
                        if (lines.length > 1) {
                            const firstDataLine = lines[1].split(';').map(value => value.trim());

                            // Verificar se a primeira linha possui o mesmo número de colunas que o cabeçalho
                            expect(firstDataLine.length).to.equal(headers.length);
                        }

                    })
                })
            })

            it('CT2 Deve haver CSV de Todos os Títulos Pagos', () => {
                cy.fixture('financeiro/agenda/CSV/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/CSV', payload).then((response) => {
                        // Verifica se a solicitação foi bem-sucedida e se os dados estão presentes
                        expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                        expect(response.status).to.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null

                        // Obter CSV e dividir em linhas
                        const csv = response.body;
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
                            'Status', 'Tipo', 'Valor', 'Saldo'
                        ]);

                        // Se houver mais de uma linha, verificar a primeira linha de dados
                        if (lines.length > 1) {
                            const firstDataLine = lines[1].split(';').map(value => value.trim());

                            // Verificar se a primeira linha possui o mesmo número de colunas que o cabeçalho
                            expect(firstDataLine.length).to.equal(headers.length);
                        }
                    });
                });
            });
        })
    })
})   
