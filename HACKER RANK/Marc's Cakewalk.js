function marcsCakewalk(calorie) {
  let calories = calorie.sort((a, b) => b - a);
  let minimum = 0;
  for (let i = 0; i < calories.length; i++)
    for (let j = 0; j < calories.length; j++) {
      if (i === j) {
        let formula = 2 ** j * calories[i];
        minimum += formula;
      }
    }
  return minimum;
}

let calorie = [2, 3, 1];
console.log(marcsCakewalk(calorie));
