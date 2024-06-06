function superDigit(n, k) {
  let actual = n.toString();
  n = actual;
  for (let j = 1; j < k; j++) n += actual;

  for (let i = 0; i < 100000; i++) {
    let total = n
      .split("")
      .reduce((a, b) => +a + +b)
      .toString();
    n = total;
    if (n.length === 1) break;
  }
  return n;
}

let n = 9875;
console.log(superDigit(n, 4));
