const html = {
  conta: `
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
    <span style="color: #b22222;"> Editar conta </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira editar uma conta <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> clicar em uma conta <br/>
    <strong>E</strong> clicar no ícone de editar conta <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em Atualizar <br/>
    <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
</div>
  `,
}

export default html
