const html = {
  pagamento: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Registrar pagamento/recebimento via Listagem </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> registrar pagamento e recebimento de títulos <br/>
    <strong>PARA</strong> melhor gestão financeira <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Registrar pagamento </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu selecionar um título do tipo "A pagar" <br/>
    <strong>QUANDO</strong> eu clicar em "pagar" no título selecionado <br/>
    <strong>E</strong> clicar em "Sim, efetuar pagamento" <br/>
    <strong>ENTAO</strong> será validado na Tela de agenda financeira o pagamento do título <br/>
</div>
  `,
  recebimento:`
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Registrar pagamento/recebimento via Listagem </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> registrar pagamento e recebimento de títulos <br/>
    <strong>PARA</strong> melhor gestão financeira <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Registrar recebimento </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu selecionar um título do tipo "A receber" <br/>
    <strong>QUANDO</strong> eu clicar em "Receber" no título selecionado <br/>
    <strong>E</strong> clicar em "Sim, efetuar recebimento" <br/>
    <strong>ENTAO</strong> será validado na Tela de agenda financeira o pagamento do título <br/>
</div>
  `
}

export default html
