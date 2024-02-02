let arr = [-3, -52, 1, 0, 5, 4, 65];

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

  console.log("Here is the ratio of Posiives : " + positiveRatio);
  console.log("Here is the ratio of Negaties : " + negativeRatio);
  console.log("Here is the ratio of Zeros : " + zeroesRatio);

  // toFixed(n)  (used to increase or decrease the digits after decimal)
  // return `${positiveRatio} ${negativeRatio} ${zeroesRatio}`;
}

plusMinus(arr);
