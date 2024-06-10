function minimumLoss(price) {
  let min = Infinity;
  for (let i = 0; i < price.length; i++)
    for (let j = 0; j < price.length; j++) {
      if (i === j) continue;
      if (price[i] > price[j]) {
        let dif = price[i] - price[j];
        if (min > dif) min = dif;
      }
    }
  return min;
}

let prices = [20, 7, 8, 2, 5];
console.log(minimumLoss(prices));
