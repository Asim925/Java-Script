// let arr = "aabaa";

// let s = "aabaa";
// console.log(s.slice(1, 4 + 1));

function countSubstrings(s, queries) {
  for (let query of queries) {
    let substring = s.slice(query[0], query[1] + 1);
    let x = [];
    for (let i = 0; i < substring.length; i++) {
      for (let j = i + 1; j < substring.length; j++) {
        if (substring.length === 1) x.push(substring);
        else if (!x.includes(substring.slice(i, j))) {
          x.push(substring.slice(i, j));
        }
        console.log(x);
      }
    }
  }
}
let queries = [
  [1, 1],
  [1, 4],
  [1, 1],
  [1, 4],
  [0, 2],
];
let s = "aabaa";
console.log(countSubstrings(s, queries));
