function lonelyinteger(a) {
  let unique = 0;
  for (let i = 0; i < a.length; i++)
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) unique = a[i];
  return unique;
}

let a = [1, 12, 1, 2, 12];
console.log(lonelyinteger(a));
