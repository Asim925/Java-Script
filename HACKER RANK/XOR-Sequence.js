function xorSequence(l, r) {
  let sum = 0;
  let A = [];
  for (let i = 0; i <= r; i++) {
    if (i === 0) {
      A.push(0);
      continue;
    }
    A.push(A[i - 1] ^ i);
    if (i >= l) sum = sum ^ A[i];
  }
  return sum;
}

console.log(xorSequence(39827027514126, 562796524793506));
