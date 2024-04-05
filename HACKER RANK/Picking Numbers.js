function pickingNumbers(a) {
  let max = 0;
  let filtered = a.filter((value, index) => a.indexOf(value) === index);
  if (filtered.length === 1) return a.length;

  a.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++)
    for (let j = 0; j < a.length; j++) {
      let subarray = a.slice(i, j);
      if (
        subarray.length === 0 ||
        (subarray[subarray.length - 1] - subarray[0] !== 1 &&
          subarray[subarray.length - 1] - subarray[0] !== 0)
      )
        continue;
      if (max < subarray.length) max = subarray.length;
    }
  return max;
}
let a = [
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66,
];
console.log(pickingNumbers(a));
