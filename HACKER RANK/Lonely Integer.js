function lonelyinteger(a) {
  a.sort((a, b) => a - b);
  let unique = 0;
  if (a.length <= 1) unique = a[0];
  else
    for (let i = 0; i < a.length; i++)
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] !== a[j]) unique = a[j];
      }

  return unique;
}

let a = [
  34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31,
];
console.log(lonelyinteger(a));
