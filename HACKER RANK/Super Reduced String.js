function superReducedString(s) {
  // Write your code here
  let obj = {};
  for (let letter of s) obj[letter] = (obj[letter] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    for (let key in obj) {
      if (obj[key] >= 2) obj[key] -= 2;
    }
  }
  console.log(obj);
}
console.log(superReducedString("aaabccddd"));
