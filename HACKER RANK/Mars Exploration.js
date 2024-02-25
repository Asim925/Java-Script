function marsExploration(s) {
  let count = 0;
  let array = s.split("");
  for (let i = 0; i < array.length; i += 3) {
    let spliced = array.slice(i, i + 3);
    if (spliced[0] !== "S") count++;
    if (spliced[1] !== "O") count++;
    if (spliced[2] !== "S") count++;
  }
  return count;
}

let s = "SSSSSSSSSSSSSSSOOOOOOOOOOOOOOOOOOOOOOOOOSSSSSSSO";
console.log(marsExploration(s));
