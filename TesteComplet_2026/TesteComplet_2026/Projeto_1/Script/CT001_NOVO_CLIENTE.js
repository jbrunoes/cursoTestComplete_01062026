//Cadastrar um novo cliente

function cadCliExcel() {
  var planilha, validartela;

  planilha = DDT.ExcelDriver(
    'C:\\Users\\student\\Documents\\TestComplete 15 Projects\\TesteComplet_2026\\DDT\\CT001_CADASTRO_CLIENTE.xlsx',
    'novoCLiente');
  cadClientes.novoCliente();

  //validar abertura da tela
  validartela = validacaoERP.validarTelaAbertaCliente();

  //campos de cadastro
  cadClientes.camposCliente(planilha);
}
