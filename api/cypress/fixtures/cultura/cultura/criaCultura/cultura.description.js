const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /Cultura" cria uma nova Cultura.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', criando uma nova Cultura.</span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "PUT - /Cultura" edita uma cultura já existente.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'put' e altera dados de descrição e nome científico de uma cultura, e atualiza o registro.</span>
      </div>
    `,
    Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - /Cultura" traz uma lista de todos as Culturas existentes.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Neste teste, a requisição get obtém todos os Culturas existentes e verifica se o tipo dos dados confere.</span>
      </div>
    `,
    Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "DELETE - /Cultura/{id}" apaga uma Cultura com ID específico.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Neste teste, a requisição delete apaga a Cultura com o ID passado, que corresponde a primeira Cultura criada, isso para que na próxima execução, não hajam problemas com Cultura já criadas com os mesmos dados.</span>
      </div>
    `,
}

export default html