function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = "";
    for (let j = n - 1; j <= 0; j--) spaces -= "";

    let pattern = "";
    for (let j = 1; j <= i; j++) pattern += "#";

    console.log(spaces);
  }
}

staircase(6);
