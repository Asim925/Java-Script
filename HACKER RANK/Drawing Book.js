// no. of pages : n
// target page : p
function pageCount(n, p) {
  let turns = 0;
  if (p - 1 < n - p)
    for (let i = 1; i <= n; i += 2) {
      if (!(i === p || i - 1 === p)) turns++;
      else return turns;
    }
  else {
    if (n % 2 === 0)
      for (let i = n + 1; i >= 1; i -= 2) {
        if (!(i === p || i - 1 === p)) turns++;
        else return turns;
      }
    else
      for (let i = n; i >= 1; i -= 2) {
        if (!(i === p || i - 1 === p)) turns++;
        else return turns;
      }
  }
}

console.log(pageCount(6, 5));

// ============================= Actual Logic ========================================
// const fromBeginning = Math.floor(p / 2);

// const fromEnd = Math.floor(n / 2 - fromBeginning);

// return Math.min(fromBeginning, fromEnd);
