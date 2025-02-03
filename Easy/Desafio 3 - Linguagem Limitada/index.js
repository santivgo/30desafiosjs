function inverte(array) {
  aux = [];
  indexAux = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    aux[indexAux++] = array[i];
  }
  return aux;
}

console.log(inverte([false, true, true, true]));
