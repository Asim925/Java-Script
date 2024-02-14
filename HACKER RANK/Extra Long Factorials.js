function extraLongFactorials(n) {
  let factorial = BigInt(1);
  for (let i = BigInt(1); i <= BigInt(n); i++) {
    factorial *= i;
  }
  let actual = factorial.toString();
  let act = actual.replace("n", "");

  console.log(act);
}

extraLongFactorials(25);
