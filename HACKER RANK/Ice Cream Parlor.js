function icecreamParlor(m, arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === m) return [i + 1, j + 1];
}

let arr = [2, 2, 4, 3];
console.log(icecreamParlor(4, arr));
