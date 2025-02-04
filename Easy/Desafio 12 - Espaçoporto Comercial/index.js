function troco(valor) {
  const objTroco = {};
  let v = valor;

  for (nota of [1, 5, 10, 25, 100, 500].reverse()) {
    objTroco[nota] = Math.floor(v / nota);
    v -= nota * objTroco[nota];
  }
  console.log(objTroco);
}

troco(5412);
