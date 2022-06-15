// converte a primeira letra em minúscula

function primeiraminuscula(string) {
  if (string.match(/^(?!CEO|PhD|MBA)^(\w)/gim)){
  return string.replace(/^\w/gim, function (match) {
    return match.toLowerCase();
  });
  };
  return string;
};
