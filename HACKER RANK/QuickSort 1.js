function quickSort(arr) {
  let left = [];
  let equal = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    let pivot = arr[0];
    if (arr[i] === pivot) equal.push(arr[i]);
    else if (arr[i] > pivot) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...left, ...equal, ...right];
}

let arr = [4, 5, 3, 7, 2];
console.log(quickSort(arr));
