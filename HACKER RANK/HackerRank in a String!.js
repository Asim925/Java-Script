function hackerrankInString(s) {
  s = s.split("");
  let obj = {};
  let hackerrank = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];
  for (let letter of s)
    if (hackerrank.includes(letter)) obj[letter] = (obj[letter] || 0) + 1;

  for (let letter in obj) {
    if (letter === "r" && !(obj[letter] >= 2)) return "NO";
    else if (letter === "h" && !(obj[letter] >= 1)) return "NO";
    else if (letter === "a" && !(obj[letter] >= 2)) return "NO";
    else if (letter === "n" && !(obj[letter] >= 1)) return "NO";
    else if (letter === "k" && !(obj[letter] >= 1)) return "NO";
    else if (letter === "e" && !(obj[letter] >= 1)) return "NO";
    else if (letter === "c" && !(obj[letter] >= 1)) return "NO";
  }
  return "YES";
}

let s = "rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt";
console.log(hackerrankInString(s));
