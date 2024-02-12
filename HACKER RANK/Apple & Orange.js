function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let m = apples.length;
  let n = oranges.length;

  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < m; i++) {
    let actualPos = apples[i] + a;
    if (actualPos >= s && actualPos <= t) appleCount++;
  }

  for (let i = 0; i < n; i++) {
    let actualPos = b + oranges[i];
    if (actualPos <= t && actualPos >= s) orangeCount++;
  }

  console.log(appleCount);
  console.log(orangeCount);
}

let apples = [2, 3, -4];
let oranges = [3, -2, -4];
countApplesAndOranges(7, 10, 4, 12, apples, oranges);
