const html = {
    pesquisa: `
        <div>
            <span style="color: #800080; font-weight: bold;"> Cenario: </span>
            <span style="color: #b22222;"> Pesquisar operação </span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira pesquisar uma operação pelo nome <br/>
            <strong>QUANDO</strong> eu entrar na Listagem de Operações <br/>
            <strong>E</strong> pesquisar uma operação pelo nome <br/>
            <strong>ENTAO</strong> deverá ser listado e validado todas as operações correspondentes ao nome informado na Listagem de Operações <br/>
        </div>
        `,
    tipoOperacao: `
        <div>
            <span style="color: #800080; font-weight: bold;"> Cenario: </span>
            <span style="color: #b22222;"> Filtrar por Tipo </span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira filtrar as operações por tipo <br/>
            <strong>QUANDO</strong> eu entrar na Listagem de Operações <br/>
            <strong>E</strong> selecionar o filtro por tipo da operação <br/>
            <strong>ENTAO</strong> deverá ser listado e validado todas as operações correspondentes ao filtro informado na Listagem de Operações <br/>
        </div>
        `,
    finalidadeOperacao: `
        <div>
            <span style="color: #800080; font-weight: bold;"> Cenario: </span>
            <span style="color: #b22222;"> Filtrar por Finalidade </span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira pesquisar uma operação por finalidade <br/>
            <strong>QUANDO</strong> eu entrar na Listagem de Operações <br/>
            <strong>E</strong> selecionar o filtro de finalidade <br/>
            <strong>ENTAO</strong> deverá ser listado e validado todas as operações correspondentes ao filtro informado na Listagem de Operações <br/>
        </div>
        `,
    movimentacaoFinanceira: `
        <div>
            <span style="color: #800080; font-weight: bold;"> Cenario: </span>
            <span style="color: #b22222;"> Filtrar por Movimentação Financeira </span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira pesquisar uma operação por movimentação financeira <br/>
            <strong>QUANDO</strong> eu entrar na Listagem de Operações <br/>
            <strong>E</strong> selecionar o filtro de movimentação financeira <br/>
            <strong>ENTAO</strong> deverá ser listado e validado todas as operações correspondentes ao filtro informado na Listagem de Operações <br/>
        </div>
        `,
    status: `
        <div>
            <span style="color: #800080; font-weight: bold;"> Cenario: </span>
            <span style="color: #b22222;"> Filtrar por Status </span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira pesquisar uma operação por status <br/>
            <strong>QUANDO</strong> eu entrar na Listagem de Operações <br/>
            <strong>E</strong> selecionar o filtro de status <br/>
            <strong>ENTAO</strong> deverá ser listado e validado todas as operações correspondentes ao filtro informado na Listagem de Operações <br/>
        </div>
        `
}

export default html
