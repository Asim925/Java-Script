function findDigits(n) {
  let count = 0;
  let splitted = n.toString().split("").map(Number); // map the string back to numbers
  for (let i of splitted) {
    if (n % i === 0) count++;
  }
  return count;
}

console.log(findDigits(12));
