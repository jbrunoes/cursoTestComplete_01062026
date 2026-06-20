//08/06/2026
//jefferson.bruno
//Este cenario de teste vai representar as telas do meu programa inicial

//soma
function comSoma() {
  Aliases.Calculadora.FrmCalc.BtnMais.Click();
}

//subtracao
function comSubtracao() {
  Aliases.Calculadora.FrmCalc.VCLObject('BtnMenos').Click();
}

//multiplicacao
function comMultiplicacao() {
  Aliases.Calculadora.FrmCalc.VCLObject('BtnX').Click();
}

//Divisao
function comDivisao() {
  Aliases.Calculadora.FrmCalc.VCLObject('BtnD').Click();
}

//valor
function comValor(valor) {
  Aliases.Calculadora.FrmCalc.VCLObject('edt').Keys(valor);
}

//clicarigual
function comIgual() {
  Aliases.Calculadora.FrmCalc.BtnIgual.Click();
}

//zerarResultado
function comZerar() {
  Aliases.Calculadora.FrmCalc.BtnC.Click();
}

//digitarvalor
function comDigitar(valor) {
  Sys.Process('Calculadora').VCLObject('FrmCalc').VCLObject('edt').Keys(valor);
}
