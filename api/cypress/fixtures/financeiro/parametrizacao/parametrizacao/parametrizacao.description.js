const html = {
      Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota POST de Parametrização permite o registro de uma nova parametrização de importação de Documentos</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo criar uma nova Parametrização de Documentos e então validar se o response foi criado conforme o payload</span>
        </div>
      `,
      Ct2: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota GET de Parametrização permite recuperar uma parametrização de importação de Documentos existentes</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo recuperar a Parametrização cadastrada no CT1 e então validar os campos se retornados corretamente conforme o cadastro e no formato correto.</span>
        </div>
      `,
      Ct3: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota PUT de Parametrização permite atualizar os dados de uma parametrização criada</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo editar a Parametrização criada anteriormente, validado a troca de dados permitidos como Fornecdor, Descrição, se Dedutível e Desativar/Ativar o mesmo</span>
        </div>
      `,
      Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota DELETE de Parametrização apaga uma parametrização pelo seu ID</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo além de validar a rota de DELETE, apagar a parametrização criada anteriormente, permitindo criação de uma nova com os mesmo dados preenchidos para novos testes</span>
      </div>
    `
}

export default html
