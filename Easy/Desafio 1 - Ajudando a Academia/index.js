// Escreva uma função que recebe um número qualquer de números inteiro como
// argumentos e retorne a média aritmética entre eles.


'use strict';
// function media(){
//     // arguments // pega todos os argumento parametros que o usuario passar
//     let soma = 0;
//     let cont = 0
//     for (const chave in arguments) {
//         if (typeof(arguments[chave]) === 'number'){
//             soma+= arguments[chave];
//             cont++;
//         } 
//     }

//     if (cont === 0) return 0

//     return parseFloat((soma/cont))
// }

function media (...numbers){
    const soma = numbers.reduce((accum, num)=> { // accum é uma variavel criada, e num é a variável que usamos para passar por cada item da lista
        return accum + num
    });

    return soma/numbers.length;

}
console.log(media(25,75))