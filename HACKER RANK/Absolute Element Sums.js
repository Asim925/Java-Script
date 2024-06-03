/// =============== MERI LOGIC ""

function playingWithNumbers(arr, queries) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < queries.length; j++) {
      arr[j] += queries[i];
    }
    results.push(arr.reduce((a, b) => a + Math.abs(b), 0));
  }
  return results;
}

// function playingWithNumbers(arr, queries) {
//   let results = [];
//   let cumulativeSum = 0;

//   for (let i = 0; i < queries.length; i++) {
//     cumulativeSum += queries[i];
//     results.push(
//       arr.reduce((sum, num) => sum + Math.abs(num + cumulativeSum), 0)
//     );
//   }

//   return results;
// }

let arr = [-1, 2, -3];
let queries = [1, -2, 3];
console.log(playingWithNumbers(arr, queries));
