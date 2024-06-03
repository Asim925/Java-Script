function squares(a, b) {
  let count = 0;
  let start = Math.ceil(Math.sqrt(a)); // Start from the smallest integer whose square is >= a
  let end = Math.floor(Math.sqrt(b)); // End at the largest integer whose square is <= b

  for (let i = start; i <= end; i++) {
    count++;
  }

  return count;
}
console.log(squares(1, 10));
