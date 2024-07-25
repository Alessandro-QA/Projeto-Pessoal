const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Pedidos/MateriaisPorFornecedor" obtém materiais associados a um fornecedor específico.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter os materiais fornecidos por um fornecedor específico, utilizando o ID do fornecedor como parâmetro.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém materiais válidos e não nulos.
          Além disso, valida que todos os materiais retornados estão associados ao fornecedor correto.
        </span>
      </div>
    `,
};

export default html;
