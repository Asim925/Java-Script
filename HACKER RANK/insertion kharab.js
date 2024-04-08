function insertionSort1(n, arr) {
  let copy = arr.slice().sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    let index = arr.indexOf(copy[i]);
    let sortedPos = copy.indexOf(copy[i]);
    let element = arr.splice(index, 1)[0];
    arr.splice(sortedPos, 0, element);
    console.log(arr);
  }
}

let arr = [1, 4, 3, 5, 6, 2];
console.log(insertionSort1(6, arr));
