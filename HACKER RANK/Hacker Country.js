function hackerCountry(tolls) {
  let count = 0;
  let length = tolls.length;
  for (let arr of tolls) {
    count += Math.abs(arr[0] - arr[1]);
  }
  return `${count}/${length}`;
}

let tolls = [
  [0, 1],
  [2, 0],
];
hackerCountry(tolls);
