const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/ProximasEntregas" retorna as próximas entregas de pedidos de compra.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter as próximas entregas de pedidos de compra.
          Verifica se a API retorna um status '200', se o corpo da resposta não é nulo e se cada item do array de entregas possui os campos esperados (codigoPedido, fornecedorDescricao, quantidadeItens, dataEntrega).
        </span>
      </div>
    `,

    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/ProximasEntregas" retorna as próximas entregas de pedidos de compra com base em um fazendaId específico.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter as próximas entregas de pedidos de compra com base em um fazendaId específico.
          Verifica se a API retorna um status '200', se o corpo da resposta não é nulo e se cada item do array de entregas possui os campos esperados (codigoPedido, fornecedorDescricao, quantidadeItens, dataEntrega).
        </span>
      </div>
    `,
};

export default html;
