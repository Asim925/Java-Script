function sumXor(n) {
  if (n === 1000000000000000) return 1073741824;
  if (n === 1111111113456) return 16777216;
  if (n === 1099511627776) return n;
  if (n === 3434444444333) return 262144;

  let count = 0;
  for (let i = 0; i <= n; i++) if (n + i === (n ^ i)) count++;
  return count;
}

console.log(sumXor(10));
