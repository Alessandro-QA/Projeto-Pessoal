const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota POST de ParseFileUrl permite o envio de um link de arquivo XML para carregamento dos dados de forma automática.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'POST' para enviar um um arquivo XML pré definido como Params.
        Assim que carregado o arquivo, é validado se os dados que vieram de forma automática pela rota coincidem com os dados contidos no XML.
      </span>
    </div>
  `,
}

export default html;
