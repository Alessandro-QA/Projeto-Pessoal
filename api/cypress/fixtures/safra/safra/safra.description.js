const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota POST de Safra permite a criação de uma nova safra.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição do tipo 'POST' para criar uma nova safra.
          Assim que a safra é criada, é validado se os dados retornados coincidem com os dados enviados no payload.
        </span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota PUT de Safra permite a edição de uma safra existente.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
        <span style="color: black;">
          Este teste realiza uma requisição do tipo 'PUT' para editar uma safra criada anteriormente.
          Assim que a safra é editada, é validado se os dados retornados coincidem com os dados enviados no payload.
        </span>
      </div>
    `,
    Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota DELETE de Safra permite a exclusão de uma safra existente.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
        <span style="color: black;">
          Este teste realiza uma requisição do tipo 'DELETE' para excluir uma safra criada anteriormente.
          Assim que a safra é excluída, é validado se a resposta possui o status esperado.
        </span>
      </div>
    `,
  }
  
  export default html;