function jumpingOnClouds(c, k) {
  let n = c.length;
  let e = 100;
  for (let i = 0; i < n; i += k) {
    let cloud = c[(i + k) % n];
    if (cloud === 1) e -= 2;
    e--;
  }
  return e;
}

let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
console.log(jumpingOnClouds(c, 3));
