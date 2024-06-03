function absolutePermutation(n, k) {
  let arr = [];
  let index = [];
  for (let i = 1; i <= n; i++) {
    index.unshift(i);
    arr.push(i);
  }
  for (let i = 0; i < n; i++) {
    if (Math.abs !== k) {
      arr.unshift(arr.pop());
    }
  }
}

console.log(absolutePermutation(2, 1));
