// Faz exclusão dos daddos das respectivas tabelas, utilizando
// o ID do Tenant junto com outros ids.

let tenantCenarios = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96'
let tenantCadastro = '6aa7041e-c817-4356-bde6-0c5b80f3dfff'
let contaBancariaId = '6a291558-4989-4ea9-b307-db1e1348774e'
let documentoId = 'ac4159da-6c69-45e0-a681-ba25e2c9c964'
let pessoaId = '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1'
let fazendaId = 'e5e92a1c-9cae-451e-b034-8d13df8aa9bc'

let queries = `
			-- Deletar registro dos testes de cadastro de atores
			DELETE FROM [cicloproducao].[Ciclos] WHERE Descricao = 'Safra Milho - 2021/2021' AND SafraDescricao = '2021/2021' AND TenantId = '${tenantCadastro}';
				DELETE FROM [financeiro].[ContaBancariaEmpresas] WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				DELETE FROM [financeiro].[Movimentacoes] WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				DELETE FROM [financeiro].[ContaBancarias] WHERE TenantId = '${tenantCadastro}' and Id != '${contaBancariaId}';
				DELETE FROM [pessoa].[EnderecosDocumentos] WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				DELETE FROM [pessoa].[DocumentoFiscais] WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				DELETE FROM [pessoa].[Documentos] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Emails] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Telefones] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[EnderecosPessoas] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Empresas] WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				DELETE FROM [pessoa].[ClassificacoesPessoa] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Usuarios] WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				DELETE FROM [pessoa].[Pessoas] WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				DELETE FROM [fazenda].[FazendaMatriculas] WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				DELETE FROM [fazenda].[UnidadeArmazenamentoTiposMateriais] WHERE TenantId = '${tenantCadastro}' and CreatedByUserName != 'Conta Principal QA';
				DELETE FROM [fazenda].[UnidadesArmazenamentos] WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				DELETE FROM [fazenda].[Fazendas] WHERE TenantId = '${tenantCadastro}' and Id != '${fazendaId}';
				DELETE FROM [safra].[Safras] WHERE TenantId = '${tenantCadastro}'; 

			-- Deletar registros dos testes de cadastro de documento
				DELETE FROM [financeiro].[LivroCaixas] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LivroCaixaHistoricos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[MovimentacaoTitulos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[MovimentacaoCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[Movimentacoes] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[TituloBaixa] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[TituloCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[TituloHistoricoRecebimentos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[Titulos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoFinanceiroParcelas] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoFinanceiro] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoCiclos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoMaterialPedidos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoAnexos]	WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoMateriais] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[Documentos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[RegimeCaixas] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LancamentoContabilCiclos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LancamentoContabilCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LancamentoContabeis] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');

			--Deletar registros dos testes de cadastro e recebimento de pedido
				DELETE FROM  [pedidocompra].[PedidoCategorias] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoCiclos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoMateriais] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoPagamentoParcelas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoPagamentos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[Pedidos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoAnexos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoCategorias] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoCiclos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoParcelas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoFinanceiro] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMaterialPedidos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMaterialArmazenamento] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMateriais] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMaterialAplicacaoImediatas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[Recebimentos] WHERE tenantid = '${tenantCenarios}';

				-- Deletar registros de producao agricola
				DELETE FROM [producaoagricola].[Expedicoes] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[VariedadesColheita] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Colheitas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Pesagens] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].PartilhasMovimentacao WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Movimentacoes] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Contratos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[ContratoAnexos] WHERE tenantid = '${tenantCenarios}';

				-- Deletar registros de extrato de materiais
				DELETE FROM [estoque].[movimentacaoEstoqueMateriais] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [estoque].[movimentacoesEstoque] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [fazenda].[FazendaMatriculaPessoaExploracoes] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [fazenda].[FazendaMatriculas] WHERE tenantid = '${tenantCenarios}';
			`

export default queries
