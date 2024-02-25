function camelcase(s) {
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) count++;
  }
  return count;
}

let s = "saveChangesInTheEditor";
console.log(camelcase(s));
