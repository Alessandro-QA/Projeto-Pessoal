const html = {
  semFiltro: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Listagem de Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gerente financeiro da fazenda <br/>
  <strong>QUERO</strong> consultar o Livro Caixa <br/>
  <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Sem aplicar filtro </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira consultar o Livro Caixa <br/>
  <strong>QUANDO</strong> eu entrar na Listagem do Livro Caixa <br/>
  <strong>E</strong> não houve preenchimento de filtros <br/>
  <strong>ENTAO</strong> deverá ser apresentado e validado todos produtores cadastrados em meu Livro Caixa <br/>
</div>
 `,
 filtroProdutor: `
<div>
  <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
  <span style="color: #b22222;"> Listagem de Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gerente financeiro da fazenda <br/>
  <strong>QUERO</strong> consultar o Livro Caixa <br/>
  <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Filtrar por produtor </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira consultar o Livro Caixa <br/>
  <strong>QUANDO</strong> eu entrar na Listagem do Livro Caixa <br/>
  <strong>E</strong> selecionar um produtor no filtro de produtores <br/>
  <strong>ENTAO</strong> deverá ser apresentado e validado o produtor em meu Livro Caixa <br/>
</div>
 `,
 fitlroPeriodo: `
 <div>
   <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
   <span style="color: #b22222;"> Listagem de Livro Caixa </span>
 </div>
 <div style="margin-left: 40px;">
   <strong>COMO</strong> gerente financeiro da fazenda <br/>
   <strong>QUERO</strong> consultar o Livro Caixa <br/>
   <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
 </div>
 </br>
 <div>
   <span style="color: #800080; font-weight: bold;"> Cenario: </span>
   <span style="color: #b22222;"> Filtrar por período </span>
 </div>
 <div style="margin-left: 40px;">
   <strong>DADO</strong> que eu queira consultar o Livro Caixa <br/>
   <strong>QUANDO</strong> eu entrar na Listagem do Livro Caixa <br/>
   <strong>E</strong> selecionar um ano no filtro por data <br/>
   <strong>ENTAO</strong> deverá ser apresentado e validado todas as movimentações daquele ano no Livro Caixa <br/>
 </div>
  `
}

export default html
