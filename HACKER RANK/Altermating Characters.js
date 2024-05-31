function alternatingCharacters(s) {
  s = s.split("");
  if (s[0] === s[2] && s[0] !== s[1]) return 0;
  let filtered = s.filter((a, b) => s.indexOf(a) === b);
  return s.length - filtered.length;
}

let s = "AAABBB";
console.log(alternatingCharacters(s));
