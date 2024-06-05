function gameOfStones(n) {
  let count = 0;
  for (let i = n; i >= 0; i--) {
    if (n >= 5) n -= 5;
    else if (n >= 3) n -= 3;
    else if (n >= 2) n -= 2;
    else break;
    count++;
  }
  if (count % 2 === 0) return "Second";
  return "First";
}
console.log(gameOfStones(10));
