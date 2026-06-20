function somarPlanilha() {
  var planilha, resultadoCalculadora;

  planilha = DDT.ExcelDriver(
    'C:\\Users\\student\\Documents\\TestComplete 15 Projects\\TesteComplet_2026\\DDT\\CT004_PLANILHA.xlsx',
    'SOMA'
  );

  while (!DDT.CurrentDriver.EOF) {
    Aplicacao.abrirCalculadora();
    paginas.comZerar();
    paginas.comDigitar(planilha.Value['VALOR_1']);
    paginas.comSoma();
    paginas.comDigitar(planilha.Value['VALOR_2']);
    paginas.comIgual();

    // Captura o resultado exibido na calculadora
    resultadoCalculadora = validacao.obterResultado();

    // Validação
    if (resultadoCalculadora == String(planilha.Value['RESULTADO']))
      Log.Checkpoint(
        'Resultado correto. Esperado: ' +
        String(planilha.Value['RESULTADO']) +
        ' Obtido: ' +
        resultadoCalculadora
      );
    else
      Log.Error(
        'Resultado incorreto. Esperado: ' +
        String(planilha.Value['RESULTADO']) +
        ' Obtido: ' +
        resultadoCalculadora
      );

    DDT.CurrentDriver.Next();
  }

  DDT.CloseDriver(planilha.Name);
}
