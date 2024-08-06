const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - ${Cypress.env('fazenda')}/Fazenda/{id}/matriculas/{IE}/{id}/exploracoes" retorna a lista de explorações associadas a uma matrícula de fazenda específica.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para buscar todas as explorações associadas a uma matrícula específica dentro de uma fazenda. 
          A solicitação inclui o ID da fazenda, o ID da matrícula, e a inscrição estadual (IE). 
          O teste verifica se a API retorna um status '200', se o cabeçalho da solicitação contém o 'x-tenant' com o valor esperado, 
          e se a resposta é um array contendo as explorações. Além disso, valida se cada item da resposta possui as propriedades necessárias.
        </span>
      </div>
    `,
  };
  
  export default html;
  