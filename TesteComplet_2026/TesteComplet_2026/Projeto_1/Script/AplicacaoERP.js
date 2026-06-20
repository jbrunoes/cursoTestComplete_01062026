function abrirERP() {
  TestedApps.Power_ERP_Gestao.Run(1, true);
  Sys.Process('Power_ERP_Gestao').VCLObject('frmsplash').VCLObject('Image16').Click();
  Sys.Process('Power_ERP_Gestao').VCLObject('frmLoginWindow').VCLObject('EditUsuario').Keys('admin[Tab]');
  Sys.Process('Power_ERP_Gestao').VCLObject('frmLoginWindow').VCLObject('EditSenha').Keys('ti2010[Tab]');
  Sys.Process('Power_ERP_Gestao').VCLObject('frmLoginWindow').VCLObject('btOK').Click();
}
