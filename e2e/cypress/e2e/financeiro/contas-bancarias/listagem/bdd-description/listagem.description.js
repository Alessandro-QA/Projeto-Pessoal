const html = {
  semFiltro: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Contas Bancarias </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da Fazenda <br/>
    <strong>QUERO</strong> visualizar todas as contas cadastradas <br/>
    <strong>PARA</strong> melhor controle financeiro da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Sem filtro </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira Visualizar as Contas financeiras <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> não houve preenchimento de filtros <br/>
    <strong>ENTAO</strong> deverá ser mostrado e validado todas as contas na Listagem de Contas bancárias <br/>
</div>
  `,
  filtrarTipo: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Contas Bancarias </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da Fazenda <br/>
    <strong>QUERO</strong> visualizar todas as contas cadastradas <br/>
    <strong>PARA</strong> melhor controle financeiro da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar por tipo de conta </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar por tipo de conta financeira <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> selecionar um tipo de conta <br/>
    <strong>ENTAO</strong> deverá ser mostrado e validado todas as contas do mesmo tipo na Listagem de Contas bancárias <br/>
</div>
  `,
  filtrarEmpresa: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Contas Bancarias </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da Fazenda <br/>
    <strong>QUERO</strong> visualizar todas as contas cadastradas <br/>
    <strong>PARA</strong> melhor controle financeiro da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar por Empresa </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar as contas de determinada empresa <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> selecionar uma empresa <br/>
    <strong>ENTAO</strong> deverá ser mostrado e validado todas as contas da empresa na Listagem de Contas bancárias <br/>
</div>
  `,
  filtrarSituacao: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Contas Bancarias </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da Fazenda <br/>
    <strong>QUERO</strong> visualizar todas as contas cadastradas <br/>
    <strong>PARA</strong> melhor controle financeiro da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar por situação </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria visualizar as contas ativas/inativas <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> selecionar ativo/inativo <br/>
    <strong>ENTAO</strong> deverá ser mostrado e validado todas as contas que estão ativas ou inativas na Listagem de Contas bancárias <br/>
</div>
  `,
  pesquisar: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Contas Bancarias </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da Fazenda <br/>
    <strong>QUERO</strong> visualizar todas as contas cadastradas <br/>
    <strong>PARA</strong> melhor controle financeiro da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Pesquisar </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria pesquisar por uma conta bancária <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> informar o nome da conta <br/>
    <strong>ENTAO</strong> deverá ser mostrado e validado a conta informado na Listagem de contas bancárias <br/>
</div>
  `
}

export default html
