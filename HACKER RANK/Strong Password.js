function minimumNumber(n, password) {
  let count = 0;
  if (!/[a-z]/.test(password)) count++;
  if (!/[A-Z]/.test(password)) count++;
  if (!/[0-9]/.test(password)) count++;
  if (!/[^a-zA-Z0-9]/.test(password)) count++;
  if (n < 6) {
    n += count;
    if (!(n >= 6)) {
      let dif = Math.abs(n - 6);
      count += dif;
    }
  }
  return count;
}
console.log(minimumNumber(3, "Ab1"));
