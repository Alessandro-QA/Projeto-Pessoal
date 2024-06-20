const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - /Agendamento/AgendamentoLote" agenda o recebimento de vários títulos de uma só vez e de forma agrupada na agenda financeira.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste faz uma requisição do tipo 'post', gerando vários agendamentos de recebimento agrupados, um para cada título passado no payload. Em seguida, apaga os agendamentos criados para que na próxima execução não haja problemas com agendamentos já criados para o título em questão.</span>
    </div>
  `,
}

export default html