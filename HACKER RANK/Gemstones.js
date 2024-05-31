function gemstones(arr) {
  let gems = 0;

  arr[0] = arr[0].split("").sort().join("");

  for (let j = 0; j < arr[0].length; j++) {
    if (arr[0][j] === arr[0][j + 1]) continue;
    if (arr.every((str) => str.includes(arr[0][j]))) gems++;
  }
  return gems;
}

let arr = ["abcdde", "baccd", "eeabg"];
console.log(gemstones(arr));
