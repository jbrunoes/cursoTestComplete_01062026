//Lib para utilizacao do excelDrive

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
