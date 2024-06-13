function maximumPerimeterTriangle(sticks) {
  let max = 0;
  let maxPart = [];
  for (let i = 0; i < sticks.length - 2; i++) {
    let part = sticks.slice(i, i + 3);
    if (part[0] + part[1] > part[2]) {
      let subtotal = part.reduce((a, b) => a + b);
      if (max < subtotal) {
        maxPart = part;
        max = subtotal;
      }
    }
  }
  if (maxPart.length === 0) return [-1];
  return maxPart;
}

let sticks = [3, 9, 2, 15, 3];
console.log(maximumPerimeterTriangle(sticks));
