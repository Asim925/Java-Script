function sockMerchant(n, ar) {
  let pairCount = 0;
  for (let i = 1; i <= n; i++) {
    let filtered = ar.filter((num) => num === ar[i]); // array of same numbers
    if (filtered.length / 2 === 0) pairCount++;
    console.log(filtered.length);
    // if (filtered.length % 2 === 1) pairCount++;/
  }
  //   return pairCount;//
}

let ar = [1, 1, 2, 2];
console.log(sockMerchant(4, ar));
