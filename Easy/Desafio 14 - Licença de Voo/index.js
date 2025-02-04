// Destructuring: Unpacking, mas tem que colocar o nome das mesmas variáveis

// const Tenis = {
//   tamanho: 45,
//   estoque: true,
//   marcas: [{ nome: "Adidas" }, { nome: "Nike" }],
// };

// const { tamanho: t, estoque, marcas, cadarco = false } = Tenis; // cadarço é pré setado, se nao existir pega o valor default

// tamanho: t define o apelido t para tamanho

// Tenis.hasOwnProperty("tamanho") verifica se o objeto tem aquela classe
// "tamanho" in Tenis verifica se o objeto tem aquela classe

// Duas formas de acessar o objeto
// Tenis["tamanho"] como um dicionario
// Tenis.tamanho como um objeto

// delete Tenis.tamanho apaga propriedades do objeto
// para adicionar de novo é só fazer um Tenis.tamanho = valor

// unir itens Object.assign(Tenis, link) ou {...Tenis, ...link}

// Escreva uma classe que contenha um método
// paragerar uma licença de voo e os seguintes atributos:

// Além disso a classe deve possuir um método para criar uma licença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguinte padrão:

class licencaVoo {
  constructor(nome, sobrenome, data_nasc) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.data_nasc = this.converteData(data_nasc);
    this.licenca = false;
  }

  converteData(data_nasc) {
    return new Date(data_nasc);
  }

  geraLicenca() {
    //     - Os primeiros cinco caracteres do sobrenome em letras maiúsculas (completado com 9's caso possua menos de cinco)

    const d5 = this.sobrenome.toUpperCase().split("").splice(0, 5);
    while (d5.length < 5) d5.push("9");

    // - 0 6° caractere é um traço (-)
    d5.push("-");
    // - 07º caractere é o algarismo da década (penúltimo) do ano de nascimento
    const setimoAlgarismo = String(this.data_nasc.getFullYear()).split("");
    d5.push(setimoAlgarismo[2]);
    // 08 e 9° caracteres são o mês de nascimento -
    // console.log(this.data_nasc.getDate()); // para dia  o js considera 0 a 30 (1 a 31)
    // console.log(this.data_nasc.getMonth()); // para mes o js considera de 0 a 11
    // console.log(this.data_nasc.getFullYear());

    const nonoOitavoAlgarismo = String(this.data_nasc.getMonth() + 1).padStart(
      2,
      0
    ); // leading zeros até completar 2 de tamanho

    d5.push(nonoOitavoAlgarismo);

    // - O 10° caractere é o algarismo do ano (último) do ano de nascimento
    d5.push(setimoAlgarismo[setimoAlgarismo.length - 1]);
    // -O 11° caractere é um ponto (.)
    d5.push(".");

    // - O 12° caractere é a primeira letra do primeiro nome (minúscula)
    d5.push(this.nome.toLowerCase().split("")[0]);
    this.licenca = d5.join("");
  }
}

const p1 = new licencaVoo("HAL", "JORDAN", "1995-09-02");
p1.geraLicenca();
console.log(p1);
