function flippingBits(n) {
  let num = String(n.toString(2)).padStart(32, "0").split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] == 1) num[i] = 0;
    else num[i] = 1;
  }
  return parseInt(num.join(""), 2);
}

console.log(flippingBits(9));
