function utopianTree(n) {
  let H = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) H *= 2;
    if (i % 2 !== 0) H += 1;
  }
  return H;
}
console.log(utopianTree(4));
