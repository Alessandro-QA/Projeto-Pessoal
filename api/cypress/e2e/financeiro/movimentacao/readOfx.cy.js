/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/readOfx/readOfx.description');

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Movimentacao/ReadOfx - Carrega dados de conciliação bancária de um arquivo Ofx`, () => {

            it('CT1 - Carregar dados de Conciliação bancária - Santander', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.readFile('cypress/fixtures/financeiro/movimentacao/ReadOfx/Santander.ofx', 'binary').then((fileContent) => {
                    // Cria o FormData manualmente - Converte o arquivo OFX para o formato aceitável pela rota
                    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
                    let formData = `--${boundary}\r\n`;
                    formData += 'Content-Disposition: form-data; name="file"; filename="Santander.ofx"\r\n';
                    formData += 'Content-Type: application/octet-stream\r\n\r\n';
                    formData += fileContent;
                    formData += `\r\n--${boundary}--`;

                    // Foi utilizado o cy.request por conta da diferença de padrão do Post - Content-type diferente de um json como padrão
                    cy.request({
                        method: 'POST',
                        url: `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/ReadOfx`,
                        headers: {
                            'Content-Type': `multipart/form-data; boundary=${boundary}`,
                            'x-tenant': Cypress.env('tenant'),
                            'authorization': `Bearer ${Cypress.env('access_token')}`,
                        },
                        body: formData,
                        failOnStatusCode: false,
                        encoding: 'binary'
                    }).then((response) => {
                        expect(response.status).to.be.equal(200);
                        expect(response.body).to.not.be.null;
                        // Validando se o Response trouxe os dados que contém o arquivo OFX importado
                        cy.readFile('cypress/fixtures/financeiro/movimentacao/ReadOfx/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    });
                });
            });      
        });
    });
});