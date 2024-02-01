let arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let n = arr.length;

  // lengths of the +ives & -ives
  let positives = arr.filter((value) => value > 0).length;
  let zeroes = arr.filter((value) => value === 0).length;
  let negatives = arr.filter((value) => value < 0).length;

  // Ratios
  let positiveRatio = (positives / n).toFixed(6);
  let negativeRatio = (negatives / n).toFixed(6);
  let zeroesRatio = (zeroes / n).toFixed(6);

  // toFixed(n)  (used to increase or decrease the digits after decimal)
  return `${positiveRatio} ${negativeRatio} ${zeroesRatio}`;
}

console.log(plusMinus(arr));
