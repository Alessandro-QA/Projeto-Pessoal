const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota ESTADO de 'localidade' traz listado os estados podendo ser feito um filtro pelo seu ID ou uma consulta por País/Nome/Sigla</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo trazer todos os Estados do sistema, fazendo uma validação dos dados apresentados se formatação está correta</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota ESTADO de 'localidade' traz listado os estados podendo ser feito um filtro pelo seu ID ou uma consulta por País/Nome/Sigla</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo trazer somente os estados do Brasil, fazendo uma verificação se trouxe os 27 estados e uma validação dos dados apresentados se formatação está correta</span>
      </div>
    `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota ESTADO de 'localidade' traz listado os estados podendo ser feito um filtro pelo seu ID ou uma consulta por País/Nome/Sigla</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste tem como objetivo trazer somente o estado de Goías pelo seu ID, fazendo uma verificação dos dados retornados se correspondetes ao estado filtrado</span>
    </div>
  `,
}

export default html
