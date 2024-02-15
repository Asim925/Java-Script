function getTotalX(a, b) {
  let count = 0;
  let maxArr1 = Math.min(...a);
  let minArr2 = Math.max(...b);

  for (let i = maxArr1; i <= minArr2; i++) {
    let aIsFactorsOfValue = a.every((factor) => i % factor === 0);
    let bIsDivisableByValue = b.every((factor) => factor % i === 0);
    if (aIsFactorsOfValue && bIsDivisableByValue) count++;
  }
  return count;
}

let a = [2, 6];
let b = [24, 36];
console.log(getTotalX(a, b));
