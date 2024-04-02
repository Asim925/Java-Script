function workbook(n, k, arr) {
  let count = 0;
  let page = 1;

  for (let i = 0; i < n; i++) {
    for (let problem = 1; problem <= arr[i]; problem++) {
      if (problem % (k + 1) === 0) page++;
      if (page === problem) count++;
    }
    page++;
  }
  return count;
}

let arr = [4, 2, 6, 1, 10];
console.log(workbook(5, 3, arr));
