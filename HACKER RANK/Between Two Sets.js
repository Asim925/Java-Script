function getTotalX(a, b) {
  let count = 0;
  let min = Math.min(...a); // Minimum value
  let max = Math.max(...b); // Maximum value

  for (let i = min; i <= max; i++) {
    let aIsFactorsOfValue = a.every((factor) => i % factor === 0);
    let bIsDivisableByValue = b.every((factor) => factor % i === 0);
    if (aIsFactorsOfValue && bIsDivisableByValue) count++;
  }
  return count;
}

let a = [2, 6];
let b = [24, 36];
console.log(getTotalX(a, b));
