function beautifulBinaryString(b) {
  if (!b.includes("010")) return 0;
  let count = 0;

  while (b.includes("010")) {
    b = b.replace("010", "011");
    count++;
  }
  return count;
}

console.log(beautifulBinaryString("0111010"));
