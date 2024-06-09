function sansaXor(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++)
    for (let j = i; j < arr.length; j++) {
      let part = arr.slice(i, j + 1);
      if (part.length === 1) results.push(part[0]);
      else results.push(part.reduce((a, b) => a ^ b));
    }

  return results.reduce((a, b) => a ^ b);
}

let arr = [4, 5, 7, 5];
console.log(sansaXor(arr));
