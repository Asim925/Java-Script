/* s => array , d => day , m => month */
function birthday(s, d, m) {
  // let sorted = s.sort((a, b) => a - b);
  let results = [];
  for (let i = 0; i < s.length; i++)
    for (let j = i; j < s.length; j++) {
      results.push([s[i], s[j]]);
      console.log([s[i], s[j]]);
    }
  let count = 0;
  for (let pair of results) {
    if (pair.length === m && pair.reduce((a, b) => a + b) === d) count++;
  }
  return count;
}

let s = [4];
console.log(birthday(s, 4, 1));
