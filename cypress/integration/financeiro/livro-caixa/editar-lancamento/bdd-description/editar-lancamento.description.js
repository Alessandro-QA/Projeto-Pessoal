const html = {
  editar: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Editar lançamento </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gerente da fazenda <br/>
  <strong>QUERO</strong> editar um lançamento no livro caixa <br/>
  <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Editar um lançamento no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queria editar um lançamento no livro Caixa <br/>
  <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
  <strong>E</strong> clicar em um lançamento <br/>
  <strong>E</strong> preencher os campos obrigatórios <br/>
  <strong>E</strong> clicar em Salvar <br/>
  <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  `,
}

export default html
