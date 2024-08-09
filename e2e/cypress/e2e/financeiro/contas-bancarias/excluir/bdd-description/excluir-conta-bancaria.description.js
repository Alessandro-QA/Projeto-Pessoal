const html = {
  Ct1: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastrar Conta Corrente via API - Todos os Tipos </span>
</div>
`,
  Ct2: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Excluir Conta Bancaria </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> excluir uma conta existente <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Excluir conta corrente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira excluir uma conta corrente <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> buscar pelo nome da conta <br/>
    <strong>E</strong> clicar no card da conta <br/>
    <strong>E</strong> clicar no ícone de excluir conta <br/>
    <strong>E</strong> confirmar a mensagem de exclusão <br/>
    <strong>ENTAO</strong> deverá ser excluído e validado na Listagem de Contas bancárias <br/>
</div>
  `,
  Ct3: `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Validar Exclusão da conta </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> excluir uma conta existente <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Validar exclusão de conta corrente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu exclui uma conta corrente <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> buscar pelo nome da conta <br/>
    <strong>ENTAO</strong> não deverá existir o card referente a conta<br/>
</div>
  `,
  Ct4: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Excluir Conta Bancaria </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> excluir uma conta existente <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Excluir cartão de crédito </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira excluir um cartão de crédito <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> buscar pelo nome da conta <br/>
    <strong>E</strong> clicar no card do cartão <br/>
    <strong>E</strong> clicar no ícone de excluir conta <br/>
    <strong>E</strong> confirmar a mensagem de exclusão <br/>
    <strong>ENTAO</strong> deverá ser excluído e validado na Listagem de Contas bancárias <br/>
</div>
  `,
  Ct5: `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Validar Exclusão da conta </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> excluir uma conta existente <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Validar exclusão de cartão de crédito </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu exclui um cartão de crédito <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> buscar pelo nome do cartão <br/>
    <strong>ENTAO</strong> não deverá existir o card referente ao cartão <br/>
</div>
  `,
  Ct6: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Excluir Conta Bancaria </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> excluir uma conta existente <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Excluir conta tesouraria </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira excluir uma conta tesouraria <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> buscar pelo nome da conta <br/>
    <strong>E</strong> clicar no card da conta <br/>
    <strong>E</strong> clicar no ícone de excluir conta <br/>
    <strong>E</strong> confirmar a mensagem de exclusão <br/>
    <strong>ENTAO</strong> deverá ser excluído e validado na Listagem de Contas bancárias <br/>
</div>
  `,
  Ct7: `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Validar Exclusão da conta </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> excluir uma conta existente <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Validar exclusão de conta tesouraria </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu exclui uma conta tesouraria <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> buscar pelo nome da conta <br/>
    <strong>ENTAO</strong> não deverá existir o card referente a conta<br/>
</div>
  `,
}

export default html
