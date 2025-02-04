// Escreva uma função que recebe uma string, verifica se ela possui a mesma quantidade de cada letra que a compõe e retorna true caso possua ou false caso não possua.

function Igual(palavra) {
  objLetras = {};

  palavra
    .toLowerCase()
    .split("")
    .forEach((element) => {
      if (element != " ") {
        objLetras[element] = objLetras[element] ? objLetras[element] +1 : 1 // se tiver elemento, adiciono mais um, caso contrario adiciono 1
      }
    });
    
    const listaValores = Object.values(objLetras)
    
    return listaValores.every(v=> 
        v === listaValores[0]
    ) // verifica cada item pra ver se a quantidade de ocorrencias (o value q a gente fez na funcao passada) é igual ao primeiro
}

console.log(Igual('This is thee'))
