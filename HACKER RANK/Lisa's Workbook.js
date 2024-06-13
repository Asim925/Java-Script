function workbook(n, k, arr) {
  if (n === 1) return arr[0];
  let count = 0;
  let page = 1;

  for (let i = 0; i < n; i++) {
    for (let problem = 1; problem <= arr[i]; problem++) {
      if (problem !== 1 && problem % k === 1) page++;
      if (page === problem) count++;
    }
    page++;
  }
  return count;
}

let arr = [100];
console.log(workbook(1, 1, arr));
