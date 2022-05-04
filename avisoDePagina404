function urlstatus(url){
     var validate = {
         'muteHttpExceptions': true, // true especifica qual o código de erro ao invés de o método getResponseCode() dar #Error quando há uma página 404 ou 503
         'followRedirects': false, // false impede redirecionamento e mostra com um erro se URL tem redirecionamento
     }
   
     var urlNoSpaces = url.trim(); // retira espaços antes e depois da url
     var status = UrlFetchApp.fetch(urlNoSpaces, validate); // fetch acessa site
     function messageUrl(status){
       if(status.getResponseCode() == ('200')){ // online
       return 'Online';
       } else if (status.getResponseCode() == ('301')){ // redirecionamento de página
         return 'Erro: Offline';
       }  else {
         return 'Erro: Offline';
       }
     }
     return messageUrl(status)  // getReponseCode mostra o código se está online (200, 301) ou tem  erro (204, 4xx, 5xx)
 }

 var EMAIL_SENT = 'Enviado e-mail';

function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // Linha de início
  var numRows = 50; // Número de linhas para processar
  // Buscar o intervalo de células de todo o documento até a linha 50
  var dataRange = sheet.getRange(startRow, 1, numRows, 50);
  // Buscar valores para cada linha no intervalo.
  var data = dataRange.getValues();
  var newLine = "<br>";

  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var course = row[4];
    var codeCourse = row[0];
    var emailAddress = row[22];
    var urlError = row[21];
    var message = 'Prezado,' + newLine + newLine + 'Importante: verifique se está fora do ar alguma URL do curso de '+ codeCourse + ' - ' + course +'. ' + 'Veja a URL na planilha: ' + '<a href="https://docs.google.com/spreadsheets/d/1eutWI6I420YmnZhz1B0TXDSTzeSyxyWXelOK19ZB4_A/edit?usp=sharing" target="_blank">' + 'https://docs.google.com/spreadsheets/d/1eutWI6I420YmnZhz1B0TXDSTzeSyxyWXelOK19ZB4_A/edit?usp=sharing' + '</a>' + newLine + newLine + '<font size="2"><b>' + 'Igor Borba' + '</b></font>' + newLine + '<font size="2">' + 'Empresa X – Avenida X, 10' + newLine + 'Prédio 1 – 1º andar | 90320-500 | Porto Alegre' + '</font>' + newLine;
    

    if (urlError == ""){ // Se na célula Status do e-mail estiver com nada escrito, ele pula para a próxima linha para não enviar o e-mail
      continue;
    }
    
    else if (urlError !== ( EMAIL_SENT )) { // Envia somente se não está escrito e-mail enviado e escreve enviado e-mail no final
      var subject = 'Verificar URL fora do ar';
      var options = {
        "htmlBody":message
      }
      MailApp.sendEmail(emailAddress, subject, message, options);
      sheet.getRange(startRow + i, 23).setValue(EMAIL_SENT);
      // Método que aplica na planilha o texto Enviado e-mail 
      SpreadsheetApp.flush();
    }
  }
}
