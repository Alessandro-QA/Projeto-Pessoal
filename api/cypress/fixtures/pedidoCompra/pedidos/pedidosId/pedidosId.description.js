const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos" obtém os detalhes de um pedido específico pelo seu ID.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter os detalhes de um pedido específico, utilizando o ID do pedido como parâmetro na URL.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém as informações do pedido.
          Além disso, valida que o ID do pedido retornado na resposta corresponde ao ID fornecido na solicitação.
        </span>
      </div>
    `,
};

export default html;
