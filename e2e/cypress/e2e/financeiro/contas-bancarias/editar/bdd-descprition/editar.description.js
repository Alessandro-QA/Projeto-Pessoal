const html = {
  Ct1: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Editar Conta Bancaria </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> editar uma conta existente <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Editar conta corrente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira editar uma conta corrente <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> clicar em uma conta corrente <br/>
    <strong>E</strong> clicar no ícone de editar conta <br/>
    <strong>E</strong> alterar alguns campos <br/>
    <strong>E</strong> clicar em Atualizar <br/>
    <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
</div>
  `,
  Ct2: `
  <div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Visualizar Conta Bancaria </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> visualizar contas bancárias existentes <br/>
    <strong>PARA</strong> melhor gestão da fazenda <br/>
  </div>
  </br>
  <div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Validar listagem da conta corrente editada </span>
  </div>
  <div style="margin-left: 40px;">
    <strong>DADO</strong> que eu editei uma conta corrente <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
    <strong>E</strong> pesquisar o nome da conta corrente <br/>
    <strong>ENTAO</strong> deverá ser listada a conta corrente com nome correspondente <br/>
  </div>
  `,
  Ct3: `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Editar Conta Bancaria </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> editar uma conta existente <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
  </div>
  </br>
  <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Editar cartão de crédito </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira editar um cartão de crédito <br/>
      <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
      <strong>E</strong> clicar em um cartão <br/>
      <strong>E</strong> clicar no ícone de editar conta <br/>
      <strong>E</strong> alterar alguns campos <br/>
      <strong>E</strong> clicar em Atualizar <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
  </div>
    `,
  Ct4: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Visualizar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> visualizar contas bancárias existentes <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Validar listagem de cartão de crédito </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu editei um cartão de crédito <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> pesquisar o nome do cartão <br/>
      <strong>ENTAO</strong> deverá ser listado o cartão com nome correspondente <br/>
    </div>
    `,
  Ct5: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
        <span style="color: #b22222;"> Editar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
        <strong>QUERO</strong> editar uma conta existente <br/>
        <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenario: </span>
        <span style="color: #b22222;"> Editar conta tesouraria </span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira editar uma conta tesouraria<br/>
        <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
        <strong>E</strong> clicar em uma conta tesouraria<br/>
        <strong>E</strong> clicar no ícone de editar conta <br/>
        <strong>E</strong> alterar alguns campos <br/>
        <strong>E</strong> clicar em Atualizar <br/>
        <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
    </div>
      `,
  Ct6: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Visualizar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> visualizar contas bancárias existentes <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Validar listagem de conta tesouraria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu editei uma conta tesouraria <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> pesquisar o nome do conta <br/>
      <strong>ENTAO</strong> deverá ser listada a conta com nome correspondente <br/>
    </div>
    `,
}

export default html
