function validarTelaClient() {
  var resultado = Sys.Process('Power_ERP_Gestao').VCLObject('frmPrincipal')
    .Window('MDIClient', '', 1).VCLObject('frmcliente_menu').Visible;
  return resultado;
}

function validarTelaAbertaCliente() {
  var validarTela = validarTelaClient();
  if (validarTela) {
    Log.Checkpoint('Tela de Cadastro de Cliente foi aberta com sucesso!');
  } else {
    Log.Error('Tela não foi aberta!');
  }
}
