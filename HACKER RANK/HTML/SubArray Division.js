function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.length <= 1)
      for (let j = 0; j < s.length; j++) {
        if (s[i] === d) count++;
      }

    if (s.length >= 2)
      for (let j = 1; j < s.length; j++) {
        if (i > j && s[i] + s[j] === d) count++;
      }
  }

  return count;
}

let s = [2, 2, 1, 3, 2];
console.log(birthday(s, 4, 2));
