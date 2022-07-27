const html = {
  lancamentoProdutor: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Lançamentos do produtor </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos de algum produtor no Livro Caixa <br/>
    <strong>QUANDO</strong> eu entrar na Listagem do Livro Caixa <br/>
    <strong>E</strong> selecionar um dos produtores listados <br/>
    <strong>ENTAO</strong> será mostrado e validado os lançamentos do produtor no Livro Caixa <br/>
</div>
  `,
  filtrarConta: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar por tipo de Conta </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos de algum produtor no Livro Caixa <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listados na Listagem do Livro Caixa <br/>
    <strong>E</strong> selecionar um tipo de conta no filtro de contas <br/>
    <strong>ENTAO</strong> será mostrado e validado todos os lançamento do filtro selecionado <br/>
</div>
  `,
  filtrarFazenda: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar por fazenda </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos de algum produtor no Livro Caixa <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listados na Listagem do Livro Caixa <br/>
    <strong>E</strong> selecionar uma fazenda no filtro de fazenda <br/>
    <strong>ENTAO</strong> será mostrado e validado todos os lançamento do filtro selecionado <br/>
</div>
  `,
  filtroEntradaSaida: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar entrada e saída </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos de algum produtor no Livro Caixa <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listados na Listagem do Livro Caixa <br/>
    <strong>E</strong> selecionar o filtro de Entrada e Saída <br/>
    <strong>ENTAO</strong> será mostrado e validado todos os lançamento do filtro selecionado <br/>
</div>
  `,
  filtrarOrigem: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar todas as origens </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos de algum produtor no Livro Caixa <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listados na Listagem do Livro Caixa <br/>
    <strong>E</strong> selecionar o filtro de Origens <br/>
    <strong>ENTAO</strong> será mostrado e validado todos os lançamento do filtro selecionado <br/>
</div>
  `,
  filtraLancamentos: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar todos os lançamentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos de algum produtor no Livro Caixa <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listados na Listagem do Livro Caixa <br/>
    <strong>E</strong> selecionar o filtro Lançamentos ativos e inativos <br/>
    <strong>ENTAO</strong> será mostrado e validado todos os lançamento do filtro selecionado <br/>
</div>
  `,
  filtrarDedutiveisNaoDedutiveis: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1: </span>
    <span style="color: #b22222;"> Filtrar todos os lançamentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos de algum produtor no Livro Caixa <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listados na Listagem do Livro Caixa <br/>
    <strong>E</strong> selecionar o filtro de Dedutíveis e Não dedutíveis <br/>
    <strong>ENTAO</strong> será mostrado e validado todos os lançamento do filtro selecionado <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 2: </span>
    <span style="color: #b22222;"> Tornar lançamento dedutível </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira tornar um lançamento não dedutível em dedutível <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listado na Listagem do Livro Caixa <br/>
    <strong>E</strong> clicar no ícone para tornar dedutível/Não dedutível <br/>
    <strong>ENTAO</strong> o lançamento será transformado em dedutível <br/>
</div>
  `,
  tornarNaoDedutivel: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Tornar lançamento não dedutível </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira tornar um lançamento não dedutível em dedutível <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listado na Listagem do Livro Caixa <br/>
    <strong>E</strong> clicar no ícone para tornar dedutível/Não dedutível <br/>
    <strong>ENTAO</strong> o lançamento será transformado em Não dedutível <br/>
</div>
  `,
  visualizarNaoDedutiveis: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Visualizar Não Dedutíveis </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar os lançamentos não dedutíveis <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listado na Listagem do Livro Caixa <br/>
    <strong>E</strong> clicar no card "Não dedutível" <br/>
    <strong>ENTAO</strong> será exibidos os lançamentos não dedutíveis <br/>
</div>
  `,
  exportarLivroCaixa: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Lançamentos do produtor no Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> visualizar os lançamentos de um produtor o Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Exportar livro caixa (csv) </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira baixar o arquivo de livro caixa <br/>
    <strong>QUANDO</strong> eu selecionar um dos produtores listado na Listagem do Livro Caixa <br/>
    <strong>E</strong> clicar no ícone de download <br/>
    <strong>ENTAO</strong> deverá ser feito o download do arquivo Livro Caixa <br/>
</div>
  `
}

export default html
