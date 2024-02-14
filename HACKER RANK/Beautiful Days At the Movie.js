function beautifulDays(i, j, k) {
  let count = 0;

  for (let days = i; days <= j; days++) {
    let str = days.toString().split("");
    let rev = str.reverse();
    let x = rev.join("");
    let difference = Math.abs(days - x);
    let value = difference / k;
    if (value % 1 === 0) count++; // checking if its whole number
  }
  return count;
}

console.log(beautifulDays(20, 23, 6));
