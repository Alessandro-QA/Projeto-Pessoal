const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - AtendimentoPedidos" retorna os pedidos de atendimento de compra.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para listar os pedidos de atendimento de compra.
        Verifica se a API retorna um status '200', se o header 'x-tenant' está correto e se o corpo da resposta não é nulo.
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - AtendimentoPedidos" retorna os pedidos de atendimento de compra.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para listar os pedidos de atendimento de compra.
        Verifica se a API retorna um status '200', se o corpo da resposta é um array não vazio e se contém itens com a descrição do material "Soja".
      </span>
    </div>
  `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - AtendimentoPedidos" retorna os pedidos de atendimento de compra.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para listar os pedidos de atendimento de compra.
        Verifica se a API retorna um status '200', se o corpo da resposta é um array não vazio e se todos os itens possuem o 'materialId' esperado.
      </span>
    </div>
  `,
  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - AtendimentoPedidos" retorna os pedidos de atendimento de compra.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT4:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para listar os pedidos de atendimento de compra.
        Verifica se a API retorna um status '200', se o corpo da resposta é um array não vazio e se todos os itens possuem os 'materialId' e 'principioAtivoId' esperados.
      </span>
    </div>
  `,
  Ct5: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - AtendimentoPedidos" retorna os pedidos de atendimento de compra.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT5:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para listar os pedidos de atendimento de compra.
        Verifica se a API retorna um status '200', se o corpo da resposta é um array não vazio e se todos os itens possuem a descrição do fornecedor ('fornecedorDescricao') esperada.
      </span>
    </div>
  `,
};

export default html;
