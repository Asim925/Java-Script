function separateNumbers(s) {
  let result = "YES";
  let strings = s.split("");
  let numbers = strings.map((n) => +n);

  for (let i = 0; i < s.length - 1; i++) {
    if (numbers[i] !== numbers[i + 1] + 1) {
      strings[i] += strings[i + 1];
      strings.splice(strings[i + 1], 1);
    }
    console.log(strings);
  }
}

let s = "99100";
separateNumbers(s);
