function andProduct(a, b) {
  a = Math.min(a, b);
  b = Math.max(a, b);
  let total = a;
  for (let i = a + 1; i <= b; i++) total &= i;
  return total;
}

console.log(andProduct(551124992, 551129087));
console.log(andProduct(2205057024, 2205061119));
console.log(andProduct(4204900352, 4204904447));
console.log(andProduct(971116544, 971120639));
console.log(andProduct(1971425280, 1971429375));
console.log(andProduct(2574172160, 2574176255));
console.log(andProduct(3634294784, 3634298879));
console.log(andProduct(3074641920, 3074646015));
console.log(andProduct(551124992, 551129087));
