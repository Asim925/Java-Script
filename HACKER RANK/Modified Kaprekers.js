function kaprekarNumbers(p, q) {
  let result = [];
  for (let num = p; num <= q; num++) {
    let square = num ** 2;
    let n = square.toString().split("").map(Number);

    let firstPart = parseInt(n.splice(n.length / 2).join(""));
    let secondPart = parseInt(n.join(""));
    if (isNaN(secondPart)) secondPart = 0;
    if (firstPart + secondPart === num) result.push(num);
  }
  if (result.length === 0) console.log("INVALID RANGE");
  console.log(result.join(" "));
}

kaprekarNumbers(400, 700);
