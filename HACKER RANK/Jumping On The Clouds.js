function jumpingOnClouds(c) {
  let jump = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 0) {
      jump++;
      i = i + 1;
      continue;
    } else if (c[i + 1] === 0) jump++;
  }
  return jump;
}

let c = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
