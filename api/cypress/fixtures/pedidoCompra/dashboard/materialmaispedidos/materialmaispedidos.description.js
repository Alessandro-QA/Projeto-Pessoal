const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/Material/MaisPedidos" retorna os materiais mais pedidos, com parâmetros padrão.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter os materiais mais pedidos, utilizando os parâmetros padrão.
          Verifica se a API retorna um status '200', se o corpo da resposta não é nulo e se cada item do array de materiais possui os campos esperados (nomeMaterial, unidadeMedida, valor, quantidade).
        </span>
      </div>
    `,

    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/Material/MaisPedidos" retorna os materiais mais pedidos para uma fazenda específica.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter os materiais mais pedidos para uma fazenda específica.
          Verifica se a API retorna um status '200', se o corpo da resposta não é nulo e se cada item do array de materiais possui os campos esperados (nomeMaterial, unidadeMedida, valor, quantidade).
          Além disso, verifica se o material "Soja" está presente na lista e se possui os valores esperados para 'nomeMaterial', 'unidadeMedida', 'valor' e 'quantidade'.
        </span>
      </div>
    `,
};

export default html;
