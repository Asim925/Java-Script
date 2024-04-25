function theGreatXor(x) {
  let count = 0;
  for (let i = 1; i <= x; i++) if ((x ^ i) > x) count++;
  return count;
}

console.log(theGreatXor(10));
