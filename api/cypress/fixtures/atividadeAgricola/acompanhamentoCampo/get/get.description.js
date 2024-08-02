const description = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - AcompanhamentoCampo/Get" permite obter uma lista de dados de acompanhamento de campo filtrados por Fazenda, Safra e Ciclo.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'POST' para obter uma lista de dados de acompanhamento de campo filtrada por Fazenda, Safra e Ciclo, usando filtros obrigatórios.
        Verifica se a API retorna um status '200' e valida os campos e seus tipos para cada item na lista retornada.
      </span>
    </div>
  `
};

export default description;