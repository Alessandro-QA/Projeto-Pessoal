const html = {
  lancamentoIndevido: `
  <div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Lançamento Indevido </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que eu faca upload de um arquivo OFX que contenha lançamento ausente no OFX <br/>
    <strong>QUANDO</strong> a Validação de Divergências for realizada <br/>
    <strong>ENTAO</strong> no Extrato Bancário deve exibir mensagem informando que o lançamento é indevido <br/>
    <strong>E</strong> no Extrato do myFarm deve exibir informações do lançamento presente no MyFarm <br/>
  </div>
  `,

  pagamento: `
  <div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Adição de pagamento </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir uma nova Movimentação bancaria do tipo pagamento<br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clica em adicionar <br/>
    <strong>ENTAO</strong> o registro será salvo e validado na listagem de Movimentações Bancárias <br/>
  </div>
  `,

  recebimento: `
  <div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Adição de recebimento </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir uma nova Movimentação bancaria do tipo recebimento<br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clica em adicionar <br/>
    <strong>ENTAO</strong> o registro será salvo e validado na listagem de Movimentações Bancárias <br/>
  </div>
  `,

  finalizarConciliacao: `
  <div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Finalizar Conciliação </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que eu tenha solucionado as divergências de uma Conciliação Bancária<br/>
    <strong>QUANDO</strong> clicar no botão "Finalizar Conciliação <br/>
    <strong>ENTAO</strong> deve exibir mensagem de sucesso <br/>
  </div>
  `
}

export default html
