function hurdleRace(k, height) {
  let initialHeight = k;
  let maxHeight = Math.max(...height);
  let doses = maxHeight - initialHeight;

  if (doses < 0) return 0;
  return doses;
}

let height = [1, 6, 3, 5, 2];
console.log(hurdleRace(4, height));
