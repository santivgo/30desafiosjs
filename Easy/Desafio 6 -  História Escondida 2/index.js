function invertePalavras(string) {
  const nossaString = string.toLowerCase().split(" ");
  const stringNova = nossaString.map((palavra) => {
    return palavra.split("").reverse().join("");
  });

  return stringNova.join(" ");
}
console.log(invertePalavras("This is an apple"));
