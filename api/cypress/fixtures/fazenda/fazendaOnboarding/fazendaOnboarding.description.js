const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">Cria uma nova fazenda e a exclui imediatamente após a criação.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'POST' para criar uma nova fazenda com um ID e nome aleatórios. Após a criação, a fazenda é excluída com uma requisição 'DELETE'. O teste verifica se a criação e exclusão foram bem-sucedidas com os status esperados e se a resposta da exclusão contém a propriedade 'success' como verdadeira.
        </span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">Edita uma fazenda existente.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'PUT' para editar uma fazenda existente. O teste verifica se a resposta contém o status '200' e se a propriedade 'success' é verdadeira. Além disso, valida que os dados retornados correspondem aos dados enviados na solicitação, incluindo ID, nome, latitude, longitude e código.
        </span>
      </div>
    `,
};

export default html;
