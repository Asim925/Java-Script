function fibonacciModified(t1, t2, n) {
  let series = [t1, t2];
  for (let i = 0; i < n; i++)
    series.push(BigInt(series[i]) + BigInt(Math.pow(series[i + 1], 2)));
  //
  return series[n - 1];
}
console.log(fibonacciModified(0, 1, 10));
