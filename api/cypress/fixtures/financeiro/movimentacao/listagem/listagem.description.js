const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota POST de LISTAGEM traz as Movimentações Bancárias de acordo o filtro fornecido no BODY</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo passar todas as empresas selecionadas com um período de data extenso e validar as movimentações listadas se estão no formato correto.</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota POST de LISTAGEM traz as Movimentações Bancárias de acordo o filtro fornecido no BODY</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo passar todas as empresas selecionadas, um período de data extenso e uma Conta Bancária Específica. Por fim, validar as movimentações listadas se estão no formato correto e se são da Conta Bancária filtrada.</span>
      </div>
    `,
  Ct3: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota POST de LISTAGEM traz as Movimentações Bancárias de acordo o filtro fornecido no BODY</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo passar todas as empresas selecionadas, um período de data extenso e uma Categoria Específica. Por fim, validar as movimentações listadas se estão no formato correto e se são da Categoria filtrada.</span>
        </div>
      `,
  Ct4: `
          <div>
            <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
            <span style="color: black;">A rota POST de LISTAGEM traz as Movimentações Bancárias de acordo o filtro fornecido no BODY</span>
          </div>
          <br/>
          <div>
            <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
            <span style="color: black;">Este teste tem como objetivo passar todas as empresas selecionadas, um período de data extenso e uma Pessoa Específica. Por fim, validar as movimentações listadas se estão no formato correto, não sendo possível validar as pessoas filtradas visto que não é retornado a pessoa diretamente no response.</span>
          </div>
        `
}

export default html
