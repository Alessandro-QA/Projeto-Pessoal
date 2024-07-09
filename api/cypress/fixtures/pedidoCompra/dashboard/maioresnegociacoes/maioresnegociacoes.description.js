const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/MaioresNegociacoes" retorna as maiores negociações por fornecedor, com parâmetros padrão.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter as maiores negociações por fornecedor, utilizando os parâmetros padrão.
          Verifica se a API retorna um status '200', se o corpo da resposta não é nulo e se cada item do array de negociações possui os campos esperados (fornecedor, valor, proporção).
          Além disso, verifica se o fornecedor "Fornecedor Teste API" está presente na lista de negociações.
        </span>
      </div>
    `,

    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/MaioresNegociacoes" retorna as maiores negociações por fornecedor, com filtro por fazenda e safra.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter as maiores negociações por fornecedor, utilizando filtro por fazenda e safra.
          Verifica se a API retorna um status '200', se o corpo da resposta não é nulo e se cada item do array de negociações possui os campos esperados (fornecedor, valor, proporção).
          Além disso, verifica se o fornecedor "Fornecedor 2" está presente na lista de negociações.
        </span>
      </div>
    `,
};

export default html;
