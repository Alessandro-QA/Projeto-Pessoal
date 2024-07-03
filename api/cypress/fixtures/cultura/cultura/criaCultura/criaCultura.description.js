const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /Cultura" cria uma nova Cultura com seus dados obrigatórios.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', criando uma nova Cultura com descrição, nome científico, material vinculado, ícone e afins.</span>
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
      <span style="color: black;">A rota "GET - /Culturas" traz uma lista de todos as culturas existentes cadastradas, sem nenhum filtro.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Neste teste, a requisição get obtém todas as culturas existentes e verifica se o tipo dos dados confere.</span>
    </div>
  `,
  Ct4: `
   <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - /Culturas/{id}" busca por uma cultura específica a partir de seu Id.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Neste teste, a requisição get obtém a cultura correspondente ao id especificado e verifica se o tipo dos dados confere.</span>
    </div>
  `,
  Ct5: `
  <div>
     <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
     <span style="color: black;">A rota "DELETE - /Culturas/{id}" apaga uma cultura específica a partir de seu Id.</span>
   </div>
   <br/>
   <div>
     <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
     <span style="color: black;">Neste teste, a requisição delete exclui a cultura correspondente ao id especificado, isso para que na próxima execução não hajam problemas com Culturas já criadas com os mesmos dados.</span>
   </div>
 `,
}

export default html