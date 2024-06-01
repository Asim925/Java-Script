function balancedSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    let part1 = arr.slice(0, i);
    let part2 = arr.slice(i + 1, arr.length);
    let sumOfPart1 = 0;
    if (part1.length) sumOfPart1 = part1.reduce((a, b) => a + b);
    let sumOfPart2 = 0;
    if (part2.length) sumOfPart2 = part2.reduce((a, b) => a + b);
    if (sumOfPart1 === sumOfPart2) return "YES";
  }
  return "NO";
}

let arr = [1, 1, 4, 1, 1];
console.log(balancedSums(arr));
