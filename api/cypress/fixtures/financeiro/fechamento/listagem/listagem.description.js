const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - Fechamento/Listagem" lista os fechamentos financeiros de uma empresa.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'POST' para listar os fechamentos financeiros de uma empresa específica.
        Verifica se a API retorna um status '200' e se os dados retornados correspondem aos esperados.
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - Fechamento/Listagem" lista os fechamentos financeiros de empresas por ID.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'POST' para listar os fechamentos financeiros de empresas específicas por ID.
        Verifica se a API retorna um status '200' e se os dados retornados correspondem aos esperados.
      </span>
    </div>
  `,
}

export default html;
 