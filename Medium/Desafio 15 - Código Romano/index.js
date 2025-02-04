function conversaoAlgarismos(algarismosRomanos) {
  const algarismos = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  if (algarismosRomanos.length === 1) {
    return algarismos[algarismosRomanos[0]];
  }

  let accum = 0;
  for (let i = 0; i < algarismosRomanos.length - 1; i++) {
    const ant = algarismos[algarismosRomanos[i]];
    const prox = algarismos[algarismosRomanos[i + 1]];
    if (i === 0) {
      if (ant < prox) {
        accum += prox - ant;
      } else {
        accum += ant + prox;
      }
    } else {
      if (ant < prox) {
        accum += prox;
      } else {
        accum -= prox;
      }
    }
  }

  return accum;
}
console.log(conversaoAlgarismos("XLIX"));
