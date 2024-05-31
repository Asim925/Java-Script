function funnyString(s) {
  s = s.split("");
  let differnece = [];

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].charCodeAt(0);
    if (i > 0) differnece.push(Math.abs(s[i] - s[i - 1]));
  }

  let reversedDif = differnece.slice().reverse();
  for (let i = 0; i < differnece.length; i++)
    if (differnece[i] !== reversedDif[i]) return "Not Funny";

  return "Funny";
}

let s = "lmnop";
console.log(funnyString(s));
