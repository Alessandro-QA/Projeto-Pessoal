const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - Pedidos" cria um novo pedido no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'POST' para criar um novo pedido, utilizando um payload com um número de pedido gerado aleatoriamente.
        Verifica se a API retorna um status '200' e armazena o ID do pedido criado, o ID do pagamento do pedido e o ID das parcelas de pagamento do pedido.
        Além disso, valida os dados do pedido criado.
      </span>
    </div>
  `,

  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "PUT - Pedidos" edita um pedido existente no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'PUT' para editar um pedido existente, utilizando um payload com os IDs de pagamento e parcelas de pagamento.
        Adiciona um número de pedido gerado aleatoriamente e verifica se a API retorna um status '200'.
        Além disso, valida os dados do pedido editado.
      </span>
    </div>
  `,

  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - Pedidos/{id}" obtém os detalhes de um pedido específico.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT3:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'GET' para obter os detalhes de um pedido específico utilizando o ID armazenado anteriormente.
        Verifica se a API retorna um status '200' e se o corpo da resposta não está vazio.
      </span>
    </div>
  `,

  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "PATCH - Pedidos/{id}" atualiza parcialmente um pedido específico.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT4:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'PATCH' para atualizar parcialmente um pedido específico utilizando um payload.
        Verifica se a API retorna um status '200'.
      </span>
    </div>
  `,

  Ct5: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "PUT - Pedidos/ChangeStatusPedido" altera o status de um pedido no sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT5:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'PUT' para alterar o status de um pedido existente utilizando o ID do pedido e um payload com o novo status.
        Verifica se a API retorna um status '200' e se o corpo da resposta contém as propriedades 'success' com valor 'true' e 'data' com valor 'true'.
      </span>
    </div>
  `,

  Ct6: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "DELETE - Pedidos" exclui um pedido do sistema.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT6:</span>
      <span style="color: black;">
        Este teste realiza uma requisição 'DELETE' para excluir um pedido utilizando o ID armazenado anteriormente.
        Verifica se a API retorna um status '200' e se o corpo da resposta contém as propriedades 'success' e 'data' com valor 'true'.
      </span>
    </div>
  `,
};

export default html;
