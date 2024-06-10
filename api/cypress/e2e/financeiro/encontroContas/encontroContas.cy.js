/// <reference types='Cypress' />
const dayjs = require('dayjs'); // Importando a biblioteca dayjs

context('Financeiro', () => {
    context('Encontro Contas', () => {
        describe('POST - /api/financeiro/v1/EncontroContas - Abate um A Pagar por um a Receber', () => {

            let documentoID;
            let randomNumber
            let numeroDocumento
            let idDocumentoReceber
            let idDocumentoPagar

            // Criando um documento A Receber e a Pagar do mesmo valor
            it('CT1 - Deve criar um novo documento para Gerar A pagar e a Receber', () => {
                cy.fixture('financeiro/encontroContas/encontroContas/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.numero = randomNumber.toString(); // Atualiza o campo 'numero' no payload
                    numeroDocumento = payload.numero

                    // Definir a data e hora atual no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const currentDate = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                    payload.financeiro.parcelas[0].vencimento = currentDate;
                    payload.dataRecebimento = currentDate;
                    payload.data = currentDate;

                    cy.postRequest('/api/financeiro/v1/Documento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            documentoID = response.body.data.id;
                            expect(documentoID).to.not.be.undefined;

                        })
                })
            })

            //Listando Títulos A Pagar e a Receber para Buscar ID de documentos 
            it('CT2 - Deve listar a agenda A Pagar e a Receber', () => {
                cy.fixture('financeiro/encontroContas/encontroContas/payloadCt2.json').then((payload) => {

                    // Definir a data inicial e final no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const dataInicial = dayjs().startOf('day').format('YYYY-MM-DDTHH:mm:ssZ');
                    // Para data final adicionamos um mês, vito que o A Receber gerado é automaticamente adicionando com vencimento de um mês após data do documento
                    const dataFinal = dayjs().add(1, 'month').endOf('day').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Atualizar as datas no payload
                    payload.dataInicial = dataInicial;
                    payload.dataFinal = dataFinal;

                    cy.postRequest('/api/financeiro/v1/Agenda/Listagem', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Encontrar o objeto dentro de `titulos` onde `valor` é igual a 70
                            const tituloReceber = response.body.data.titulos.find(titulo => titulo.valor === 70 && titulo.statusTitulo === 3 && titulo.numero === numeroDocumento);
                            const tituloPagar = response.body.data.titulos.find(titulo => titulo.valor === 70 && titulo.statusTitulo === 4 && titulo.numero === numeroDocumento);

                            // Salvando ID dos documentos a receber e a pagar
                            idDocumentoReceber = tituloReceber.id;
                            idDocumentoPagar = tituloPagar.id;
                        })
                })
            })

            it('CT3 - Deve Fazer o Encontro de Contas - Abater o a Pagar com o a Receber', () => {
                cy.fixture('financeiro/encontroContas/encontroContas/payloadCt3.json').then((payload) => {

                    // Passando os ID encontrados anteriormente para pagamento
                    payload.listaContasAPagarId = [idDocumentoPagar];
                    payload.listaContaAReceberId = [idDocumentoReceber];

                    cy.postRequest('/api/financeiro/v1/EncontroContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                        })
                })
            })
        })
    })
})