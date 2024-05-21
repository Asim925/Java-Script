function powerSet(arr) {
  let result = [[]]; // Initialize with an empty set

  for (let i = 0; i < arr.length; i++) {
    let subsets = [];
    for (let j = 0; j < result.length; j++)
      subsets.push(result[j].concat(arr[i])); // adding the value (not changing the actual result[x])
    result = result.concat(subsets);
  }
  console.log(
    "\nAccording to the formula, the length of the power set should be",
    2 ** arr.length,
    ",\nThe Power Set is:"
  );
  return result;
}

// Example usage:
const mySet = [2, 3];
console.log(powerSet(mySet));
