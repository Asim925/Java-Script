function theLoveLetterMystery(s) {
  let t = s.split("").reverse().join("");
  if (s === t) return 0;

  let operations = 0;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] === t[i]) continue;
    operations += Math.abs(t.charCodeAt(i) - s.charCodeAt(i));
  }
  return operations;
}

let s = "cba";
console.log(theLoveLetterMystery(s));
