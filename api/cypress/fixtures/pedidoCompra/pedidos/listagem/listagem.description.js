const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos/Listagem" retorna a listagem de pedidos com parâmetros padrão.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para obter a listagem de pedidos utilizando os parâmetros padrão.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array não vazio.
          Além disso, valida cada pedido retornado no array, garantindo que possuem as propriedades esperadas (id, codigo, data, fornecedorDescricao, fornecedorDocumentoPrincipal, safraDescricao, fazendaDescricao, statusPedido, empresaDescricao).
        </span>
      </div>
    `,

    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos/Listagem" retorna a listagem de pedidos filtrados por status "Aguardando Entrega".</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para obter a listagem de pedidos filtrados pelo status "Aguardando Entrega".
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array não vazio.
          Além disso, valida cada pedido retornado no array, garantindo que possuem as propriedades esperadas (id, codigo, data, fornecedorDescricao, fornecedorDocumentoPrincipal, safraDescricao, fazendaDescricao, statusPedido, empresaDescricao).
        </span>
      </div>
    `,

    Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos/Listagem" retorna a listagem de pedidos filtrados por fornecedor.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para obter a listagem de pedidos filtrados pelo fornecedor especificado no payload.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array não vazio.
          Além disso, valida cada pedido retornado no array, garantindo que possuem as propriedades esperadas (id, codigo, data, fornecedorDescricao, fornecedorDocumentoPrincipal, safraDescricao, fazendaDescricao, statusPedido, empresaDescricao).
          Também valida que o campo fornecedorDocumentoPrincipal está presente na resposta.
        </span>
      </div>
    `,

    Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos/Listagem" retorna a listagem de pedidos filtrados por safra.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT4:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para obter a listagem de pedidos filtrados pela safra especificada no payload.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array não vazio.
          Além disso, valida cada pedido retornado no array, garantindo que possuem as propriedades esperadas (id, codigo, data, fornecedorDescricao, fornecedorDocumentoPrincipal, safraDescricao, fazendaDescricao, statusPedido, empresaDescricao).
          Também valida que o campo safraDescricao está presente na resposta e é uma string.
        </span>
      </div>
    `,
};

export default html;
