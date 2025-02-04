function orderNum(numbers) {
  let novoArrayOrdenado = [];
  numbers.forEach((listNum) => {
    novoArrayOrdenado.push(...listNum);
  });
  return novoArrayOrdenado.sort();
}

console.log(
  orderNum([
    [1, 2, 3],
    [4, 5],
  ])
);
