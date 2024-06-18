const html = {
      Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota LIST de TAGS traz listado as TAGS cadastradas de acordo com o filtro fornecido no Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo, listar todas as TAGS, sendo assim deve conter tanto Ativas quanto Inativas</span>
        </div>
      `,
      Ct2: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota LIST de TAGS traz listado as TAGS cadastradas de acordo com o filtro fornecido no Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo, listar somente as TAGS ATIVAS, sendo assim o response deve conter somente TAGS ATIVAS</span>
        </div>
      `,
      Ct3: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota LIST de TAGS traz listado as TAGS cadastradas de acordo com o filtro fornecido no Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo, listar somente as TAGS INATIVAS, sendo assim o response deve conter somente TAGS INATIVAS</span>
        </div>
      `
}

export default html
