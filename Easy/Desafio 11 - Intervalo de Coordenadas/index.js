function intervaloCoordenadas(parOrdenado) {
  const listaCoordenadas = [];
  for (let j = 0; j <= parOrdenado[0]; j++) {
    for (let i = 0; i <= parOrdenado[1]; i++) {
      listaCoordenadas.push([j, i]);
    }
  }
  return listaCoordenadas;
}

console.log(intervaloCoordenadas([7, 6]));
