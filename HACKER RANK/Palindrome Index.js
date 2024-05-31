function palindromeIndex(s) {
  if (s.split("") === s.split("").reverse().join("")) return -1;

  let obj = {};
  let min = Infinity;
  let minletter = null;
  for (let letter of s) obj[letter] = (obj[letter] || 0) + 1;

  for (let key in obj)
    if (obj[key] < min) {
      min = obj[key];
      minletter = key;
    }

  return s.indexOf(minletter);
}

let s =
  "fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf";
console.log(palindromeIndex(s));
