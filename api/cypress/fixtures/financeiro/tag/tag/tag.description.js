const html = {
      Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota GET de TAGS traz listado as TAGS cadastradas sem necessidade de passar uma filtragem no Body</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo, listar todas as TAGS, sendo assim deve conter tanto Ativas quanto Inativas. Além disso deve estar presente o seu ID/Código/Descrição/Status</span>
        </div>
      `,
      Ct2: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota POST de TAGS faz o Cadastro de uma Nova TAG. Sendo necessário infromar somente sua descrição e Status (ativo/inativo)</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo cadastrar uma nova TAG e então validar se o cadastro foi realizado com sucesso.</span>
        </div>
      `,
      Ct3: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota PUT de TAGS permite a edição de uma TAG já criada, podendo então alterar sua Descrição ou Status.</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo editar uma TAG. É necessário informar no body os dados da TAG que está sendo editada, e então passar suas alterações. É validado se as alterações foram feitas.</span>
        </div>
      `,
      Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota GET {ID} de TAGS permite recuperar uma única TAG.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo recuperar uma única TAG, e então validar o seu Status e Descrição. A tag recuperada é a mesma utilizada no CT3, podendo então validar as edições se foram feitas com sucesso.</span>
      </div>
    `
}

export default html
