/* s => array , d => day , m => month */
function birthday(s, d, m) {
  let count = 0;
  for (let i = 0; i < s.length; i++)
    for (let j = 0; j < s.length; j++)
      if (i <= j && i !== j) {
        console.log(s[i], s[j]);
        if (s[i] === s[i]) continue;

        let added = s[i] + s[j];
        // if (added === d) count++;
      }

  return count;
}

let s = [2, 2, 1, 3, 2];
console.log(birthday(s, 4, 2));
