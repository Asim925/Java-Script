function funGame(a, b) {
  let moves = a.length;
  let p1 = 0;
  let p2 = 0;
  for (let i = 1; i <= moves; i++) {
    if (i % 2 === 1) {
      p1 += Math.max(...a);
      let index = a.indexOf(Math.max(...a));
      a.splice(index, 1);
      b.splice(index, 1);
    } else {
      p2 += Math.max(...b);
      let index = b.indexOf(Math.max(...b));
      b.splice(index, 1);
      a.splice(index, 1);
    }
  }
  if (p1 > p2) return "First";
  if (p1 === p2) return "Tie";
  return "Second";
}
let a = [20, 2];
let b = [1, 10000];
console.log(funGame(a, b));
