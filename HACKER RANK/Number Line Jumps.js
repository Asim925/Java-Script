function kangaroo(x1, v1, x2, v2) {
  let result = "NO";
  for (let i = 1; i <= 10000; i++) {
    let pos1 = x1 + i * v1;
    let pos2 = x2 + i * v2;

    if (pos1 === pos2) result = "YES";
  }
  return result;
}

console.log(kangaroo(0, 3, 4, 2));
