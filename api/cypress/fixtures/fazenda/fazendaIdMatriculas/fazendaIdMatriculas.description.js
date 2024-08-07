const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Fazendas/{id}/matriculas" recupera as matrículas associadas a uma fazenda específica identificada pelo ID fornecido.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para buscar as matrículas associadas a uma fazenda específica usando o ID fornecido. O teste verifica se a resposta da API retorna um status '200' e se o cabeçalho da solicitação contém o valor correto para 'x-tenant'. Além disso, valida que a resposta é um array contendo as matrículas da fazenda.
        </span>
      </div>
    `,
  };
  
  export default html;
  