// Faz exclusão dos daddos das respectivas tabelas, utilizando
// o ID do Tenant junto com outros ids.

let tenantCenarios = 'df7a1cc8-f259-404f-aadc-0f1b2a7f5d96'
let tenantCadastro = '6aa7041e-c817-4356-bde6-0c5b80f3dfff'
let contaBancariaId = '6a291558-4989-4ea9-b307-db1e1348774e'
let documentoId = 'ac4159da-6c69-45e0-a681-ba25e2c9c964'
let pessoaId = '7eb40fe3-e81d-4df1-89d3-57ea2169f2c1'
let fazendaId = 'e5e92a1c-9cae-451e-b034-8d13df8aa9bc'

let queries = `
			-- Exclusao Logica dos registros dos testes de cadastro de atores
			    UPDATE [cicloproducao].[Ciclos] SET Visible = 0 WHERE Descricao = 'Safra Milho - 2021/2021' AND SafraDescricao = '2021/2021' AND TenantId = '${tenantCadastro}';
				UPDATE [financeiro].[ContaBancariaEmpresas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				UPDATE [financeiro].[Movimentacoes] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				UPDATE [financeiro].[ContaBancarias] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${contaBancariaId}';
				UPDATE [pessoa].[EnderecosDocumentos] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				UPDATE [pessoa].[DocumentoFiscais] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				UPDATE [pessoa].[Documentos] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Emails] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Telefones] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[EnderecosPessoas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Empresas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				UPDATE [pessoa].[ClassificacoesPessoa] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Usuarios] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				UPDATE [pessoa].[Pessoas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				UPDATE [fazenda].[FazendaMatriculas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				UPDATE [fazenda].[UnidadeArmazenamentoTiposMateriais] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and CreatedByUserName != 'Conta Principal QA';
				UPDATE [fazenda].[UnidadesArmazenamentos] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				UPDATE [fazenda].[Fazendas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${fazendaId}';
				UPDATE [safra].[Safras] SET Visible = 0 WHERE TenantId = '${tenantCadastro}'; 

			-- Exclusao Logica dos registros dos testes de cadastro de documento
			    UPDATE [financeiro].[LivroCaixaAnexos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LivroCaixas] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LivroCaixaHistoricos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[MovimentacaoTitulos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[MovimentacaoCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Movimentacoes] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[TituloBaixa] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[TituloCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[TituloHistoricoRecebimentos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Titulos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoFinanceiroParcelas] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoFinanceiro] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoCiclos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoMaterialPedidos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoAnexos]	SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoMateriais] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Documentos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Competencias] SET Visible = 0 WHERE TenantID IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[RegimeCaixas] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LancamentoContabilCiclos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LancamentoContabilCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LancamentoContabeis] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');

			--Exclusao Logica dos registros dos testes de cadastro e recebimento de pedido
				UPDATE  [pedidocompra].[PedidoCategorias] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoCiclos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoMateriais] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoPagamentoParcelas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoPagamentos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[Pedidos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoAnexos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoCategorias] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoCiclos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoParcelas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoFinanceiro] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMaterialPedidos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMaterialArmazenamento] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMateriais] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMaterialAplicacaoImediatas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[Recebimentos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';

			-- Exclusao Logica dos registros de producao agricola
				UPDATE [producaoagricola].[Expedicoes] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[VariedadesColheita] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Colheitas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Pesagens] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].PartilhasMovimentacao SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Movimentacoes] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Contratos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[ContratoAnexos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';

			-- Exclusao Logica dos registros de extrato de materiais
				UPDATE [estoque].[movimentacaoEstoqueMateriais] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [estoque].[movimentacoesEstoque] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [fazenda].[FazendaMatriculaPessoaExploracoes] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [fazenda].[FazendaMatriculas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
			`

export default queries
