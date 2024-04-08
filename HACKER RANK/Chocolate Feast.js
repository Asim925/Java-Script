// n => Spending price
// c => 1 chocolate price
// m => wraps required for 1 chocolate

function chocolateFeast(n, c, m) {
  let wraps = Math.floor(n / c);
  let count = wraps;
  if (wraps < m) return wraps;

  let remainingWraps = wraps % m;
  let freeFeasts = (wraps - remainingWraps) / m;

  for (let i = wraps; i >= 0; i--) {
    count += freeFeasts;
    wraps = remainingWraps + freeFeasts;
    remainingWraps = wraps % m;
    freeFeasts = (wraps - remainingWraps) / m;
  }

  return count;
}

console.log(chocolateFeast(12, 4, 4));

// console.log();
