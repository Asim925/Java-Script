function appendAndDelete(s, t, k) {
  if (s === t) return "Yes";
  let initial = s.split("");
  let final = t.split("");
  let i = 0;
  while (initial[i] === final[i]) i++;
  let steps = initial.length - i + (final.length - i);
  if (steps === k) return "Yes";
  return "No";
}

let s =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv"; // initial
let t =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";

let k = 7; // steps
console.log(appendAndDelete(s, t, k));
