// k: jump unit
function jumpingOnClouds(c, k) {
  let energy = 100;
  //   for (let i = 0; i < c.length; i += k) {
  //     let cloud = c[(i + k) % c.length];
  //     if (cloud === 1) energy -= 2;
  //     energy--;
  //     console.log(cloud);
  //   }

  for (let i = 0; i < c.length; i += k) {
    if (c[i] === 1) energy -= 2;
    energy--;
    //   console.log(energy);
  }
  return energy;
}

let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
console.log(jumpingOnClouds(c, 3));
