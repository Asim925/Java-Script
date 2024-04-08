function sumXor(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) if (n + i === (n ^ i)) count++;
  return count;
}

console.log(sumXor(10));
