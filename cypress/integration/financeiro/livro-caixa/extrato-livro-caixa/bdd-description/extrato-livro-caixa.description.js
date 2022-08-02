const html = {
  filtroProdutor: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Extrato do Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> como gerente/responsável Financeiro da fazenda <br/>
  <strong>QUERO</strong> visualizar o Extrato do Livro Caixa <br/>
  <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Filtrar por produtor </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira visualizar o Extrato do livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um do produtores listados na Listagem do Livro Caixa <br/>
  <strong>E</strong> clicar no Livro caixa <br/>
  <strong>ENTAO</strong> deverá ser listado e validado o Extrato do livro caixa daquele produtor <br/>
</div>
  `,
  filtroAno: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Extrato do Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> como gerente/responsável Financeiro da fazenda <br/>
  <strong>QUERO</strong> visualizar o Extrato do Livro Caixa <br/>
  <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;">  Filtrar por ano </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira visualizar o Extrato do livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um do produtores listados na Listagem do Livro Caixa <br/>
  <strong>E</strong> clicar no Livro caixa <br/>
  <strong>E</strong> selecionar o filtro por ano <br/>
  <strong>ENTAO</strong> deverá ser listado e validado o Extrato do livro caixa daquele produtor no ano informado no filtro <br/>
</div>
  `,
  filtroTodos: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Extrato do Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> como gerente/responsável Financeiro da fazenda <br/>
  <strong>QUERO</strong> visualizar o Extrato do Livro Caixa <br/>
  <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Filtrar por todos (Ativo e Inativo) </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira visualizar o Extrato do livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um do produtores listados na Listagem do Livro Caixa <br/>
  <strong>E</strong> clicar no Livro caixa <br/>
  <strong>E</strong> selecionar o filtro ativo ou inativo <br/>
  <strong>ENTAO</strong> deverá ser listado e validado o Extrato do livro caixa daquele produtor no com status de ativo ou inativo <br/>
</div>
  `,
  exportar: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Extrato do Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> como gerente/responsável Financeiro da fazenda <br/>
  <strong>QUERO</strong> visualizar o Extrato do Livro Caixa <br/>
  <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Exportar Livro </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira visualizar o Extrato do livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um do produtores listados na Listagem do Livro Caixa <br/>
  <strong>E</strong> clicar no Livro caixa <br/>
  <strong>E</strong> clicar em Exportar Livro <br/>
  <strong>ENTAO</strong> deverá ser exportado o Extrato do Livro Caixa de acordo com os filtros aplicados <br/>
</div>
  `
}

export default html
