const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota POST de Relatorio para Movimentação traz um relatório detalhado do que foi feito de Pagamento e Recebimento no Período. Trazendo no final um Saldo (Recebimento - Pagamento). É possível pela rota filtrar os valores por Empresa, Categoria e Conta Bancária</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo trazer um relatório de todas movimentações no período, daí então somar separadamente os valores de Pagamento e Recebimento e comparar com o somatório total informado. É validado também os tipos de campo informado e o período de data</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota POST de Relatorio para Movimentação traz um relatório detalhado do que foi feito de Pagamento e Recebimento no Período. Trazendo no final um Saldo (Recebimento - Pagamento). É possível pela rota filtrar os valores por Empresa, Categoria e Conta Bancária</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo trazer um relatório das movimentações de uma conta bancária específica no período, daí então somar separadamente os valores de Pagamento e Recebimento e comparar com o somatório total informado. É validado então se as movimentações são da Conta Bancária filtrada, os tipos de campo informado e o período de data</span>
      </div>
    `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota POST de Relatorio para Movimentação traz um relatório detalhado do que foi feito de Pagamento e Recebimento no Período. Trazendo no final um Saldo (Recebimento - Pagamento). É possível pela rota filtrar os valores por Empresa, Categoria e Conta Bancária</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste tem como objetivo trazer um relatório das movimentações de uma empresa específica no período, daí então somar separadamente os valores de Pagamento e Recebimento e comparar com o somatório total informado. É validado então se as movimentações são da Empresa filtrada, os tipos de campo informado e o período de data</span>
    </div>
  `,
  Ct4: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota POST de Relatorio para Movimentação traz um relatório detalhado do que foi feito de Pagamento e Recebimento no Período. Trazendo no final um Saldo (Recebimento - Pagamento). É possível pela rota filtrar os valores por Empresa, Categoria e Conta Bancária</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
    <span style="color: black;">Este teste tem como objetivo trazer um relatório das movimentações de uma categoria específica no período, daí então somar separadamente os valores de Pagamento e Recebimento e comparar com o somatório total informado. É validado então se as movimentações são da Categoria filtrada, os tipos de campo informado e o período de data. Existem movimentações que contém mais de uma categoria, nesse cenário essa movimentação está inclusa caso contenha a filtrada também</span>
  </div>
`,
}

export default html
