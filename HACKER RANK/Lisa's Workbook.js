function workbook(n, k, arr) {
  let count = 0;
  let page = 1;

  for (let i = 0; i < n; i++) {
    for (let problem = 1; problem <= arr[i]; problem++) {
      if (
        problem === k * 1 + 1 ||
        problem === k * 2 + 1 ||
        problem === k * 3 + 1 ||
        problem === k * 4 + 1 ||
        problem === k * 5 + 1 ||
        problem === k * 6 + 1 ||
        problem === k * 7 + 1 ||
        problem === k * 8 + 1 ||
        problem === k * 9 + 1 ||
        problem === k * 10 + 1 ||
        problem === k * 11 + 1 ||
        problem === k * 12 + 1 ||
        problem === k * 13 + 1 ||
        problem === k * 14 + 1 ||
        problem === k * 15 + 1 ||
        problem === k * 16 + 1 ||
        problem === k * 17 + 1 ||
        problem === k * 18 + 1 ||
        problem === k * 19 + 1 ||
        problem === k * 20 + 1 ||
        problem === k * 21 + 1 ||
        problem === k * 22 + 1 ||
        problem === k * 23 + 1 ||
        problem === k * 24 + 1
      )
        page++;
      if (page === problem) count++;
      console.log(page, problem);
    }
    page++;
  }
  return count;
}

let arr = [4, 2, 6, 1, 10];
console.log(workbook(5, 3, arr));
