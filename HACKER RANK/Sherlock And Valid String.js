function isValid(s) {
  let occurences = {};
  let string = s.split("");
  let result = "YES";

  for (let char of string) {
    occurences[char] = (occurences[char] || 0) + 1;
  }

  let min = Infinity;
  let max = 0;
  for (let x in occurences) {
    if (min > occurences[x]) min = occurences[x];
    if (max < occurences[x]) max = occurences[x];
  }

  for (let x in occurences) {
    if (occurences[x] > min) occurences[x] -= 1;
    // break;
  }

  for (let x in occurences) {
    if (occurences[x] > min) result = "NO";
  }
  return result;
}

let s = "abcdefghhgfedecba";
console.log(isValid(s));
