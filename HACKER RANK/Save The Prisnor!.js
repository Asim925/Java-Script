function saveThePrisoner(n, m, s) {
  // s : starting seat
  // n : number of prisnors
  // m : candies
  let currentPrisoner = (s + m - 1) % n;
  if (currentPrisoner === 0) {
    currentPrisoner = n;
  }
  return currentPrisoner;
}
console.log(saveThePrisoner(5, 3, 4));
//  shru 4 se hongi mtlb pehli candy 4th prisnor ki
