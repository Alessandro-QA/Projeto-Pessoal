const html = {
  entradaDedutivel: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Adicionar Lançamento </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> adicionar um novo lançamento no livro caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1: </span>
    <span style="color: #b22222;"> Tipo entrada </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
    <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
    <strong>E</strong> clicar em Adicionar lançamento <br/>
    <strong>E</strong> clicar em Entrada <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em Salvar <br/>
    <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  <span style="color: #800080; font-weight: bold;"> Cenario 2: </span>
  <span style="color: #b22222;"> Tipo dedutível </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
  <strong>E</strong> clicar em Adicionar lançamento <br/>
  <strong>E</strong> clicar em dedutível <br/>
  <strong>E</strong> preencher todos os campos obrigatórios <br/>
  <strong>E</strong> clicar em Salvar <br/>
  <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  `,
  entradaNaoDedutivel: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Adicionar Lançamento </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> adicionar um novo lançamento no livro caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1: </span>
    <span style="color: #b22222;"> Tipo entrada </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
    <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
    <strong>E</strong> clicar em Adicionar lançamento <br/>
    <strong>E</strong> clicar em Entrada <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em Salvar <br/>
    <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  <span style="color: #800080; font-weight: bold;"> Cenario 2: </span>
  <span style="color: #b22222;"> Tipo não dedutível </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
  <strong>E</strong> clicar em Adicionar lançamento <br/>
  <strong>E</strong> clicar em não dedutível <br/>
  <strong>E</strong> preencher todos os campos obrigatórios <br/>
  <strong>E</strong> clicar em Salvar <br/>
  <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  `,
  saidaDedutivel: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Adicionar Lançamento </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> adicionar um novo lançamento no livro caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1: </span>
    <span style="color: #b22222;"> Tipo saída </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
    <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
    <strong>E</strong> clicar em Adicionar lançamento <br/>
    <strong>E</strong> clicar em Saída <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em Salvar <br/>
    <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  <span style="color: #800080; font-weight: bold;"> Cenario 2: </span>
  <span style="color: #b22222;"> Tipo dedutível </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
  <strong>E</strong> clicar em Adicionar lançamento <br/>
  <strong>E</strong> clicar em dedutível <br/>
  <strong>E</strong> preencher todos os campos obrigatórios <br/>
  <strong>E</strong> clicar em Salvar <br/>
  <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  `,
  saidaNaoDedutivel: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Adicionar Lançamento </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> adicionar um novo lançamento no livro caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1: </span>
    <span style="color: #b22222;"> Tipo saída </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
    <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
    <strong>E</strong> clicar em Adicionar lançamento <br/>
    <strong>E</strong> clicar em saída <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em Salvar <br/>
    <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  <span style="color: #800080; font-weight: bold;"> Cenario 2: </span>
  <span style="color: #b22222;"> Tipo não dedutível </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira adicionar um novo lançamento no livro caixa <br/>
  <strong>QUANDO</strong> eu selecionar um produtor para verificar os detalhes do mesmo no Livro Caixa <br/>
  <strong>E</strong> clicar em Adicionar lançamento <br/>
  <strong>E</strong> clicar em não dedutível <br/>
  <strong>E</strong> preencher todos os campos obrigatórios <br/>
  <strong>E</strong> clicar em Salvar <br/>
  <strong>ENTAO</strong> o lançamento será salvo e validado na Listagem de lançamentos e na Listagem do Livro Caixa <br/>
</div>
  `,
}

export default html
