function equalizeArray(arr) {
  let obj = {};
  let max = 0;
  for (let key of arr) {
    obj[key] = (obj[key] || 0) + 1;
    if (obj[key] > max) max = obj[key];
  }
  return arr.length - max;
}

let arr = [2, 2, 2, 3, 1];
console.log(equalizeArray(arr));
