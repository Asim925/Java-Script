function howManyGames(p, d, m, s) {
  let games = 0;
  let prices = [];
  for (let i = p; i >= m; i -= d) {
    prices.push(i);
    if (s - i < 0) return games;
    games++;
    s -= i;
  }
  while (s >= 0) {
    s -= m;
    if (s < 0) break;
    games++;
  }
  return games;
}
console.log(howManyGames(20, 3, 6, 80));
