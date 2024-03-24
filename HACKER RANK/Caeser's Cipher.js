function caesarCipher(s, k) {
  // Making New sequence
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let upperLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < k; i++) {
    let removedSmall = letters.shift();
    letters.push(removedSmall);

    let removedLarge = upperLetters.shift();
    upperLetters.push(removedLarge);
  }

  // Main
  let stringLetters = s.split("");
  for (let i = 0; i < stringLetters.length; i++) {
    if (stringLetters[i] === "-") continue;
    if (stringLetters[i] === stringLetters[i].toUpperCase()) continue;
    else {
      let index = letters.indexOf(stringLetters[i]);
      stringLetters[i] = letters[index + k];
    }
  }

  return stringLetters;
}

let s = "Always-Look-on-the-Bright-Side-of-Life";
console.log(caesarCipher(s, 5));
