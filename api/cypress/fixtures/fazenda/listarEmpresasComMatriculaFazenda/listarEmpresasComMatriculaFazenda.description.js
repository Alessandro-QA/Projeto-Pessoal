const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Obtém uma lista de empresas com matrícula de fazenda, filtradas por parâmetros específicos.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para buscar empresas com matrícula de fazenda utilizando parâmetros específicos. Verifica se a resposta tem status '200', se é um array e se cada objeto no array possui as propriedades esperadas: 'id', 'nome', e 'documentoPrincipal'.
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Obtém uma lista de todas as empresas com matrícula de fazenda sem parâmetros adicionais.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para buscar todas as empresas com matrícula de fazenda sem filtros adicionais. Verifica se a resposta tem status '200' e se cada objeto na resposta possui as chaves 'id', 'nome', e 'documentoPrincipal'.
      </span>
    </div>
  `,
};

export default html;
 