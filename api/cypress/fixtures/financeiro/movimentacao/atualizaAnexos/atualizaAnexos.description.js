const html = {
  Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota PUT de atualização de Anexos faz somente a anexação dos Documentos informados sem alterar qualquer outro campo do documento</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo anexar um arquivo de imagem como exemplo e validar então se foi gerado um link de acesso pro arquivo e se a Movimentação Bancária possui aquele arquivo anexado após o envio</span>
        </div>
      `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota PUT de atualização de Anexos faz somente a anexação dos Documentos informados sem alterar qualquer outro campo do documento</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste tem como objetivo remover o documento anexado anteriormente e validar a Movimentação Bancária se após o envio não possui mais nenhum anexo</span>
      </div>
    `
}

export default html
