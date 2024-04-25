function counterGame(n) {
  let turnCount = 0;
  for (let i = n; i >= 1; i--) {
    turnCount++;
    if (Math.sqrt(n) % 1 === 0) n / 2;
    else {
      let lowerPower = 0;
      for (let j = 1; j < 64; j++) {
        if (Math.pow(2, j) < n) lowerPower = Math.pow(2, j);
        if (Math.pow(2, j + 1) > n) break;
      }
      n = n - lowerPower + 1;
    }
    n -= 1;
    if (n === 0) break;
  }
  if (turnCount % 2 === 0) return "Louise";
  return "Richard";
}

console.log(counterGame(6));
