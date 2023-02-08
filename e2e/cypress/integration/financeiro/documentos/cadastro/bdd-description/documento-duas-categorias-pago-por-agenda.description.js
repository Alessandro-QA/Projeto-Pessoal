const html = {
    livroCaixa: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Movimentações do Livro Caixa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável Financeiro da fazenda <br/>
    <strong>QUERO</strong> visualizar as movimentações financeiras do Livro Caixa <br/>
    <strong>PARA</strong> melhor gestão do meu Livro Caixa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Exportar Livro </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira visualizar as movimentações financeiras do livro caixa <br/>
    <strong>QUANDO</strong> eu selecionar um do produtores listados na Dashboard do Livro Caixa <br/>
    <strong>E</strong> clicar no Livro caixa <br/>
    <strong>E</strong> clicar em Exportar Livro <br/>
    <strong>ENTAO</strong> deverá ser exportado o Livro Caixa de acordo com os filtros aplicados <br/>
</div>
   `
}

export default html
