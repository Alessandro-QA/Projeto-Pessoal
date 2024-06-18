const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - agendarJobReprocessarLivroCaixa" agenda o reprocessamento de todo o livro caixa do cliente que está com informações divergentes. É um reprocessamento geral.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', gerando um agendamento de reprocessamento geral de livro caixa, e retorna uma mensagem de sucesso caso o agendamento tenha sido realizado.</span>
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
        <span style="color: black;">Neste teste, a requisição get traz uma lista de todos os tenants que estão na fila pra reprocessamento, considerando o parâmetro "enumReprocessarLivroCaixa", que nesse teste, estará como "ReprocessarLivroCaixaDocumento" ou apenas "1".</span>
      </div>
    `,
}

export default html