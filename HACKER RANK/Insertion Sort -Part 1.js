function insertionSort1(n, arr) {
  let x = arr[n - 1];
  for (let i = 1; i < n; i++) {
    arr[n - i] = arr[n - (i + 1)];
    if (i === n - 1) {
      let last = arr.filter((val, ind) => ind === arr.indexOf(val));
      last.push(x);
      last.sort((a, b) => a - b);
      console.log(last);
      break;
    }
    console.log(arr);
  }
}

let arr = [1, 2, 4, 5, 3];
insertionSort1(5, arr);
