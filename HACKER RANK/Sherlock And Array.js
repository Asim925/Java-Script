function balancedSums(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let part1 = arr.slice(0, i);
    if (part1.length === 0) part1 = [0];
    let part2 = arr.slice(i + 1, n);
    if (part2.length === 0) part2 = [0];

    if (part1.reduce((a, b) => a + b) === part2.reduce((a, b) => a + b))
      return "YES";
  }
  return "NO";
}

let arr = [4, 4, 4, 4];
console.log(balancedSums(arr));
