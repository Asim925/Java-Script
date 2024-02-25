function rotateLeft(d, arr) {
  for (let i = 1; i <= d; i++) {
    let lastElement = arr.shift();
    arr.push(lastElement);
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateLeft(1, arr));
