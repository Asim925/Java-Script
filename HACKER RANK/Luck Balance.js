function luckBalance(k, contests) {
  let importants = contests
    .filter((arr) => arr[1] === 1)
    .sort((a, b) => a[0] - b[0]);

  let totalLuck = 0;
  for (let i = 0; i < contests.length; i++) {
    totalLuck += contests[i][0];
  }

  if (importants.length === k) return totalLuck;
  else {
    let minimumLucks = 0;
    for (let i = 0; i < importants.length - k; i++) {
      minimumLucks += importants[i][0];
    }
    return totalLuck - minimumLucks * 2;
  }
}

let contests = [
  [5, 1],
  [1, 1],
  [4, 0],
];
console.log(luckBalance(1, contests));
