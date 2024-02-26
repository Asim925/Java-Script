// =============== GRADES ==================//

// function getGrade(score) {
//   let grade;
//   if (score > 25 && score <= 30) grade = "A";
//   if (score > 20 && score <= 25) grade = "B";
//   if (score > 15 && score <= 20) grade = "C";
//   if (score > 10 && score <= 15) grade = "D";
//   if (score > 5 && score <= 10) grade = "E";
//   if (score >= 0 && score <= 5) grade = "F";

//   return grade;
// }

// console.log(getGrade(28));

// =============== secondLargest ==================//
function getSecondLargest(nums) {
  let single = nums
    .filter((items, index) => nums.indexOf(items) === index)
    .sort((a, b) => b - a);
  single.shift();
  return single[0];
}

let nums = [2, 3, 6, 6, 5];
console.log(getSecondLargest(nums));
