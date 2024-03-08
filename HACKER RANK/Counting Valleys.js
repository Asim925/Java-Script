function countingValleys(steps, path) {
  let valleyCount = 0;
  let seaLevel = 0;
  let calculator = 0;
  for (let i = 0; i < steps; i++) {
    if (path[0][i] === "U") calculator++;
    if (path[0][i] === "D") calculator--;
    if (calculator < 0 && calculator + 1 === seaLevel) valleyCount++;
    console.log(valleyCount);
  }
}

let path = ["UDDDUDUU"];
console.log(countingValleys(8, path));
