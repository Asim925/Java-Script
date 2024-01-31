function aVeryBigSum(ar) {
  // Write your code here
  let total = 0;
  for (let number of ar) {
    total += number;
  }
  return total;
}

let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(array));
