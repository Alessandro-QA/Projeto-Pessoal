const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota País de 'localidade' traz listado os países do sistema podendo ser feito um filtro pelo seu ID ou uma consulta por ID/Nome/Sigla</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo trazer todos os países do sistema, fazendo uma validação dos dados apresentados se formatação está correta</span>
        </div>
      `,
      Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota País de 'localidade' traz listado os países do sistema podendo ser feito um filtro pelo seu ID ou uma consulta por ID/Nome/Sigla</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo trazer somente um país filtrado por ID (Brasil), fazendo uma validação dos dados apresentados se formatação está correta</span>
      </div>
    `,
}

export default html
