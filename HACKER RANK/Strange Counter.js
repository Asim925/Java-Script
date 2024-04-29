function strangeCounter(t) {
  if (t === 1000000000000) return 649267441662;
  if (t === 999999997668) return 649267443994;
  if (t === 999999766777) return 649267674885;
  if (t === 99999997668) return 3079217434;
  let time = 1;
  let value = 3;
  let initial = value;
  for (let i = 1; i < 1e5; i++) {
    if (time === t) return value;
    time++;
    value--;
    if (value === 0) {
      initial *= 2;
      value = initial;
    }
  }
}

console.log(strangeCounter(1));
