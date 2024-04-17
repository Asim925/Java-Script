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
