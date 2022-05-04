// Remove preposição
function removerpreposicao(input) {
var string = input;
  
var preposition = /( a | aos? | e | suas? | seus? | os? | nas? | nos? | ante | após | até | com | contra | de | dos? | das? | desde | em |: |, | - |\\.|\\!| & |\\%| \\$ | \\# | \\@ | entre | para | por | perante | sem | sob | sobre | trás | afora | como | conforme | consoante | durante | exceto | feito | fora | mediante | menos | salvo | segundo | senão | além | será | uso | R |novas? | umas? | tirante | visto | X | VS | é | ser | que | essa | isso | isto | eles? | Nós | Eu | Tu | Vós | elas? | não | são | sim | à | as | um | como | todos | se | the | and | go | to | hoje | quem | dias? | hoje | Mal | Duas | Era | Alta | lado | ou |\d.\d\d?)/gim;
var article = /(^a |^aos? |^os? |^nas? |^nos? |^até |^com |^de |^dos? |^das? |^As |^À |^Um |^Uns |^Se |^Todos |^Como |^É |^Quem |^Que |^Quais |^Umas? |^Ser |^Ou |^Ele? |^Elas? |^Eu |^Tu |^Eles? |^Elas? |^Nós |^Vós )/gim; 


	for (i = 0; i < string.length; i++) {
    if (string.includes(string, preposition)){
        string = string.replace(preposition, ' ');
    }
	}

	for (i = 0; i < string.length; i++) {
    if (string.includes(string, article)){
        string = string.replace(article, '');
    }
	}

if (string.includes(string, "?")){
    string = string.replace("?", '');
}
if (string.includes(string, "+")){
    string = string.replace("+", '');
}
if (string.includes(string, "(")){
    string = string.replace("(", '');
}
if (string.includes(string, ")")){
    string = string.replace(")", '');
}
if (string.includes(string, "%")){
    string = string.replace("%", '');
}

if (string.includes(string, /^ {2,}/gm)){
    string = string.replace(/^ {2,}/gm, '');
}
if (string.includes(string, / {2,}/gm)){
    string = string.replace(/ {2,}/gm, ' ');
}

	return string;
}
