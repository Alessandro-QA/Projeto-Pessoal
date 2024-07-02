const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">Operações CRUD para o recurso de Fechamento financeiro.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para criar um novo fechamento financeiro.
          Verifica se a API retorna status '200', sucesso na operação e dados corretos.
        </span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'PUT' para atualizar os dados de um fechamento existente.
          Verifica se a API retorna status '200' e se os dados foram atualizados corretamente.
        </span>
      </div>
    `,
    Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'PATCH' para aplicar um patch nos dados de um fechamento existente.
          Verifica se a API retorna status '200' após o patch.
        </span>
      </div>
    `,
    Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT4:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter os dados de um fechamento específico.
          Verifica se a API retorna status '200' e se os dados retornados são corretos.
        </span>
      </div>
    `,
    Ct5: `
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT5:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'DELETE' para deletar um fechamento específico.
          Verifica se a API retorna status '200' após a exclusão.
        </span>
      </div>
    `,
  };
  
  export default html;
  