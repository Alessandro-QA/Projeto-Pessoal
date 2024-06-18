const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - agendarJobReprocessarLivroCaixaEmpresaDeSaoPauloVinculadoAoProdutor" agenda o reprocessamento do livro caixa de acordo com o vínculo de uma empresa de SP com um produtor. Esse reprocessamento é para produtores de SP que possuiam uma empresa no sistema com o CNPJ do mesmo. Foi criado para um caso de um cliente específico e não é comumente utilizada.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', gerando um agendamento de reprocessamento de livro caixa para o cenário específico de empresas de São Paulo na condição acima, e retorna uma mensagem de sucesso caso o agendamento tenha sido realizado.</span>
      </div>
    `,
}

export default html