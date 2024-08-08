const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Cria uma nova fazenda no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'POST' para criar uma nova fazenda com um nome específico. Verifica se a resposta tem status '200' e valida os dados retornados. O ID da fazenda criada é armazenado para uso em testes posteriores.
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Edita uma fazenda existente no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'PUT' para atualizar uma fazenda existente com um novo nome. Verifica se a resposta tem status '200' e valida os dados retornados.
      </span>
    </div>
  `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Desativa uma fazenda existente no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'PATCH' para desativar uma fazenda existente. Após desativar, realiza uma nova requisição para obter os detalhes da fazenda e verificar se a propriedade 'ativo' é falsa.
      </span>
    </div>
  `,
  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Ativa uma fazenda existente no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT4:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'PATCH' para ativar uma fazenda que foi previamente desativada. Após ativar, realiza uma nova requisição para obter os detalhes da fazenda e verificar se a propriedade 'ativo' é verdadeira.
      </span>
    </div>
  `,
  Ct5: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Deleta uma fazenda existente do sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT5:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'DELETE' para excluir uma fazenda utilizando o ID armazenado previamente. Verifica se a resposta tem status '200'.
      </span>
    </div>
  `,
};

export default html;
