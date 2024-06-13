let a = [7, 6, 18];
let total = a.reduce((a, b) => a + b);
let result = true;
for (let i = 0; i < a.length - 1; i++) {
  for (let j = i + 1; j < a.length; j++) {
    let part1 = a[i] + a[j];
    let part2 = total - (a[i] + a[j]);
    if (Math.abs(part1 - part2) % 3 !== 0) result = false;
    break;
  }
  break;
}
if (!result) console.log("Balsa");
else console.log("Koca");
