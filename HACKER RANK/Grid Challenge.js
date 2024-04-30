function gridChallenge(grid) {
  for (let i = 0; i < grid.length; i++) {
    let column = [];
    for (let row of grid) column.push(row[i]);
    if (column.join("") !== column.sort().join("")) return "NO";
  }
  return "YES";
}

let grid = ["ab", "ca"];
console.log(gridChallenge(grid));
