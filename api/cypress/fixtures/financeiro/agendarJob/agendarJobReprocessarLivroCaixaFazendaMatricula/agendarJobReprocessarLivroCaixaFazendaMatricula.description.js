const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - agendarJobReprocessarLivroCaixaFazendaMatricula" agenda o reprocessamento considerando participações definidas na matrícula da fazenda. É um reprocessamento para quando houver atualização nessas configurações.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', gerando um agendamento de reprocessamento de livro caixa nos casos em que houve alteração nas matrículas da fazenda em questão, e retorna uma mensagem de sucesso caso o agendamento tenha sido realizado.</span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - agendarJobReprocessarLivroCaixa traz uma lista de todos os tenants que estão na fila pra reprocessamento.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Neste teste, a requisição get traz uma lista de todos os tenants que estão na fila pra reprocessamento, considerando o parâmetro "enumReprocessarLivroCaixa", que nesse teste, estará como "ReprocessarLivroCaixaDocumentoFazendaMatricula" ou apenas "2".</span>
      </div>
    `,
}

export default html