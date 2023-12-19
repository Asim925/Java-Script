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

// == Easy way == (finding primitive elements)

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
