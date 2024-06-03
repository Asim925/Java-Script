function maximumSum(a, m) {
  let result = [[]];

  for (let i = 0; i < a.length; i++) {
    let subsets = [];
    for (let j = 0; j < result.length; j++)
      subsets.push(result[j].concat(a[i]));
    result = result.concat(subsets);
  }

  let max = 0;
  for (let i = 1; i < result.length; i++)
    if (max < result[i].reduce((a, b) => a + b) % m)
      max = result[i].reduce((a, b) => a + b) % m;
  return max;
}

let a = [3, 3, 9, 9, 5];
console.log(maximumSum(a, 7));
