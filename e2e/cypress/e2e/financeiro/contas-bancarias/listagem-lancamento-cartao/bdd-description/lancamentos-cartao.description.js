const html = {
    gerarViaAPi: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Registrar Novos Valores no Cartão de Crédito via API </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> desenvolvedor/testador <br/>
    <strong>QUERO</strong> registrar novos valores no cartão de crédito via API <br/>
    <strong>PARA</strong> garantir que os valores são corretamente registrados e processados <br/>
</div>
<br/>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Registro de Valores via API </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu tenha documentos de pagamento e recebimento <br/>
    <strong>QUANDO</strong> eu enviar esses documentos para a API de Movimentação de Pagamento/Recebimento <br/>
    <strong>ENTAO</strong> os valores devem ser corretamente registrados e processados no sistema <br/>
</div>
  `,
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
