function countNumbers(numbers) {
  let frequencies = [];

  for (let i = 0; i < numbers.length; i++) {
    let found = false;

    for (let j = 0; j < frequencies.length; j++) {
      if (frequencies[j][0] === numbers[i]) {
        frequencies[j][1]++;
        found = true;
        break;
      }
    }
    if (found === false) frequencies.push([numbers[i], 1]);
  }
  return frequencies;
}

let numbers = [1, 2, 3, 4, 7, 7, 7, 7, 7, 7, 7, 7, 3, 7, 7, 7];
let frequencies = countNumbers(numbers);
console.log(frequencies);
