const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota POST de Pagamento/Recebimento adiciona uma movimentação bancária de um dos Tipos sendo definido o tipo pelo Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo realizar um PAGAMENTO e então validar os valores passado e o response recebido. Ao final do teste o pagamento é apagado e validado também seu DELETE</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota POST de Pagamento/Recebimento adiciona uma movimentação bancária de um dos Tipos sendo definido o tipo pelo Body</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo realizar um RECEBIMENTO e então validar os valores passado e o response recebido. Ao final do teste o pagamento é apagado e validado também seu DELETE</span>
      </div>
    `
}

export default html
