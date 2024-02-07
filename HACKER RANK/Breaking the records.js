function breakingRecords(scores) {
  let maximum = 0;
  let minimum = 0;
  let max = 0; //counters
  let min = 0;
  for (let i = 0; i <= scores.length; i++) {
    for (let current of scores) {
      //   if (scores[i] > current) {
      // max++;
      console.log(current);
      //   }
    }
  }
  //   return max;
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores));
