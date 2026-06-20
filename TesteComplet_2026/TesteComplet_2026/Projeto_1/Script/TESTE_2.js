function somarPlanilha() {
  var planilha;
  Aplicacao.abrirCalculadora();
  paginas.comZerar();
  planilha = validacao.abrirPlanilha(
    'C:\\Users\\student\\Documents\\TestComplete 15 Projects\\TesteComplet_2026\\DDT\\CT004_PLANILHA.xlsx',
    'SOMA');
//  paginas.comDigitar(planilha.Value('VALOR_1'));
//  paginas.comSoma();
//  paginas.comDigitar(planilha.Value('VALOR_2'));
//  paginas.comIgual();
  Aplicacao.fecharCalculadora();
}
