const testDescription = {
  pedido: `
---
  ### Funcionalidade: Novo Pedidos
  >**COMO** gerente/responsável pelas compras da fazenda
  **QUERO** registrar um pedido de compra
  **PARA** melhor gestão de suprimentos da fazenda
    
  ### Cenário 1 : Mesmo local de entrega
  >**DADO** que eu queira incluir um novo Pedido
  **QUANDO** eu entrar na Dashboard de Pedidos
  **E** clicar em "Novo Pedido"
  **E** clicar no campo "Mesmo local de entrega"
  **E** preencher todos os campos obrigatórios
  **E** clicar em "Adicionar Pedido"
  **ENTÃO** deverá ser salvo e validado na Dashboard de Pedidos

  ### Cenário 2 : Um material
  >**DADO** que eu queira incluir um novo Pedido
  **QUANDO** eu entrar na Dashboard de Pedidos
  **E** clicar em "Novo Pedido"
  **E** escolher apenas um material
  **E** preencher todos os campos obrigatórios
  **E** clicar em "Adicionar Pedido"
  **ENTÃO** deverá ser salvo e validado na Dashboard de Pedidos

  ### Cenário 3 : Com rateio entre ciclos
  >**DADO** que eu queira incluir um novo Pedido
  **QUANDO** eu entrar na Dashboard de Pedidos
  **E** clicar em "Novo Pedido"
  **E** clicar em "Rateio entre os ciclos"
  **E** preencher todos os campos obrigatórios
  **E** clicar em "Adicionar Pedido"
  **ENTÃO** deverá ser salvo e validado na Dashboard de Pedidos

---
`,
  detalhesPedido: `
---
  ### Funcionalidade: Detalhes do Pedido
  >**COMO** gerente/responsável pelas compras da fazenda
  **QUERO** visualizar os detalhes dos pedidos de compra da minha fazenda
  **PARA** melhor controle de suprimentos da fazenda
    
  ### Cenário : Visualizar detalhes
  >**DADO** que eu queira visualizar os detalhes de um Pedido
  **QUANDO** eu entrar na Dashboard de Pedidos
  **E** clicar em um dos pedidos listados
  **ENTÃO** devera ser apresentado e validado todos os detalhes do pedido

---
`,
  excluirPedido: `
---
  ### Funcionalidade: Excluir pedido
  >**COMO** gerente/responsável pelas compras da fazenda
  **QUERO** excluir os pedidos de compra da minha fazenda com status de Aguardando Entrega
  **PARA** melhor gestão de suprimentos da fazenda
    
  ### Cenário : Excluir
  >**DADO** que eu queira excluir um Pedido
  **QUANDO** eu entrar na Dashboard de Pedidos
  **E** clicar em um dos pedidos listados
  **E** clicar no ícone de excluir
  **E** confirmar exclusão
  **ENTÃO** deverá ser excluído e validado na Dashboard de Pedidos

---
`,
  recebimento: `
---
  ### Funcionalidade: Lançar nota de forma manual
  >**COMO** gerente/responsável do almoxarifado da fazenda
  **QUERO** poder realizar recebimento de material com NF de forma manual sem pedido e com Pedido
  **PARA** melhor gestão dos materiais
    
  ### Cenário 1 : Adicionar material sem pedido
  >**DADO** que eu queira lançar um recebimento
  **QUANDO** entrar na Dashboard de Recebimento
  **E** clicar em "Buscar"
  **E** clicar no campo "Adicionar material sem pedido"
  **E** preencher os campos obrigatórios
  **E** clicar em "Finalizar Recebimento"
  **ENTÃO** deverá ser validado na Dashboard de Documentos

  ### Cenário 2 : Rateio entre ciclos
  >**DADO** que eu queira lançar um recebimento
  **QUANDO** entrar na Dashboard de Recebimento
  **E** clicar em "Buscar"
  **E** selecionar o campo "Rateio entre os ciclos"
  **E** preencher os campos obrigatórios
  **E** clicar em "Finalizar Recebimento"
  **ENTÃO** deverá ser validado na Dashboard de Documentos

---
`
}

export default testDescription
