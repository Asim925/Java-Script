const numbers = [1, 2, 3, 4, 1];

let count = countOccurences(numbers, 7);

console.log(count);

// function

function countOccurences(array, searchElement) {
  let output = [];

  for (let element of array) {
    if (element === searchElement) output.push(element);
  }
  console.log(`The number you gave has repeated : "${output.length}" times`);
  if (!array.includes(searchElement)) return "invalid element";
}
