function breakingRecords(scores) {
  let result = [];
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
      maxCount++;
    }
    if (scores[i] < min) {
      min = scores[i];
      minCount++;
    }
  }
  result.push(maxCount, minCount);
  return result;
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores));
