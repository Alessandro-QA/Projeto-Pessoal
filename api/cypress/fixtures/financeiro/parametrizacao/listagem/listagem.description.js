const html = {
      Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota LISTAGEM de Parametrização traz listados as Parametrizações de Documentos cadastradas de acordo com o filtro fornecido no Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo, listar todas as Parametrizações, sendo assim deve conter tanto Ativas quanto Inativas</span>
        </div>
      `,
      Ct2: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota LISTAGEM de Parametrização traz listados as Parametrizações de Documentos cadastradas de acordo com o filtro fornecido no Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo, listar somente as Parametrizações ATIVAS, sendo assim é verificado se o response contém somente Parametrizações ATIVAS</span>
        </div>
      `,
      Ct3: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota LISTAGEM de Parametrização traz listados as Parametrizações de Documentos cadastradas de acordo com o filtro fornecido no Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo listar as Parametrizações filtradas pelo Fornecedor em questão, é validado então o response para saber se  há cadastros daquele fornecedor além de validar o filtro realizado.</span>
        </div>
      `,
      Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota LISTAGEM de Parametrização traz listados as Parametrizações de Documentos cadastradas de acordo com o filtro fornecido no Body</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo listar as Parametrizações filtradas pela Operação em questão, é validado então o response para saber se  há cadastros daquela Operação além de validar o filtro realizado.</span>
      </div>
    `
}

export default html
