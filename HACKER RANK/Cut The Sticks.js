function cutTheSticks(arr) {
  let lengths = [arr.length];
  let reducer = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[j] -= reducer;
    }
    let filtered = arr.filter((value) => value > 0);
    if (filtered.length === 0) break;
    lengths.push(filtered.length);
    reducer = Math.min(...filtered);
  }
  return lengths;
}

let arr = [5, 4, 4, 2, 2, 8];
console.log(cutTheSticks(arr));

// let a = [1, 23, 4];
// let filtered = a.filter((n) => n < 20);
// console.log(filtered,Math.min(...filtered));
