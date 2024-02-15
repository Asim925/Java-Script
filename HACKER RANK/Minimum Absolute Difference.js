function minimumAbsoluteDifference(arr) {
  arr.sort((a, b) => a - b); // Sort the array in ascending order
  let minDifference = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const currentDifference = Math.abs(arr[i] - arr[i + 1]);
    minDifference = Math.min(minDifference, currentDifference);
  }

  return minDifference;
}

let arr = [3, -7, 0];
console.log(minimumAbsoluteDifference(arr)); // Output: 3
