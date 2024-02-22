function viralAdvertising(n) {
  let recipients = 5;
  let totalLikes = 0;

  for (let i = 1; i <= n; i++) {
    let liked = Math.floor(recipients / 2);
    totalLikes += liked;
    recipients = liked * 3;
  }
  return totalLikes;
}

console.log(viralAdvertising(5));
