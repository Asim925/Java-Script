function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // for diagnol 1
      if (i === j) diag1 += arr[i][j];
      // for diagnol 2
      if (i + j === arr.length - 1) diag2 += arr[i][j];
    }
  }

  let difference = Math.abs(diag1 - diag2);
  return difference;
}

// sample input

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

console.log(diagonalDifference(array));
