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

// let nums = [2, 3, 6, 6, 5];
// console.log(getSecondLargest(nums));

// ============================ VOWELS =========='
// function vowelsAndConsonants(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (
//       s[i] === "a" ||
//       s[i] === "e" ||
//       s[i] === "i" ||
//       s[i] === "o" ||
//       s[i] === "u"
//     )
//       console.log(s[i]);
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (
//       s[i] !== "a" &&
//       s[i] !== "e" &&
//       s[i] !== "i" &&
//       s[i] !== "o" &&
//       s[i] !== "u"
//     )
//       console.log(s[i]);
//   }
// }

// let s = "javascriptloops";
// vowelsAndConsonants(s);

// ================= =================================
// function reverseString(s) {
//   try {
//     console.log(s.split("").reverse().join(""));
//   } catch (error) {
//     console.log(error.message);
//     console.log(s);
//   }
// }

// reverseString(1234);

// ================= =======================================
// function isPositive(a) {
//   try {
//     if (a === 0) throw new Error("Zero Error");
//     if (a < 0) throw new Error("Negative Error");
//     return "YES";
//   } catch (error) {
//     return error.message;
//   }
// }
// console.log(isPositive(-1));

// ================= =======================================
function getMaxLessThanK(n, k) {
  let max = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let result = i & j;
      if (result > max && result < k) max = result;
    }
  }
  return max;
}

// =======================================
// function processData(input) {
//   //Enter your code here
//   let total = 0;

//   let obj = {};
//   let max = 0;
//   for (let val of input) {
//     total += val;
//     obj[val] = (obj[val] || 0) + 1;
//     if (max < obj[val]) max = val;
//   }
//   console.log(total / input.length);
//   input.sort((a, b) => a - b);
//   if (input.length % 2 === 0) {
//     console.log((input[input.length / 2 - 1] + input[input.length / 2]) / 2);
//   } else console.log(input[Math.ceil(input.length / 2)]);

//   console.log(max);
// }

// let input = [
//   64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060,
// ];
// processData(input);
// =====================================================

let arr = [7, 9, 8, 12, 3];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

console.log(arr);
