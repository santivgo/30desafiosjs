class Equation {
  solve(a = 0, b = 0, c = 0) {
    if (a === 0 && b === 0 && c === 0) {
      return "Parâmetros insuficientes";
    } else if (b && c) {
      const conjSolucao = [];

      if (a === 0) {
        const result = (c * -1) / b;
        conjSolucao.push(result);

        console.log(`${b}x + ${c} = 0`);
        console.log(`${b}x = ${c * -1}`);
        console.log(`x = ${c * -1}/${b}`);
        console.log(`x = ${result}`);
        return conjSolucao;
      }
      const delta = b * b - 4 * a * c;
      console.log(`Δ = ${b}²-4*${a}*${c}`);
      console.log(`Δ = ${delta}`);
      if (delta < 0) {
        console.log("Não possui raízes reais");
        return conjSolucao;
      }

      const x1 = (b * -1 + Math.sqrt(delta)) / (2 * a);
      conjSolucao.push(x1);
      console.log(`x' = -(${b}) + √${delta} / 2 * ${a}`);
      console.log(`x' = (${b * -1}) + √${delta} / 2 * ${a}`);
      console.log(`x' = ${b * -1} + √${delta} / ${2 * a}`);
      console.log(`x' = ${b * -1} + ${Math.sqrt(delta)} / ${2 * a}`);
      console.log(`x' = ${b * -1 + Math.sqrt(delta)} / ${2 * a}`);
      console.log(`x' = ${x1}`);

      if (delta !== 0) {
        const x2 = (b * -1 - Math.sqrt(delta)) / (2 * a);
        conjSolucao.push(x2);
        console.log(`x'' = -(${b}) - √${delta} / 2 * ${a}`);
        console.log(`x'' = (${b * -1}) - √${delta} / 2 * ${a}`);
        console.log(`x'' = ${b * -1} - √${delta} / ${2 * a}`);
        console.log(`x'' = ${b * -1} - ${Math.sqrt(delta)} / ${2 * a}`);
        console.log(`x'' = ${b * -1 - Math.sqrt(delta)} / ${2 * a}`);
        console.log(`x'' = ${x2}`);
      }

      return conjSolucao;
    } else {
      return "Parâmetros Insuficientes";
    }
  }
}

equation = new Equation();
console.log(equation.solve(0, 2, 6));
