function vowelsAndConsonants(s) {
  let split = s.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  for (let n of vowels) {
    if (s.includes(n)) {
      let letter = split.splice(split.indexOf(n), 1);
      console.log(letter);
    }
  }
  console.log(split);
}

let s = "javascriptLoops";
vowelsAndConsonants(s);
