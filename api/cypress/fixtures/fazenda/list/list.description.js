const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Obtém uma lista de fazendas ativas no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para buscar fazendas ativas. Verifica se a resposta tem status '200' e valida os dados retornados.
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Obtém uma lista de fazendas inativas no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para buscar fazendas inativas. Verifica se a resposta tem status '200' e valida os dados retornados.
      </span>
    </div>
  `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">Obtém uma lista de fazendas filtradas pelo nome no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para buscar fazendas filtradas pelo nome. Verifica se a resposta tem status '200', se é um array, e se todos os objetos no array contêm o nome esperado.
      </span>
    </div>
  `,
};

export default html;
