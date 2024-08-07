const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - Atividade" cria uma nova atividade no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'POST' para criar uma nova atividade, utilizando um payload com datas previstas de início e fim.
        Verifica se a API retorna um status '200' e armazena o ID da atividade criada.
        Além disso, valida os dados da atividade criada.
      </span>
    </div>
  `,

  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "PUT - Atividade" edita uma atividade existente no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'PUT' para editar uma atividade existente, utilizando um payload com o ID da atividade e as novas datas previstas.
        Verifica se a API retorna um status '200' e valida os dados da atividade editada.
      </span>
    </div>
  `,

  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - Atividade/{id}" obtém os detalhes de uma atividade específica.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para obter os detalhes de uma atividade específica utilizando o ID armazenado anteriormente.
        Verifica se a API retorna um status '200' e se o corpo da resposta não está vazio.
      </span>
    </div>
  `,

  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "DELETE - Atividade" exclui uma atividade do sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT4:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'DELETE' para excluir uma atividade utilizando o ID armazenado anteriormente.
        Verifica se a API retorna um status '200' e se o corpo da resposta contém as propriedades 'success' e 'data' com valor 'true'.
      </span>
    </div>
  `,
};

export default html