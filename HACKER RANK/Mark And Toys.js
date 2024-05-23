function maximumToys(prices, k) {
  let count = 0;
  prices.sort((a, b) => a - b);
  for (let i = 0; i < prices.length; i++) {
    k -= prices[i];
    if (k < 0) break;
    count++;
  }
  return count;
}

let prices = [1, 12, 5, 111, 200, 1000, 10];
console.log(maximumToys(prices, 50));
