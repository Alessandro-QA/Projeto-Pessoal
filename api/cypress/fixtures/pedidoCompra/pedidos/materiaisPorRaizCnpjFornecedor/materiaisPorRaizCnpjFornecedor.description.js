const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos/MateriaisPorRaizCnpjFornecedor" obtém materiais associados a um fornecedor específico com base no ID da empresa.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter a lista de materiais associados a um fornecedor, utilizando o ID da empresa como parâmetro na URL.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array de materiais.
          Além disso, valida que cada item no array possui as propriedades esperadas: 'material', 'unidadeMedida', 'classificacao', e 'pedidos'.
          Também verifica se a propriedade 'descricao' dentro de 'material' é uma string e se 'pedidos' é um array.
        </span>
      </div>
    `,
};

export default html;
