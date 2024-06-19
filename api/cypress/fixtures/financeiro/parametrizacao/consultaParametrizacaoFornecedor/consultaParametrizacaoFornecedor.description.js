const html = {
      Ct1: `
        <div>
          <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
          <span style="color: black;">A rota de Consulta de Parametrização Fornecedor verificar se já existe aquele fornecedor que foi passado no body e caso não exista ele cria um novo fornecedor</span>
        </div>
        <br/>
        <div>
          <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
          <span style="color: black;">Este teste tem como objetivo passar um fornecedor existente e validar o bloqueio da criação de fornecedores. Não foi feito um cenários onde é validado a criação de fornecedor por essa rota para evitar criação de vários fornecedores diáriamente visto que sua exclusão não é possibilitada, somente inativação. O teste verifica a mensagem de erro e o retorno de erro da rota.</span>
        </div>
      `
}

export default html
