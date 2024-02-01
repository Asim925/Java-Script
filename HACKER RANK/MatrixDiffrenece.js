function diagonalDifference(arr) {
  let leftToRightDiagnol = arr[0][0] + arr[1][1] + arr[2][2];
  let rightToLeftDiagnol = arr[0][2] + arr[1][1] + arr[2][0];
  let difference = leftToRightDiagnol - rightToLeftDiagnol;
  if (difference < 0) difference = rightToLeftDiagnol - leftToRightDiagnol;

  return difference;
}

let array = [
  [11, 2, 4, 5],
  [4, 5, 6, 6],
  [10, 8, 12, 6],
  [10, 8, 12, 6],
];

console.log(diagonalDifference(array));
