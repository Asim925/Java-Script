function vowelsAndConsonants(s) {
  let splitted = s.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < splitted.length; i++)
    for (let n of vowels)
      if (splitted[i] === n) {
        let index = splitted.indexOf(splitted[i]);
        let element = splitted.splice(index, 1)[0];
        splitted.unshift(element);
      }
  console.log(splitted);
}

let s = "javascriptLoops";
vowelsAndConsonants(s);
