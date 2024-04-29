function appendAndDelete(s, t, k) {
  if (s === t) return "Yes";
  let initial = s.split("");
  let final = t.split("");
  let i = 0;
  while (initial[i] === final[i]) i++;
  let steps = initial.length - i + (final.length - i);
  if (
    steps === k ||
    (steps !== k &&
      initial.length - steps === final.length &&
      (i - steps) % 2 === 0)
  )
    return "Yes";
  return "No";
}

let s = "ashley";
let t = "ash";

let k = 2; // steps
console.log(appendAndDelete(s, t, k));
