//================================= FARIGH METHOD ======================================= //
/* function migratoryBirds(arr) {
  // counters
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  //changing the values of counters respectively
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) one++;
    if (arr[i] === 2) two++;
    if (arr[i] === 3) three++;
    if (arr[i] === 4) four++;
    if (arr[i] === 5) five++;
  }

  // checking that which value is supposed to be the "max"
  let max = Math.max(three, two, three, four, five);

  // filtering all the values to the array
  let filterOne = 0;
  let filterTwo = 0;
  let filterThree = 0;
  let filterFour = 0;
  let filterFive = 0;

  if (max === one) filterOne = arr.filter((one) => one === 1);
  if (max === two) filterTwo = arr.filter((two) => two === 2);
  if (max === three) filterThree = arr.filter((three) => three === 3);
  if (max === four) filterFour = arr.filter((four) => four === 4);
  if (max === five) filterFive = arr.filter((five) => five === 5);

  // Checking if one or more of the filters is/are array
  let filterOneIsArray = Array.isArray(filterOne);
  let filterTwoIsArray = Array.isArray(filterTwo);
  let filterThreeIsArray = Array.isArray(filterThree);
  let filterFourIsArray = Array.isArray(filterFour);
  let filterFiveIsArray = Array.isArray(filterFive);

  let f = []; //  frequencies
  // if the filter is array, then push its fist element to the "f" array
  if (filterOneIsArray) f.push(filterOne[0]);
  if (filterTwoIsArray) f.push(filterTwo[0]);
  if (filterThreeIsArray) f.push(filterThree[0]);
  if (filterFourIsArray) f.push(filterFour[0]);
  if (filterFiveIsArray) f.push(filterFive[0]);

  f.sort((a, b) => a - b); // sorting in ascending order
  let lowIDMax = f[0]; // setting the lowIDMax to the most lowest element of "f" array
  return lowIDMax;
}

let arr = [1, 4, 4, 4, 5, 3];
console.log(migratoryBirds(arr));
 */

//=================================  GOOD METHOD ======================================= //

function migratoryBirds(arr) {
  let counter = {};
  let maxCount = 0;
  let mostCommonBird = 0;

  for (let bird of arr) {
    counter[bird] = (counter[bird] || 0) + 1; // birds are the keys of objects

    // checking the lowest Type's occurences
    if (
      // if key ki value of the object is > max-count ||
      counter[bird] > maxCount || // if key ki value  === max count && if bird < most common bird
      (counter[bird] === maxCount && bird < mostCommonBird)
    ) {
      maxCount = counter[bird];
      mostCommonBird = bird;
    }
  }

  console.log(mostCommonBird);
}

let arr = [1, 2, 3, 4, 1, 2, 2];
migratoryBirds(arr);
