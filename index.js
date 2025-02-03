"use strict";

function chunk(n, chunkStr = "") {
  if (typeof n === "number") {
    if (n != 0) {
      chunkStr += n === 1 ? "chunk" : "chunk-";
      return chunk(n - 1, chunkStr);
    } else {
      return chunkStr;
    }
  }
}

console.log(chunk(4));
