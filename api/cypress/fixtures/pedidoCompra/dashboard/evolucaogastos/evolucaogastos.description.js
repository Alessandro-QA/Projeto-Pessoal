const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Dashboard/EvolucaoGastos" retorna a evolução de gastos por categoria, com parâmetros específicos.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para obter a evolução de gastos por categoria, utilizando os parâmetros especificados.
          Verifica se a API retorna um status '200' e se o corpo da resposta contém um array não vazio.
          Além disso, valida cada item do array de resposta, garantindo que possuem as propriedades esperadas (nomeCategoria, valorMateriais, data).
        </span>
      </div>
    `,
};

export default html;
