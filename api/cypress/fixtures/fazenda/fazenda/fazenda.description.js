const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - Fazenda" cria uma nova fazenda no sistema.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para criar uma nova fazenda, utilizando um payload com informações detalhadas.
          Verifica se a API retorna um status '200' e valida os dados da fazenda criada, incluindo o ID da fazenda e a lista de matriculas associadas.
        </span>
      </div>
    `,
  
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "PUT - Fazenda" edita uma fazenda existente no sistema.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'PUT' para editar uma fazenda existente, utilizando um payload com informações atualizadas.
          Verifica se a API retorna um status '200' indicando que a edição foi bem-sucedida.
        </span>
      </div>
    `,
  
    Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "DELETE - Fazenda" exclui uma fazenda existente no sistema.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'DELETE' para excluir uma fazenda utilizando o ID da fazenda armazenado anteriormente.
          Verifica se a API retorna um status '200' e confirma que a fazenda foi excluída com sucesso.
        </span>
      </div>
    `,
  };
  
  export default html;
  