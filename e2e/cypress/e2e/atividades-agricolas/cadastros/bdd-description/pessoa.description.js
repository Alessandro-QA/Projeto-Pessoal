const html = {
    Ct1: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastrar pessoa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente responsável da fazenda <br/>
    <strong>QUERO</strong> poder cadastrar uma nova pessoa <br/>
    <strong>PARA</strong> melhor gestão da minha fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Cadastrar Pessoa Jurídica </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira cadastrar uma nova pessoa <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Cadastro de pessoas <br/>
    <strong>E</strong> clicar em <b>"Adicionar pessoa"</b> <br/>
    <strong>E</strong> selecionar o tipo de pessoa <br/>
    <strong>E</strong> selecionar Pessoa Jurídica <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em <b>"Adicionar"</b> <br/>
    <strong>ENTAO</strong> será salvo e validado na dashboard de Cadastro de pessoas <br/>
</div>
   `,
    Ct2: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastrar pessoa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente responsável da fazenda <br/>
    <strong>QUERO</strong> poder cadastrar uma nova pessoa <br/>
    <strong>PARA</strong> melhor gestão da minha fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Verificar Pessoa Cadastrada na Tela Principal </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar as pessoas cadastradas <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Cadastro de pessoas <br/>
    <strong>E</strong> clicar em <b>"Pesquisar"</b> <br/>
    <strong>E</strong> digitar o nome da pessoa desejada <br/>
    <strong>ENTAO</strong> será exibido card com todos os dados consistentes na dashboard de Cadastro de pessoas <br/>
</div>
   `
}

export default html
