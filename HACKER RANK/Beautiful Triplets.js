function beautifulTriplets(d, arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++)
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] !== d) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[k] - arr[j] !== d) continue;
        count++;
      }
    }

  return count;
}

let arr = [2, 2, 3, 4, 5];
console.log(beautifulTriplets(1, arr));
