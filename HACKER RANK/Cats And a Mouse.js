function catAndMouse(x, y, z) {
  let catA = x;
  let catB = y;
  let mouse = z;

  let distanceCatA = Math.abs(mouse - catA);
  let distanceCatB = Math.abs(mouse - catB);

  if (distanceCatA === distanceCatB) return "Mouse C";
  if (distanceCatA < distanceCatB) return "Cat A";
  if (distanceCatA > distanceCatB) return "Cat B";
}

console.log(catAndMouse(1, 2, 3));
