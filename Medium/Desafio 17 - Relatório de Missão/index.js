function relatorioMissao(frase, palavra, array) {
  const listaChar = frase.split("");
  let novaFrase = frase;
  let accum = 0;

  if (array.length == 0) {
    return frase;
  }

  for (let num of array) {
    if (num > frase.length) break;

    num += accum;
    console.log(listaChar[num]);
    if (listaChar[num] === " ") {
      listaChar.splice(num, 0, ...palavra.split(""));
      accum += palavra.length;
    }
  }
  return listaChar.join("");
}

console.log(
  relatorioMissao(
    "Nós decidimos apesar das chances serem baixas que enviaríamos um sinal para [...]",
    ",",
    [13, 45]
  )
);
