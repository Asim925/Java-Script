// n => length
// k is divisor
// ar is array

function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (i < j) {
        let added = ar[i] + ar[j];
        if (added % k === 0) count++;
      }

  return count;
}

let ar = [1, 3, 2, 6, 1, 2];
console.log(divisibleSumPairs(6, 3, ar));
