//  SASTA hacker

// function jumpingOnClouds(c, k) {
//   let n = c.length;
//   let e = 100;
//   for (let i = 0; i < n; i += k) {
//     let cloud = c[(i + k) % n];
//     if (c[n - 1] === cloud) cloud = c[0];

//     if (cloud === 1) e -= 2;
//     e--;
//   }
//   return e;
// }

// ======= SHIEKH SAHAB++=

function jumpingOnClouds(c, k) {
  let n = c.length;
  let e = 100;
  let i = 0;
  do {
    let cloud = c[i];
    if (cloud === 1) e -= 2;
    e--;
    i = (i + k) % n;
  } while (i !== 0);
  return e;
}

let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
console.log(jumpingOnClouds(c, 3));
