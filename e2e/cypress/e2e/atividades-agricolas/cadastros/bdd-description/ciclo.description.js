const html = {
    ciclo: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de ciclo </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> cadastrar um ciclo de produção <br/>
    <strong>PARA</strong> gerenciar as culturas que irei trabalhar em uma safra específica <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Cadastrar ciclo inexistente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que o usuário esteja com o modal cadastro de ciclo aberto <br/>
    <strong>QUANDO</strong> os campos obrigatórios forem preenchidos <br/>
    <strong>E</strong> clicar no botão <b>"Adicionar"</b> <br/>
    <strong>ENTAO</strong> o ciclo é cadastrado e o modal de cadastro será fechado <br/>
</div>
   `
}

//export default html
