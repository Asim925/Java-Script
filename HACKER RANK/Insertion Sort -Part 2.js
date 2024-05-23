function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      let previous = arr[j];
      if (current < previous) {
        arr.splice(arr.indexOf(current), 1);
        arr.splice(arr.indexOf(previous), 0, current);
      }
    }
    console.log(arr.join(" "));
  }
}

let arr = [1, 4, 3, 5, 6, 2];
insertionSort2(6, arr);
