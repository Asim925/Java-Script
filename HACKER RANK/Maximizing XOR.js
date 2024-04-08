function maximizingXor(l, r) {
  let max = 0;
  for (let i = l; i < r; i++)
    for (let j = i; j <= r; j++) {
      if ((i ^ j) > max) max = i ^ j;
    }
  return max;
}

console.log(maximizingXor(5, 6));
