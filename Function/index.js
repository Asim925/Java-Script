// ====================>   function declaration     <========================//
// >> we can call it before declaring it DUE TO HOISTING ;
// hoisting is a process in which all the functions are declared on the top (auto)

// function walk() {
//   console.log("walk");
// }

// ====================>   function expression   <==========================//

// >> we cant call it after declaring it

// let run = function () {
//   console.log("run");
// };

// ==============================================================================
// without parametes targetting all the elements using arguments

//  ===== dabbu way::

// function sum() {
//   let total = 0;
//   for (let number of arguments) total += number;
//   return total;
// }

// console.log(sum(1, 22, 3, 4, 5));

// ===== easiest way ::
// sare arguments aik array ban jayen ge or phir reduce...

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }
//
// console.log(sum(1, 2, 3, 4, 4, 5));

// ==============================================================================
// REST OPERATOR ...args ;ex

// we add all the prices first by reducing
// then we give discount ,20 * (1 - 0.2) ==> 16 ;=
// total * (1-discount) ;
// total * (100 - discount%)

// function sum(discount, ...prices) {
//   let total = prices.reduce((a, b) => a + b);
//   console.log("your total is : " + total);
//   return "you got 20% discount, now total is : " + total * (1 - discount);
// }

// // 1st parameter is the discount like 0.2 means 20% discount,
// // others are the prices
// console.log(sum(0.2, 2, 3, 4, 4, 5, 2));

// ==============================================================================

// // we have set the default values of rate and year
// function interest(amount, rate = 3.5, year = 5) {
//   return ((amount * rate) / 100) * year;
// }

// console.log(interest(10000));

// =============================================================================

// get (getters) == used to access the functions like properties of an object
// set (setters) == used to change the vaue of the property of an object outside
//.. (na samah aye to chatgpt se pataa kro wohi se hi samjh aya
let person = {
  firstName: "Asim",
  lastName: "Nazeer",

  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(value) {
    let parts = value.split(" ");
    (this.firstName = parts[0]), (this.lastName = parts[1]);
  },
};

person.fullName = "John bro";
console.log(person.fullName);
