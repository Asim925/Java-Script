function gridChallenge(grid) {
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split("").sort();
  }
  for (let i = 0; i < grid[0].length; i++) {
    let column = [];
    for (let j = 0; j < grid.length; j++) {
      column.push(grid[j][i]);
    }
    console.log(column, column.sort());
    if (column.join("") !== column.sort().join("")) return "NO";
  }
  return "YES";
}

let grid = ["db", "ab"];
console.log(gridChallenge(grid));
