const html = {
  naoConferido: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Exclusão de Documento </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> excluir algum documento que não foi finalizado <br/>
  <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Excluir um documento sem estar conferido </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira excluir um documento <br/>
  <strong>QUANDO</strong> eu selecionar um documento com status de "Não Conferido" <br/>
  <strong>E</strong> clicar no ícone de lixeira <br/>
  <strong>ENTAO</strong> o documento será excluído e validado a exclusão na Listagem de documentos <br/>
</div>
 `,
 conferido: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Exclusão de Documento </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> excluir algum documento que não foi finalizado <br/>
  <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Excluir um documento conferido </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira excluir um documento <br/>
  <strong>QUANDO</strong> eu selecionar um documento com status de "Conferido" <br/>
  <strong>E</strong> tentar clicar no ícone de lixeira <br/>
  <strong>ENTAO</strong> o documento não deverá será excluído <br/>
</div>
 `
}

export default html
