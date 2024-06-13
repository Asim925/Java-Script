function fibonacciModified(t1, t2, n) {
  let series = [BigInt(t1), BigInt(t2)];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 2] + series[i - 1] ** BigInt(2));
  }
  return series[n - 1];
}

console.log(fibonacciModified(0, 1, 10));
