function ConectarFirebird() {
  var Conexao;
  try {
    Conexao = Sys.OleObject('ADODB.Connection');
    Conexao.ConnectionString =
      'Provider=MSDASQL.1;' +
      'DSN=ConectarFirebird' +        // nome exato do DSN
      'UID=SYSDBA;' +
      'PWD=c@rt1lh@;';                 // sua senha real
    Conexao.ConnectionTimeout = 30;
    Conexao.Open();

    if (Conexao.State == 1)
      Log.Message('Conectado com sucesso ao Firebird!');
    else
      Log.Error('Falha ao conectar!');

    Conexao.Close();
  } catch(e) {
    Log.Error('Erro: ' + e.message);
  }
}
