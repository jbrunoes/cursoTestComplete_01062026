//CADASTRAR CLIENTE
function novoCliente() {
  Sys.Process('Power_ERP_Gestao').VCLObject('frmPrincipal').VCLObject('AdvSmoothPanel15').VCLObject('AdvSmoothButton31').Click();
  Sys.Process('Power_ERP_Gestao').VCLObject('frmPrincipal')
    .Window('MDIClient', '', 1).VCLObject('frmcliente_menu').VCLObject('Panel1').VCLObject('bincluir').Click();
  Sys.Process('Power_ERP_Gestao').Window('#32770', 'Atenção', 1).Window('Button', '&Não', 2).Click();
}

//manual
function novoCliNome(NOME) {
  Sys.Process('Power_ERP_Gestao').VCLObject('frmcliente').VCLObject('PageView1')
    .VCLObject('PageSheet1').VCLObject('pficha').VCLObject('edtNome').Keys(NOME);
}

function novoCliApelido(APELIDO) {
  Sys.Process('Power_ERP_Gestao').VCLObject('frmcliente')
    .VCLObject('PageView1').VCLObject('PageSheet1').VCLObject('pficha').VCLObject('DBEdit3').Keys(APELIDO);
}

function cep(CEP) {
  Sys.Process('Power_ERP_Gestao').VCLObject('frmcliente')
    .VCLObject('PageView1').VCLObject('PageSheet1').VCLObject('pficha').VCLObject('DBEdit8').Keys(CEP);
}

function CPF(CPF) {
  Sys.Process('Power_ERP_Gestao').VCLObject('frmcliente')
    .VCLObject('PageView1').VCLObject('PageSheet1').VCLObject('pficha').VCLObject('GroupBox8').VCLObject('DBEdit15').Keys(CPF);
}

function camposCliente(planilha) {
  novoCliNome(planilha.value['NOME']);
  novoCliApelido(planilha.value['APELIDO']);
  cep(planilha.value['CEP']);
  CPF(planilha.value['CPF']);
}
