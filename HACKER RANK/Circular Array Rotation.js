function circularArrayRotation(a, k, queries) {
  for (let i = 1; i <= k; i++) {
    let removed = a.pop();
    a.unshift(removed);
    // console.log(a);
  }

  let requiredValues = [];
  for (let i = 0; i < queries.length; i++) {
    requiredValues.push(a[queries[i]]);
  }
  return requiredValues;
}

let a = [1, 2, 3];
let queries = [0, 1, 2];
console.log(circularArrayRotation(a, 2, queries));

/*
[ 3, 1, 2 ]
[ 2, 3, 1 ]

*/
