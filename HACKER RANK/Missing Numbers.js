function missingNumbers(arr, brr) {
  arr.sort((a, b) => a - b);
  brr.sort((a, b) => a - b);

  for (let i = 0; i < brr.length; i++) {
    if (!brr.includes(arr[i])) {
      let spliced = brr.splice(brr.indexOf(arr[i]), 1);
      console.log(spliced);
    }
  }
}

let arr = [1, 1, 2, 2, 3, 3, 3];
let brr = [1, 1, 2, 2, 3, 3, 3, 2, 4];
console.log(missingNumbers(arr, brr));
