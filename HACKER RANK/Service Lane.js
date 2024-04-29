function serviceLane(n, t, width, cases) {
  let results = [];
  for (let que of cases) {
    let requiredWidths = width.slice(Math.min(...que), Math.max(...que) + 1);
    let minWidth = Math.min(...requiredWidths);
    results.push(minWidth);
  }
  return results;
}

let cases = [
  [2, 3],
  [1, 4],
  [2, 4],
  [2, 4],
  [2, 3],
];
let width = [1, 2, 2, 2, 1]; // n
console.log(serviceLane(5, 5, width, cases));
