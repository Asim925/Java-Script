// ================== MY CODE ================== //
function sockMerchant(n, ar) {
  let count = 0;
  let singles = ar.filter((value, index) => ar.indexOf(value) === index);
  for (let single of singles) {
    let singleElements = ar.filter((n) => n === single);
    let pairsCount = Math.floor(singleElements.length / 2);
    count += pairsCount;
  }
  return count;
}

let ar = [1, 2, 1, 2, 1, 3, 2];
console.log(sockMerchant(7, ar));

// ================== sheikhs CODE ================== //

// function sockMerchant(n, ar) {
//   let sockCounts = {};
//   let pairsCount = 0;

//   for (let sock of ar) {
//     sockCounts[sock] = (sockCounts[sock] || 0) + 1;
//   }

//   for (let count of Object.values(sockCounts)) {
//     pairsCount += Math.floor(count / 2);
//   }

//   return pairsCount;
// }

// let ar = [1, 2, 1, 2, 1, 3, 2];
// console.log(sockMerchant(7, ar));
