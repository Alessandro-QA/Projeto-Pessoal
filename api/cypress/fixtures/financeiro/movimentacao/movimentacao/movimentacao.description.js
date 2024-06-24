const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota GET de Movimentação recupera todos os dados de Movimentação Bancária pelo ID</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo trazer uma movimentação do tipo PAGAMENTOS, validar campos de todos títulos e categorias associados, além de verificar o ID se trago de maneira correta e o tipo se é do tipo 2 (Pagamentos)</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota GET de Movimentação recupera todos os dados de Movimentação Bancária pelo ID</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo trazer uma movimentação do tipo RECEBIMENTO, validar campos de todos títulos e categorias associados, além de verificar o ID se trago de maneira correta e o tipo se é do tipo 3 (Recebimentos)</span>
      </div>
    `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota GET de Movimentação recupera todos os dados de Movimentação Bancária pelo ID</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste tem como objetivo trazer uma movimentação do tipo TRANSFERÊNCIA, validar campos de todos títulos e categorias associados, além de verificar o ID se trago de maneira correta e o tipo se é do tipo 3 (Transferências). Diferente de pagamento e recebimento é necessário verificar também os campos Conta Origem e Conta Destino, visto que é uma transferência.</span>
    </div>
  `
}

export default html
