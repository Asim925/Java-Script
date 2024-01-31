function compareTriplets(a, b) {
  let pointsOfAlice = 0;
  let pointsOfBob = 0;
  for (let i = 0; i <= 2; i++) {
    if (a[i] < b[i]) pointsOfBob += 1;
    if (a[i] > b[i]) pointsOfAlice += 1;
  }
  let output = [];
  output.push(pointsOfAlice, pointsOfBob);
  return output;
}

let a = [1, 2, 3];
let b = [3, 2, 1];

console.log(compareTriplets(a, b));
