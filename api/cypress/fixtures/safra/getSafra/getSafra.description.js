const html = {
  Ct1: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota GET de Safra permite a listagem de todas as safras cadastradas.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
    <span style="color: black;">
      Este teste realiza uma requisição do tipo 'GET' para listar todas as safras cadastradas.
      Assim que a resposta é recebida, é validado se os dados retornados coincidem com os esperados.
    </span>
  </div>
`,
Ct2: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota GET de Safra permite a consulta de uma safra específica pelo seu ID.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
    <span style="color: black;">
      Este teste realiza uma requisição do tipo 'GET' para consultar uma safra específica pelo seu ID.
      Assim que a resposta é recebida, é validado se os dados retornados coincidem com os dados esperados para aquele ID.
    </span>
  </div>
`
}

  
  export default html;