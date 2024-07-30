const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - Pedidos/FornecedorPedidoByPedidoId" obtém informações do fornecedor associado a um pedido específico com base no ID do pedido.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para obter as informações do fornecedor relacionado a um pedido, utilizando o ID do pedido no corpo da solicitação.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém os detalhes do fornecedor.
          Além disso, valida a estrutura e o conteúdo da resposta, garantindo que o fornecedor possui as propriedades esperadas: 'id', 'descricao' e 'documentoPrincipal', com os tipos de dados corretos.
        </span>
      </div>
    `,
};

export default html;
