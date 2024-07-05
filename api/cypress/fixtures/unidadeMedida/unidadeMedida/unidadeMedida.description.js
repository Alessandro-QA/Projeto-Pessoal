const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota POST de UnidadeMedida permite a criação de uma nova unidade de medida.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'POST' para criar uma nova unidade de medida utilizando um payload pré-definido em Fixtures.
        Um número aleatório é gerado e adicionado ao campo 'descricao' e 'codigo' para garantir unicidade.
        Após a criação, os dados retornados pela API são validados.
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota PUT de UnidadeMedida permite a atualização de uma unidade de medida existente.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'PUT' para atualizar uma unidade de medida existente utilizando um payload pré-definido em Fixtures.
        O ID da unidade é utilizado e novos valores aleatórios são gerados para os campos 'descricao' e 'codigo'.
        Os dados retornados pela API são validados para garantir que a atualização foi bem-sucedida.
      </span>
    </div>
  `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota GET de UnidadeMedida permite a recuperação de uma unidade de medida existente pelo ID.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'GET' para recuperar uma unidade de medida existente utilizando o ID.
        Os dados retornados pela API são validados para garantir que correspondem aos valores editados anteriormente.
      </span>
    </div>
  `,
  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota DELETE de UnidadeMedida permite a exclusão de uma unidade de medida existente pelo ID.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT4:</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'DELETE' para excluir uma unidade de medida existente utilizando o ID.
        Os dados retornados pela API são validados para garantir que a exclusão foi bem-sucedida.
      </span>
    </div>
  `,
};

export default html;