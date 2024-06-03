function maxMin(k, arr) {
  arr = arr.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let selected = arr.slice(i, i + k);
    if (Math.max(...selected) - Math.min(...selected) < min)
      min = Math.max(...selected) - Math.min(...selected);
  }
  return min;
}

let arr = [100, 200, 300, 350, 400, 401, 402];
console.log(maxMin(3, arr));
