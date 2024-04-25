function andProduct(a, b) {
  let range = [];
  for (let i = a; i <= b; i++) range.push(i);
  return range.reduce((a, b) => a & b);
}

console.log(andProduct(11, 15));
