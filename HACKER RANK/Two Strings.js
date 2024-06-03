function twoStrings(s1, s2) {
  for (let i = 0; i < Math.min(s1.length, s2.length); i++)
    if (s2.includes(s1[i])) return "YES";

  return "NO";
}

console.log(twoStrings("hi", "world"));
