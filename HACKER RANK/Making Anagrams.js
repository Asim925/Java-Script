function makingAnagrams(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1.includes(s2[i])) {
      count++;
      s1.splice(s1[s2[i]], 1);
      s2.splice(s2[i], 1);
    }
  }
  let length1 = s1.length - count;
  let length2 = s2.length - count;
  return length1 + length2;
}

let s1 = "cde";
let s2 = "abc";
console.log(makingAnagrams(s1, s2));
