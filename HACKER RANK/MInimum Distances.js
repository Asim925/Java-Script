function minimumDistances(a) {
  let minimmumDistance = Infinity;

  for (let i = Math.min(...a); i <= Math.max(...a); i++) {
    if (a.indexOf(i) === a.lastIndexOf(i)) continue;
    let distance = Math.abs(a.indexOf(i) - a.lastIndexOf(i));
    if (distance < minimmumDistance) minimmumDistance = distance;
  }

  if (minimmumDistance === Infinity) return -1;
  return minimmumDistance;
}

let a = [3, 2, 1, 2, 3];
console.log(minimumDistances(a));
