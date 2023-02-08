const testDescription = {
    realizarLogin: `
<div>
  <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
  <span style="color: #b22222;"> Login </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> um usuario cadastrado <br/>
  <strong>QUERO</strong> acessar o MyFarm <br/>
  <strong>PARA</strong> que possa gerenciar as atividades da fazenda
</div>
<div>
  <span style="color: #800080; font-weight: bold;">Cenario: </span>
  <span style="color: #b22222;"> Login valido </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que o usuario preencha os campos <strong>"E-mail"</strong> e <strong>"Senha"</strong> validos <br/>
  <strong>QUANDO</strong> o usuario clicar em <b>"Entrar"</b> <br/>
  <strong>ENTAO</strong> deve ser redicerionado para a tela principal
</div>
`,

    realizarLogout: `
<div>
  <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
  <span style="color: #b22222;"> Logout </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> um usuario logado <br/>
  <strong>QUERO</strong> encerrar a sessão no MyFarm <br/>
  <strong>PARA</strong> sair da aplicação ou trocar de usuario
</div>
<div>
  <span style="color: #800080; font-weight: bold;">Cenario: </span>
  <span style="color: #b22222;"> Logout da aplicacao</span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que o usuario esteja logado na aplicacao <br/>
  <strong>QUANDO</strong> o usuario clicar em <b>"Sair"</b> <br/>
  <strong>ENTAO</strong> o usuario deve ser deslogado do sistema e redirecionado para tela de login
</div>
`
}

export default testDescription
