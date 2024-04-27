function permutationEquation(p) {
  let y = [];
  for (let x = 1; x <= p.length; x++) {
    y.push(p.indexOf(p.indexOf(x) + 1) + 1);
  }
  return y;
}

let p = [2, 3, 1];
console.log(permutationEquation(p));
