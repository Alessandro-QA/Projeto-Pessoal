const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Fazendas/ListarEmpresasComMatriculaFazenda" retorna uma lista de empresas que possuem matrícula de fazenda.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para listar todas as empresas que possuem matrícula de fazenda. O teste verifica se a resposta da API retorna um status '200' e se o cabeçalho da solicitação contém o valor correto para 'x-tenant'. Além disso, valida que a resposta é um array, garantindo que a lista de empresas foi retornada corretamente.
        </span>
      </div>
    `,
  };
  
  export default html;
  