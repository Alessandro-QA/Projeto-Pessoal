export const validatePedidos =  (pedido) => {
    expect(pedido).to.have.property('id').that.is.a('string');
    expect(pedido).to.have.property('codigo').that.is.a('number');
    expect(pedido).to.have.property('data').that.is.a('string');
    expect(pedido).to.have.property('fornecedorDescricao').that.is.a('string');
    expect(pedido).to.have.property('fornecedorDocumentoPrincipal').that.is.a('string');
    expect(pedido).to.have.property('safraDescricao').that.is.a('string');
    expect(pedido).to.have.property('fazendaDescricao').that.is.a('string');
    expect(pedido).to.have.property('statusPedido').that.is.a('number');
    expect(pedido).to.have.property('empresaDescricao').that.is.a('string');
    expect(pedido).to.have.property('numeroPedidoFornecedor').that.is.oneOf([null, pedido.numeroPedidoFornecedor]);
 }