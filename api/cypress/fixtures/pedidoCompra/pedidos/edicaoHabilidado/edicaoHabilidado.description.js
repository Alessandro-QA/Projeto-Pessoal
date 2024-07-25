const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos/EdicaoHabilitada" obtém o status do pedido para edição pelo ID.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter o status de edição de um pedido específico pelo ID.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém a propriedade 'success' com valor 'true' e a propriedade 'data' com valor 'true'.
        </span>
      </div>
    `,
};

export default html;
