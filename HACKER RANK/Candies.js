function candies(n, arr) {
  let candies = [1];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i + 1];
    let previous = arr[i];
    if (current > previous) candies.push(candies[i] + 1);
    else candies.push(1);
  }
  return [candies, candies.reduce((a, b) => a + b)];
}

console.log(candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]));
