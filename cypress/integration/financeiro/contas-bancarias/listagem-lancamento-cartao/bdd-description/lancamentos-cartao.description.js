const html = {
  semFiltro: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Lançamentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da Fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos realizados no cartão de crédito <br/>
    <strong>PARA</strong> melhor controle financeiro da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Sem filtro </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos no cartão de crédito <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> clicar em ver lançamento na conta tipo cartão de crédito <br/>
    <strong>ENTAO</strong> deverá ser mostrado e validado todos os lançamentos na Listagem de Lançamentos - Cartão de Crédito <br/>
</div>
  `,
  filtrarPeriodo: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Lançamentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da Fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos realizados no cartão de crédito <br/>
    <strong>PARA</strong> melhor controle financeiro da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar por período </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria visualizar os lançamentos por data no cartão de crédito <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> clicar em ver lançamento na conta tipo cartão de crédito <br/>
    <strong>E</strong> informar um período <br/>
    <strong>ENTAO</strong> deverá ser mostrado e validado todos os lançamentos no período informado na Listagem de Lançamentos - Cartão de Crédito <br/>
</div>
  `
}

export default html
