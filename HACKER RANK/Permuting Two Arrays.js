function twoArrays(k, A, B) {
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) return "NO";
  }
  return "YES";
}

let A = [2, 1, 3];
let B = [7, 8, 9];
console.log(twoArrays(5, A, B));
