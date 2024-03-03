function pairs(k, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i; j < arr.length; j++) {
      let pair = [arr[i], arr[j]];
      console.log(pair);
      if (pair.reduce((a, b) => Math.abs(a - b)) === k) count++;
    }
  return count;
}

let arr = [1, 5, 3, 4, 2];
console.log(pairs(2, arr));
