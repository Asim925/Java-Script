// function circularArrayRotation(a, k, queries) {
//   for (let i = 1; i <= k; i++) {
//     let removed = a.pop();
//     a.unshift(removed);
//   }

//   let requiredValues = [];

//   for (let i = 0; i < queries.length; i++) {
//     requiredValues.push(a[queries[i]]);
//   }

//   return requiredValues;
// }

// let a = [1, 2, 3];
// let queries = [0, 1];
// console.log(circularArrayRotation(a, 5, queries));

function circularArrayRotation(a, k, queries) {
  let results = [];
  k = k % a.length;

  for (let i = 0; i < queries.length; i++)
    results.push(a[(queries[i] - k + a.length) % a.length]);

  return results;
}

let a = [1, 2, 3];
let queries = [0, 1];
console.log(circularArrayRotation(a, 5, queries));
