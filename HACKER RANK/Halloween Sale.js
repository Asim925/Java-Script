function howManyGames(p, d, m, s) {
  let startingPrice = p;
  let discount = d;
  let minimum = m;
  let budget = s;

  let prices = [];
  for (let i = startingPrice; i >= 0; i -= discount) {
    if (i >= minimum) prices.push(i);
    if (i < minimum) {
      let dif = minimum - i;
      let added = dif + i;
      prices.push(added);
    }
  }
  console.log(prices);

  let newArr = [];
  for (let i = 0; i < prices.length; i++) {
    newArr.push(prices[i]);
    let reduced = newArr.reduce((a, b) => a + b);
    if (reduced > budget) {
      newArr.pop();
      console.log(newArr);
    }
  }
  return newArr.length;
}

console.log(howManyGames(89, 60, 27, 7777));
