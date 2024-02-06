function birthdayCakeCandles(candles) {
  let tallest = 0;

  for (let i = 0; i < candles.length; i++) {
    if (tallest < candles[i]) tallest = candles[i];
  }

  let repeated = candles.filter((value) => value === tallest);
  return repeated.length;
}

let candles = [4, 4, 2, 1];

console.log(birthdayCakeCandles(candles));
