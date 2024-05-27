function cavityMap(grid) {
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
      grid[i] = grid[i].split("");
      if (
        grid[i][j] > grid[i][j + 1] &&
        grid[i][j] > grid[i][j - 1] &&
        grid[i][j] > grid[i - 1][j] &&
        grid[i][j] > grid[i + 1][j]
      )
        grid[i].splice(j, 1, "X");
      grid[i] = grid[i].join("");
    }
  }
  return grid;
}

let grid = ["1112", "1912", "1892", "1234"];
console.log(cavityMap(grid));
