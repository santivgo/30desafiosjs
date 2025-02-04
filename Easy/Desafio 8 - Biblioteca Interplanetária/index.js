function referencia(nomeCompleto) {
  const reversedArray = nomeCompleto
    .toUpperCase()
    .split(" ")
    .reverse()
    .map((nome, index) => {
      if (index == 0) {
        // ou seja, for o ultimo nome
        return nome + ",";
      }

      return nome[0] + ".";
    });
  return reversedArray.join(" ");
}

console.log(referencia("Suzane Marie Collins"));
