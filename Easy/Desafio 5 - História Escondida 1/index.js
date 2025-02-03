// Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.
function mLetra(palavra) {
  const palavraMinusculo = palavra.toLowerCase().split("").sort();
  return palavraMinusculo[palavraMinusculo.length - 1];
}
console.log(mLetra("May the force be with you"));
