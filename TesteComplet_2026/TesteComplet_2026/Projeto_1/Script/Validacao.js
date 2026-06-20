//validacao de resultados
function idValor() {
  var resultado = Sys.Process('Calculadora').VCLObject('FrmCalc').VCLObject('edt').Text;
  return resultado;
}

function validarValor(valor) {
  var validar = idValor();
  if (validar == valor) {
    Log.Checkpoint('Valor Correto!');
  } else {
    Log.Error('Valor diferente do esperado!');
  }
}

function abrirPlanilha(caminho, worksheet) {
  return DDT.ExcelDriver(caminho, worksheet);
}

function fecharPlanilha(caminho, worksheet) {
  return DDT.CloseDriver(caminho, worksheet);
}

function obterResultado() {
  var resultado = Sys.Process('Calculadora').VCLObject('FrmCalc').VCLObject('edt').Text;
  return resultado;
}
