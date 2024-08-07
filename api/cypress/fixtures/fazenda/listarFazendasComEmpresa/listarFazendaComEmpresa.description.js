const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - ${Cypress.env('fazenda')}/Fazenda/ListarFazendasComEmpresa" retorna uma lista de fazendas associadas a uma empresa específica.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para buscar todas as fazendas associadas a uma empresa, especificada pelo ID da empresa.
          O teste verifica se a API retorna um status '200', se o cabeçalho da solicitação contém o 'x-tenant' com o valor esperado, e se a resposta é um array.
          Além disso, valida que cada item no array de resposta contém as propriedades necessárias.
        </span>
      </div>
    `,
  };
  
  export default html;
  