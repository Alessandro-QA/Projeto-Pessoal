const html = {
  editar: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Editar colheita </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da fazenda <br/>
  <strong>QUERO</strong> poder editar uma colheita <br/>
  <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Editar </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira editar uma colheita <br/>
  <strong>QUANDO</strong> eu entrar na dashboard de colheita <br/>
  <strong>E</strong> clicar no card de uma das colheitas listadas <br/>
  <strong>E</strong> clicar no ícone de edição <br/>
  <strong>E</strong> preencher todos os campos obrigatórios <br/>
  <strong>E</strong> clicar em atualizar <br/>
  <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de colheita <br/>
</div>
  `
}

export default html
