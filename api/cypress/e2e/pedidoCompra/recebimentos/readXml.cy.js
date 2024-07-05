/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/recebimentos/readXml/readXml.description');

context('Pedido Compra', () => {
    context('Recebimentos', () => {
        describe(`POST - ${Cypress.env('pedidoCompra')}/Recebimentos/ReadXml - Realiza o Recebimento Automático via Importação de Arquivo XML`, () => {

            it('CT1 - Carregar XML Brasileiro para validação dos dados carregados automaticamente', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('blocker')

                cy.readFile('cypress/fixtures/pedidoCompra/recebimentos/readXml/XML_BR.xml', 'utf8').then(xmlContent => {
                    const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
                    let formData = `--${boundary}\r\n`;
                    formData += 'Content-Disposition: form-data; name="file"; filename="XML_BR.xml"\r\n';
                    formData += 'Content-Type: text/xml\r\n\r\n';
                    formData += xmlContent;
                    formData += `\r\n--${boundary}--`;

                    // Foi utilizado o cy.request por conta da diferença de padrão do Post - Content-type diferente de um json como padrão
                    cy.request({
                        method: 'POST',
                        url: `${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Recebimentos/ReadXml`,
                        headers: {
                            'Content-Type': `multipart/form-data; boundary=${boundary}`,
                            'x-tenant': Cypress.env('tenant'),
                            'authorization': `Bearer ${Cypress.env('access_token')}`
                        },
                        body: formData,
                        failOnStatusCode: false
                    }).then((response) => {
                        expect(response.status).to.be.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).to.not.be.null;

                        cy.readFile('cypress/fixtures/pedidoCompra/recebimentos/readXml/bodyCt1.json').then((body) => {
                            
                            // Esses campos são diferentes para cada importação 
                            body.data.urlArquivo = response.body.data.urlArquivo
                            body.data.dataRecebimento = response.body.data.dataRecebimento
                            body.data.financeiro.id = response.body.data.financeiro.id
                            body.data.financeiro.pedidoPagamentoParcelas[0].id = response.body.data.financeiro.pedidoPagamentoParcelas[0].id
                            body.data.financeiro.pedidoPagamentoParcelas[0].dataVencimento = response.body.data.financeiro.pedidoPagamentoParcelas[0].dataVencimento
                            body.data.chaveNFe =response.body.data.chaveNFe
                            
                            expect(response.body).to.deep.equal(body)
                            
                            // Anexar arquivo XML ao relatório Allure
                            cy.allureAttachment('XML BR', xmlContent, 'text/xml');
                           
                        })
                    });
                });

            })
        })
    })
})

