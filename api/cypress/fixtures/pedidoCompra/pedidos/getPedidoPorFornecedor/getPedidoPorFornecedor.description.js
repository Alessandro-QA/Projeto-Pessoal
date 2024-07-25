const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - Pedidos/MateriaisPorFornecedor" obtém materiais associados a um fornecedor específico com base no ID do fornecedor e no ID da empresa.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para obter a lista de materiais associados a um fornecedor, utilizando os IDs do fornecedor e da empresa como parâmetros na URL.
        Verifica se a API retorna um status '200' e se o corpo da resposta contém um array de materiais.
        Além disso, valida que cada item no array possui as propriedades esperadas: 'material', 'unidadeMedida', 'classificacao', e 'pedidos'.
        Verifica a estrutura e os tipos de dados dessas propriedades, como 'id' e 'descricao' em 'material', 'codigo' e 'descricao' em 'unidadeMedida', 'codigo' e 'descricao' em 'classificacao', e a presença de um array de 'pedidos' contendo propriedades como 'id', 'codigo', 'saldo', e 'valorUnitario'.
      </span>
    </div>
  `,
};

export default html;
