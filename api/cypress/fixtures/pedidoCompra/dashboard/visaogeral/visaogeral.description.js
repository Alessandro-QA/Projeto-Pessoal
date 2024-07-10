const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/VisaoGeral" retorna a visão geral do dashboard de pedidos de compra.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter a visão geral do dashboard de pedidos de compra.
          Verifica se a API retorna um status '200', se o header 'x-tenant' está correto e se o corpo da resposta não é nulo.
        </span>
      </div>
    `,
};

export default html;
