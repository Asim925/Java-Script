function angryProfessor(k, a) {
  let early = a.filter((value) => value <= 0);
  if (early.length >= k) return "NO";
  else return "YES";
}

let a = [-1, -3, 4, 2];
console.log(angryProfessor(3, a));
