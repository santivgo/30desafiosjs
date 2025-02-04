function fat(n) {
  const big = BigInt(n);
  if (big == 1) return 1n;
  return big * fat(big - 1n);
}

console.log(fat(32));
