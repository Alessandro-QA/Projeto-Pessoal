-- Deletar registro dos testes de cadastro de atores
DELETE FROM [cicloproducao].[Ciclos] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff';
DELETE FROM [financeiro].[ContaBancariaEmpresas] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and ContaBancariaId != '6a291558-4989-4ea9-b307-db1e1348774e';
DELETE FROM [financeiro].[Movimentacoes] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and ContaBancariaId != '6a291558-4989-4ea9-b307-db1e1348774e';
DELETE FROM [financeiro].[ContaBancarias] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and Id != '6a291558-4989-4ea9-b307-db1e1348774e';
DELETE FROM [pessoa].[EnderecosDocumentos] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and DocumentoId != 'ac4159da-6c69-45e0-a681-ba25e2c9c964';
DELETE FROM [pessoa].[DocumentoFiscais] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and DocumentoId != 'ac4159da-6c69-45e0-a681-ba25e2c9c964';
DELETE FROM [pessoa].[Documentos] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and PessoaId != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [pessoa].[Emails] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and PessoaId != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [pessoa].[Telefones] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and PessoaId != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [pessoa].[EnderecosPessoas] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and PessoaId != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [pessoa].[Empresas] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and Id != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [pessoa].[ClassificacoesPessoa] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and PessoaId != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [pessoa].[Usuarios] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and Id != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [pessoa].[Pessoas] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and Id != '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1';
DELETE FROM [fazenda].[FazendaMatriculas] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and FazendaId != 'e5e92a1c-9cae-451e-b034-8d13df8aa9bc';
DELETE FROM [fazenda].[UnidadeArmazenamentoTiposMateriais] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and CreatedByUserName != 'Conta Principal QA';
DELETE FROM [fazenda].[UnidadesArmazenamentos] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and FazendaId != 'e5e92a1c-9cae-451e-b034-8d13df8aa9bc';
DELETE FROM [fazenda].[Fazendas] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff' and Id != 'e5e92a1c-9cae-451e-b034-8d13df8aa9bc';
DELETE FROM [safra].[Safras] WHERE TenantId = '6aa7041e-c817-4356-bde6-0c5b80f3dfff'; 

-- Deletar registros dos testes de cadastro de documento
DELETE FROM [financeiro].[LivroCaixas] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[LivroCaixaHistoricos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[MovimentacaoTitulos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[MovimentacaoCategorias] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[Movimentacoes] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[TituloBaixa] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[TituloCategorias] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[TituloHistoricoRecebimentos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[Titulos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[DocumentoFinanceiroParcelas] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[DocumentoFinanceiro] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[DocumentoCategorias] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[DocumentoCiclos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[DocumentoMaterialPedidos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[DocumentoMateriais] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[Documentos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[RegimeCaixas] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[LancamentoContabilCiclos] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[LancamentoContabilCategorias] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [financeiro].[LancamentoContabeis] WHERE TenantId = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';

-- Deletar registros dos testes de cadastro e recebimento de pedido
DELETE FROM  [pedidocompra].[PedidoCategorias] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[PedidoCiclos] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[PedidoMateriais] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[PedidoPagamentoParcelas] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[PedidoPagamentos] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[Pedidos] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoAnexos] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoCategorias] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoCiclos] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoParcelas] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoFinanceiro] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoMaterialPedidos] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoMateriais] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[RecebimentoMaterialAplicacaoImediatas] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM  [pedidocompra].[Recebimentos] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';

-- Deletar registros de colheita
DELETE FROM [producaoagricola].[VariedadesColheita] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [producaoagricola].[Colheitas] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [producaoagricola].[Pesagens] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';
DELETE FROM [producaoagricola].[Movimentacoes] WHERE tenantid = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96';