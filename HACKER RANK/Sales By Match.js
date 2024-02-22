function sockMerchant(n, ar) {
  ar.sort();
  for (let i = 0; i < n; i++) {
    let filter = ar.filter((n) => n > ar[i]);
    console.log(filter);
  }
}

let ar = [1, 1, 1, 2, 2, 3];
console.log(sockMerchant(6, ar));
