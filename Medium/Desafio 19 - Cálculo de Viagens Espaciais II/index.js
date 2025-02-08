// A equipe de desenvolvimento do sistema de navegação das naves da Federação precisa novamente da sua ajuda para implementar uma funcionalidade. Ela consiste em calcular a persistência multiplicativa de um determinado número. A persistência multiplicativa é a quantidade de vezes que se precisa substituir um número pelo produto de seus algarismos até chegar a um número de um único digito. Por exemplo: 539 = 3, pois 5 x 3 x 9 = 135, 1 x 3 x 5 = 15 e 1 x 5 = 5, ou seja, 3 multiplicações.

function persistenciaMult(num) {
  if (num > 0 && num <= 9) {
    return 0;
  }

  const string = num.toString().split("");

  const mult = string.reduce((accum, atual) => accum * atual, 1); // o acumulador começa d 1

  return 1 + persistenciaMult(mult);
}

console.log(persistenciaMult(7169));
