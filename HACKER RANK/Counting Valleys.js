function countingValleys(steps, path) {
  let valleyCount = 0;
  let calculator = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") calculator++;
    if (path[i] === "D") calculator--;
    if (calculator === 0 && path[i] === "U") valleyCount++;
  }
  return valleyCount;
}

let path = ["U", "D", "D", "D", "U", "D", "U", "U"];
console.log(countingValleys(8, path));
