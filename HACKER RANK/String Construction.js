function stringConstruction(s) {
  let arr = s.split("");
  let singles = arr.filter((value, index) => arr.indexOf(value) === index);
  return singles.length;
}

let s = "abcd";
console.log(stringConstruction(s));
