function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let sliced = s.slice(i, i + m);
    if (sliced.length < m) break;
    let sum = sliced.reduce((a, b) => a + b);
    if (sum === d) count++;
  }
  return count;
}

let s = [2, 2, 1, 3, 2];
console.log(birthday(s, 4, 2));
