const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/GastoClassificacao" retorna os gastos por categoria, com parâmetros padrão.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter os gastos por categoria, utilizando os parâmetros padrão.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array não vazio.
          Além disso, valida cada categoria retornada no array, garantindo que possuem as propriedades esperadas (nomeCategoria, valorMateriais, porcentagem).
        </span>
      </div>
    `,

    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/GastoClassificacao" retorna os gastos por categoria, com filtro por fazenda e safra.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter os gastos por categoria, utilizando filtro por fazenda e safra.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array não vazio.
          Além disso, verifica se a categoria "Grãos" está presente na lista de categorias retornadas e se possui os valores esperados (valorMateriais = 170.00, porcentagem = 100.00).
        </span>
      </div>
    `,
};

export default html;
