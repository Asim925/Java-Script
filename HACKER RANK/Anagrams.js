function anagram(s) {
  if (s.length % 2 !== 0) return -1;
  let halflength = s.length / 2;
  s = s.split("");
  let part1 = s.splice(0, halflength);
  let part2 = s;
  let count = 0;
  for (let i = 0; i < part1.length; i++) if (part1[i] !== part2[i]) count++;
  return count;
}

console.log(anagram("xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa"));
