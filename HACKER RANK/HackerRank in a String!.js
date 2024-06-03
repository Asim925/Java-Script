function hackerrankInString(s) {
  let hackerrank = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];
  if (s.match(/r/g).length < 2) return "NO";

  for (let i = 0; i < hackerrank.length; i++) {
    let currentIndex = s.indexOf(hackerrank[i]);
    let nextIndex = s.lastIndexOf(hackerrank[i + 1]);
    if (!s.includes(hackerrank[i]) || currentIndex > nextIndex) {
      if (nextIndex < 0) continue;
      return "NO";
    }
  }
  return "YES";
}

let s = "rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt";
console.log(hackerrankInString(s));
