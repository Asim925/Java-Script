function appendAndDelete(s, t, k) {
  if (s === t || k % (s.length - t.length) === 0) return "Yes";
  if (s.length - t.length > k) return "No";
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
