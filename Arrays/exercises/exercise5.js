const numbers = [56785, 67, 3, 2, 56785];

let count = countOccurences(numbers, 67);

console.log(count);

// function 1

// function countOccurences(array, searchElement) {
//   let output = [];
//   if (!array.includes(searchElement)) return "invalid number";

//   for (let element of array) {
//     if (element === searchElement) output.push(element);
//   }
//   return `The number you gave has repeated : "${output.length}" times`;
// }

// function 2

function countOccurences(array, searchElement) {
  let count = 0;
  for (let element of array) if (element === searchElement) count++;
  return count;
}
