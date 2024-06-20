const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /Agendamento" agenda o recebimento de um título na agenda financeira.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', gerando um agendamento de recebimento de título com forma de pagamento e data na agenda financeira.</span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "PUT - /Agendamento" edita um agendamento de recebimento já existente na agenda financeira.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'put' e altera dados de desconto e valor total do agendamento, e atualiza o registro.</span>
      </div>
    `,
    Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - /Agendamento" traz uma lista de todos os agendamentos de recebimentos existentes na agenda financeira.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Neste teste, a requisição get obtém todos os agendamentos existeste para recebimentos e verifica se o tipo dos dados confere.</span>
      </div>
    `,
    Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "DELETE - /Agendamento/{id}" apaga um agendamento com ID específico.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Neste teste, a requisição delete apaga o agendamento com o ID passado, que corresponde ao primeiro agendamento criado, isso para que na próxima execução, não hajam problemas com agendamento já criado para o título em questão.</span>
      </div>
    `,
}

export default html