function missingNumbers(arr, brr) {
  let missings = [];
  for (let i = 0; i < brr.length; i++) {
    if (!arr.includes(brr[i])) {
      missings.push(brr[i]);
      brr.splice(i, 1);
    }
  }
  let orignal = {};
  let copy = {};
  for (let key of brr) orignal[key] = (orignal[key] || 0) + 1;
  for (let key of arr) copy[key] = (copy[key] || 0) + 1;
  let freqOrignal = Object.entries(orignal);
  let freqCopy = Object.entries(copy);
  for (let i = 0; i < freqOrignal.length; i++) {
    if (freqOrignal[i][1] > freqCopy[i][1])
      missings.push(Number(freqOrignal[i][0]));
  }
  return missings.sort((a, b) => a - b);
}

let arr = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
let brr = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];
console.log(missingNumbers(arr, brr));
