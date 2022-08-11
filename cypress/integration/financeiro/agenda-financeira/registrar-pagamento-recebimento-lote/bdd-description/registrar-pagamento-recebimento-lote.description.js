const html = {
  pagamentoLote: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Registrar pagamento/recebimento em lote via Listagem </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> registrar pagamento e recebimento de títulos em Lote <br/>
    <strong>PARA</strong> melhor gestão financeira <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Registrar pagamento em Lote </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira registrar um pagamento em lote <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Agenda Financeira <br/>
    <strong>E</strong> selecionar os títulos do tipo pagamento <br/>
    <strong>E</strong> clicar em Efetuar Pagamento  <br/>
    <strong>ENTAO</strong> será validado na Tela de agenda financeira <br/>
</div>
  `,
  recebimentoLote:`
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Registrar pagamento/recebimento em lote via Listagem </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> registrar pagamento e recebimento de títulos em Lote <br/>
    <strong>PARA</strong> melhor gestão financeira <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Registrar recebimento em lote </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira registrar um recebimento em lote <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Agenda Financeira <br/>
    <strong>E</strong> selecionar os títulos do tipo recebimento <br/>
    <strong>E</strong> clicar em Efetuar Recebimento <br/>
    <strong>ENTAO</strong> será validado na Tela de agenda financeira <br/>
</div>
  `
}

export default html
