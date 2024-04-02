function nonDivisibleSubset(k, s) {
  let nonDivisbleNo = [];
  for (let i = 0; i < s.length; i++)
    for (let j = i + 1; j < s.length; j++) {
      if ((s[i] + s[j]) % k !== 0) nonDivisbleNo.push(s[i], s[j]);
    }

  let notDivisibles = nonDivisbleNo.filter(
    (V, I) => nonDivisbleNo.indexOf(V) === I
  );
  let count = 0;
  for (let n of notDivisibles) {
    if (n % k !== 0) count++;
  }

  return count;
}

let s = [
  278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436,
];
console.log(nonDivisibleSubset(9, s));
