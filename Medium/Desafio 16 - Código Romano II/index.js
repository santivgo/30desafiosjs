"use strict";

function cifraDeCesar(string, forward) {
  forward = forward % 26;
  const asciiArray = string.split("").map( char => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90 && code - forward < 65){
      return code + 26
    }

    else if (code >= 96 && code <= 122 && code - forward < 96){
      return code + 26
    }

    return code
  })


  return asciiArray.map(code => String.fromCharCode(code - forward)).join("")
}

console.log(cifraDeCesar("Vguvg", 2))
