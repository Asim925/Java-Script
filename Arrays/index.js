// const number = [3, 4];

// // adding at the end
// number.push(5, 6);

// // adding at the start
// number.unshift(1, 2);

// // deleting,  adding , anywhere
// //is ke parameters se values dekh kr rakho
// number.splice(2, 0, "a", "b");

// console.log(number);

// ==============================================================

// const number = [1, 2, 3, 2, 4];

// // check the index of the element at the start
// console.log("index of 2 is : " + number.indexOf(2));

// // if 'a' is not element of array then result : -1
// // -1 ka mtlb 'not present'
// console.log("a is the elemnt of array or not : " + number.indexOf("a"));

// // check the index of the element at the last
// console.log("last index of 2 is : " + number.lastIndexOf(2));

// // checking if the element is present in the array or not
// console.log(number.indexOf(1) !== -1);
// //"aise bhi check kr sakte hai :-"
// console.log(number.includes(9));
// // kia 1 ka index -1 hai ya nahi
// // if present :true
// // if not present :false

// //agr search start kisi or index se krna hai to (jaise 3 se)
// console.log(number.indexOf(2, 3));

// ========================================================================================
// const details = [
//   { id: 1, name: "a" }, //element 1 (0 index)
//   { id: 2, name: "b" }, //element 2 (1 index)
// ];

// ===================================
// == Hard way == (finding primitive elements)

// const detail = details.find(function (details) {
//   return details.name === "a"; // true or not
// });
//
// console.log(detail);

// == Easy way == (finding primitive elements) => (by arrow)

// const detail = details.find((details) => details.name === "a");
// console.log(detail);

// ===================================

// const detailsIndex = details.findIndex(function (details) {
//   return details.name === "b"; // true or not
// });
//
// console.log(detailsIndex);

// ========================================================================================
// DELETING THE ELEMENTS

// const group = [1, 2, 3, 4];

// === from end

// let last = group.pop(); // push ka ulta
// console.log(group);
// console.log("deleted number is : " + last);
//
// === from start

// let first = group.shift(); // unshift ka ulta
// console.log(group);
// console.log("deleted number is : " + first);

// == from anywhere

// let anywhere = group.splice(2, 2); // 2nd index se start ho kr 2 or delete honge
// console.log(group);
// console.log(anywhere);

// ========================================================================================
//REMOVING ALL ELEMENTS OF THE ARRAY

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// solution 1
// numbers= []; // !important
// console.log(number);

// solution 2
// numbers.length = 0; // !important
// console.log(numbers);

// solution 3
// numbers.splice(0, numbers.length);
// console.log(numbers);

// solution 4
// while (numbers.length > 0) numbers.pop();
// console.log(numbers);

// ========================================================================================
// slicing or combining the array with HARD MEHTOD: PRIMITIVE TYPE

// const first = [1, 2, 3];
// const last = [4, 5, 6];

// let combined = first.concat(last); // combine first with last
// let sliced = combined.slice(3);
// // combined.slice(); se poora array wapis
// // combined.slice(3, 5); se 3rd element se 5th tak print hoga

// console.log("first array : " + first);
// console.log("last array : " + last);
// console.log("====>");
// console.log("combined array : " + combined);
// console.log("====>");
// console.log("slicing the combined one : " + sliced);

// ========================================================================================
// slicing and combining the array using easy (spread) method : PRIMITIVE TYPE

// let first = [1, 2];
// let last = [3, 4];

// // let combined = first.concat(last);
// let combined = [...first, ...last];
// console.log(combined);

// // combined.slice();
// let copy = [...combined];
// console.log(copy);

// ========================================================================================
// looping array

// const numbers = ["a", "b", "c", "d"];

// // == WAY 1 ==>
// for (let number of numbers) {
//   console.log("Element : " + number);
//   console.log("Index : " + numbers.indexOf(number));
//   console.log("===");
// }

// // == WAY 2 ==>
// numbers.forEach((number, index) =>
//   console.log(
//     "element : " + number,
//     "||===>" + " " + "index of the element is : " + index
//   )
// );

// ========================================================================================
// Joining elements of the Array

// let array = [1, 2, 3, 4];
//
// let joined = array.join(" , ");
// console.log(joined);

let message = "papa dabbu hain";
let parts = message.split(" ");
console.log(parts);

let combined = parts.join("-");
console.log(combined);
