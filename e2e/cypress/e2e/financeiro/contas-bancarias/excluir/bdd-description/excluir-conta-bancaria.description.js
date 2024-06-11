const html = {
  excluir: `
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
    <span style="color: #b22222;"> Excluir conta </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira excluir uma conta <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
    <strong>E</strong> clicar em uma conta <br/>
    <strong>E</strong> clicar no ícone de excluir conta <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em Excluir <br/>
    <strong>ENTAO</strong> deverá ser excluído e validado na Listagem de Contas bancárias <br/>
</div>
  `,
}

export default html
