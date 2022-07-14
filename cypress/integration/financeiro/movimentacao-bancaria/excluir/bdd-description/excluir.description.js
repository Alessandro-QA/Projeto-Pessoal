const html = {
  excluir: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Excluir movimentação </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
  <strong>QUERO</strong> excluir uma movimentação bancaria <br/>
  <strong>PARA</strong> melhor gerencias as movimentações da minha fazenda <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Excluir  </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira excluir uma movimentação <br/>
  <strong>QUANDO</strong> eu entrar na Listagem de movimentações bancarias <br/>
  <strong>E</strong> selecionar um card de movimentação <br/>
  <strong>ENTAO</strong> será validado a exclusão na Listagem de movimentações bancarias <br/>
</div>
  `,
}

export default html
