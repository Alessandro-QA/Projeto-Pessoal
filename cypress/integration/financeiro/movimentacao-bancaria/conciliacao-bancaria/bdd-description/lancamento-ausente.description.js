const html = {
    lancamentoAusente: `
  <div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Lançamento Ausente </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que eu faca upload de um arquivo OFX que contenha lancamento ausente no MyFarm <br/>
    <strong>QUANDO</strong> a Validação de Divergências for realizada <br/>
    <strong>ENTAO</strong> no Extrato Bancário deve exibir informações do lançamento presente no OFX <br/>
    <strong>E</strong> no Extrato do myFarm deve exibir mensagem informando que o lançamento está ausente no MyFarm <br/>
  </div>
    `,
  }
  
  export default html
