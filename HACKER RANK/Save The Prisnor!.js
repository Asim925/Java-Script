function saveThePrisoner(n, m, s) {
  let currentPrisoner = (s + m - 1) % n;
  if (currentPrisoner === 0) {
    currentPrisoner = n;
  }
  return currentPrisoner;
}
console.log(saveThePrisoner(4, 6, 2));
