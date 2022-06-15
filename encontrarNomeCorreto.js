// Verifica no texto se tem o nome registrado no MEC do curso 
function nomeregistrado(newStringWithPos) {
  var string = newStringWithPos;
  
  var courseName = /(Jornalismo, Comunicação e a nova ordem informacional|Processos Criativos e Gestão da Indústria Cinematográfica|Arte Contemporânea e o Audiovisual|Gestão e Design de Excelência|Cultura do Entretenimento: Animação e Jogos Digitais|Fashion Business)/i;

    if (string.match(courseName)){
      string = "Correto nome do curso";
    } else {
      string = "NÃO encontrou o nome registrado do curso";
    }
     
 
	return string;
}
