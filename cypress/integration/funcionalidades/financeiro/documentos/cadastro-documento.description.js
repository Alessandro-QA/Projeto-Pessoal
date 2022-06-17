const testDescription = {
  testes1: `
  ---
  ### Funcionalidade: Cadastro de Documento 
  >**COMO** gestor da Fazenda
   **QUERO** registrar cupons fiscais, notas de despesas outros documentos.
   **PARA** melhor gerenciar os gastos e controle de documentos da empresa.
  
  ### Cenário 1: Cadastrar Documento dedutível 
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar que o documento é dedutível
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos

  ### Cenário 2: Cadastrar Documento com tag
  >**DADO**  que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar uma tag
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos
  
  ### Cenário 3: Cadastrar Documento com observação
  >**DADO** que eu queira incluir um novo documento
  **QUANDO** eu preencher todos os campos obrigatórios
   **E** preencher o campo de Observação
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos
   
  ### Cenário 4: Cadastrar Documento já pago
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar que o documento já foi pago
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos

   ---
  `,
  testes2: `
  ---
  ### Funcionalidade: Cadastro de Documento
  >**COMO** gestor da Fazenda
   **QUERO** registrar cupons fiscais, notas de despesas outros documentos.
   **PARA** melhor gerenciar os gastos e controle de documentos da empresa.

  ### Cenário 1: Cadastrar Documento já pago e com rateio entre ciclos
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar que o documento já foi pago
   **E** selecionar o Rateio entre os ciclos
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos
  
  ### Cenário 2: Cadastrar Documento com rateio entre ciclos, com duas ou mais categoria
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar o rateio entre duas ou mais categorias
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos 
  
  ### Cenário 3: Cadastrar Documento não dedutível
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** que eu queira incluir um novo documento
   **E** selecionar que o documento não é dedutível
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos 

   ---
  `,

  testes3: `
  ---
  ### Funcionalidade: Cadastro de Documento
  >**COMO** gestor da Fazenda
   **QUERO** registrar cupons fiscais, notas de despesas outros documentos.
   **PARA** melhor gerenciar os gastos e controle de documentos da empresa.

  ### Cenário 1: Cadastrar Documento parcelado, com rateio entre ciclos
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar Parcelado
   **E** selecionar Rateio entre os ciclos
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos 

   ---
  `,

  testes4: `
  ---
  ### Funcionalidade: Cadastro de Documento
  >**COMO** gestor da Fazenda
   **QUERO** registrar cupons fiscais, notas de despesas outros documentos.
   **PARA** melhor gerenciar os gastos e controle de documentos da empresa.

  ### Cenário 1: Cadastrar Documento com rateio de categoria
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar uma ou mais categorias
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos 

   ---
  `,

  testes5: `
  ---
  ### Funcionalidade: Cadastro de Documento
  >**COMO** gestor da Fazenda
   **QUERO** registrar cupons fiscais, notas de despesas outros documentos.
   **PARA** melhor gerenciar os gastos e controle de documentos da empresa.

  ### Cenário 1: Cadastrar Documento com rateio entre ciclos, com duas ou mais categorias
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** selecionar rateio entre os ciclos
   **E** selecionar o rateio entre duas ou mais categorias
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos 

   ---
  `,

  testes6: `
  ---
  ### Funcionalidade: Cadastro de Documento
  >**COMO** gestor da Fazenda
   **QUERO** registrar cupons fiscais, notas de despesas outros documentos.
   **PARA** melhor gerenciar os gastos e controle de documentos da empresa.

  ### Cenário 1: Cadastrar Documento com um anexo
  >**DADO** que eu queira incluir um novo documento
   **QUANDO** eu preencher todos os campos obrigatórios
   **E** anexar um arquivo no documento
   **E** clicar em Adicionar Documento
   **ENTÃO** o registro será gravado, exibido e validado na dashboard de Documentos 

   ---
  `
}

export default testDescription
