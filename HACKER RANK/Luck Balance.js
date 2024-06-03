function luckBalance(k, contests) {
  let total = -1;
  let min = Infinity;
  for (let i = 0; i < contests.length; i++) {
    total += contests[i][0];
    if (contests[i][1] === 1 && min > contests[i][0]) min = contests[i][0];
  }
  return total;
}

let contests = [
  [8, 5],
  [13, 1],
  [10, 1],
  [9, 1],
  [8, 1],
  [13, 1],
  [12, 1],
  [18, 1],
  [13, 1],
];
console.log(luckBalance(3, contests));
