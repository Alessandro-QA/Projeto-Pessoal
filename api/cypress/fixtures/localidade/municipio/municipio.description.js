const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota Municipio de 'localidade' traz listado os municípios podendo ser feito um filtro pelo seu ID ou uma consulta por Estado/Nome/Sigla</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo trazer todos os municípios do sistema, fazendo uma validação dos dados apresentados se formatação está correta</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota Municipio de 'localidade' traz listado os municípios podendo ser feito um filtro pelo seu ID ou uma consulta por País/Nome/Sigla</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo trazer somente os municípios de Goiás, fazendo uma validação dos dados apresentados se formatação está correta</span>
      </div>
    `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota Municipio de 'localidade' traz listado os municípios podendo ser feito um filtro pelo seu ID ou uma consulta por País/Nome/Sigla</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste tem como objetivo trazer somente o município de Goiânia pelo seu ID, fazendo uma verificação dos dados retornados se correspondetes ao município filtrado</span>
    </div>
  `,
}

export default html
