function codIdent(codigo) {
  // refazer
  const codigoAlgarismos = String(codigo).split("");
  if (codigoAlgarismos.length === 12) {
    let somaPar = codigoAlgarismos.reduce((accum, atual, index) => {
      if (index % 2 === 0) return accum + atual;
    });
    let somaImpar = codigoAlgarismos.reduce((accum, atual, index) => {
      if (index % 2 === 1) return accum + atual;
    });
    
    codigoAlgarismos.forEach((alg, index) => {
      if (index % 2 == 0) {
        somaPar += alg;
      } else {
        somaImpar += alg;
      }
    });
    digitoVerificador =
      (somaPar * 3 + somaImpar) % 10 === 0
        ? 0
        : 10 - ((somaPar * 3 + somaImpar) % 10);

    return codigo[codigo.length - 1] == digitoVerificador;
  }
}

console.log(codIdent(547020743789));
