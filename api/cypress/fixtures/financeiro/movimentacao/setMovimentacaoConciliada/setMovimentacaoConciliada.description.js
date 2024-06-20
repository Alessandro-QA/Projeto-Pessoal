const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota PUT de setConciliação tem  o intuito de marcar a movimentação como Conciliada, definindo então sua data de conciliação</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo atualizar a data de conciliação para uma única movimentação e após o envio, conferir se a movimentação está com o campo data de conciliação com os valores informados</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota PUT de setConciliações tem  o intuito de marcar mais de uma movimentação como Conciliada, definindo então suas datas de conciliação</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo atualizar a data de conciliação para várias movimentações e após o envio, conferir se as movimentações estão com o campo data de conciliação com os valores informados</span>
      </div>
    `
}

export default html
