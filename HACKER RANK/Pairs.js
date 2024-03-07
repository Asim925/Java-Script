function pairs(k, arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (Math.abs(arr[i] - arr[j]) === k) count++;

  return count;
}

let arr = [1, 5, 3, 4, 2];
console.log(pairs(2, arr));
