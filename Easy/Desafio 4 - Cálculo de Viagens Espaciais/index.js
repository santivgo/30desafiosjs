// Escreva uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro.

const calculoViagensEspaciais = (num) => {
  let somaStr = "";
  for (char of num.toString()) {
    // para iterar nos itens da string usa o for of
    let numero = Number(char);
    somaStr += numero ** 2;
  }

  return Number(somaStr);
};

console.log(calculoViagensEspaciais(3514));
