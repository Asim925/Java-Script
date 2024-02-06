function miniMaxSum(arr) {
  let total = arr.reduce((a, b) => a + b);
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let exceptn = total - arr[i];
    output.push(exceptn);
  }

  output.sort((a, b) => a - b);

  let min = output[0];
  let max = output[0];
  for (let j = 0; j <= arr.length; j++) {
    if (max < output[j]) max = output[j];
  }
  console.log(min, max);
}

let arr = [1, 2, 3, 4, 5, 74, 6, 2, 42, 5, 6, 6];

miniMaxSum(arr);
