/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/pedidos/getPedidoPorFornecedor/getPedidoPorFornecedor.description')

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/Pedidos/GetPedidoPorFornecedor - Obtém pedidos por fornecedor`, () => {

            it('CT1 - Obtém pedidos por fornecedor', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/getPedidoPorFornecedor/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/GetPedidoPorFornecedor`, params)
                        .then((response) => {
                            // Verifica os headers da requisição
                           // Verifica o status code da resposta
                           expect(response.status).to.equal(200)

                           // Verifica se o corpo da resposta existe e não é nulo
                           expect(response.body).to.exist
                           expect(response.body).to.not.be.null

                           // Verifica se a resposta é um array e não está vazia
                           expect(response.body).to.be.an('array').that.is.not.empty

                           // Verifica se cada item na resposta tem a estrutura esperada
                           response.body.forEach(item => {
                               expect(item).to.have.property('id').that.is.a('string')
                               expect(item).to.have.property('codigo').that.is.a('number')
                               expect(item).to.have.property('saldo').that.is.a('number')
                               expect(item).to.have.property('valorUnitario').that.is.a('number')

                               expect(item).to.have.property('empresa').that.is.an('object')
                               expect(item.empresa).to.have.property('id').that.equals(params.empresaId)
                               expect(item.empresa).to.have.property('descricao').that.is.a('string')

                           })
                       })
               })
           })
       })
   })
})