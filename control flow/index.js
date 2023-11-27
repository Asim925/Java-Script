// if-else statements
/* conditions are 
if time is between 6 and 12 , then print Good morning! 
if time is between 12 and 6 , them print Good afternoon!
else good evening*/

// if-else

/*let hour = 3;

if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 6) console.log("Good Afternoon");
else console.log("Good Evening"); */

// ========================= //

// SWITCH statements

/* let user = "guest";

switch (user) {
  case "guest":
    console.log("guest - user");
    break;

  case "member":
    console.log("Member");
    break;

  case "head":
    console.log("Head");
    break;

  default:
    console.log("unknown user");
} */

// ========================= //

// FOR lOOP
// .....for(initialize , condition , increment or decrement operator )....

/*let i;
for (i = 0; i < 5; i++) {
  console.log("Hello");
}*/

// for printing odd values by looping
/* let i;
for (i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);  ,,// agr i ko 2 se divide krne pr remainder na bache to woh odd numbers
} */

// ========================= //
// WHILE loop
// { while(condition) <== SYNTAX }
/* let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
} */

// ========================= //
// do-while :-

// let i = 7;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// ========================= //
// Infinite loop :-

/* ..loop infinite tb hota ai jab condition poori
 hi na horahi ho jaise i is less than 5 but 
 no increment or any other operration is done ..*/

/* let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
} */

// ========================= //
// for-in loop :-

/*is main ye hai ke jab ap ko value nahi balke 
property print karwani ho to for in use karo*/

// NO. 1

// const person = {
//   name: ": Asim",
//   age: 15,
// };

// for (let property in person) console.log(property, person[property]);

// NO. 2

// const colors = ["red", "pink", "black"];
// for (let index in colors) console.log(index, colors[index]);

// ========================= //
// for-of loop :-
// used for arrays mostly to directly print each item on everyline

// const colors = ["red", "pink", "black"];
// for (let color of colors) console.log(color);

// ========================= //

// Break
// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;
//   console.log(i);
//   i++;
// }

// continue
// let i = 0;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// ========================= //
// EXERCISE 1;-

// function max(a, b) {
//   return a > b ? a : b;
// }

// let number = max(3, 2);
// console.log(number);

// ========================= //
// EXERCISE 2;-

// function isLandscape(width, height) {
//   return width > height;
// }

// let screen = isLandscape(10, 5);
// console.log(screen);

// ========================= //
// EXERCISE 3;-
// const output = fizzBuzz(7);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a Number";
//   // return NaN;

//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 3 === 0) return "Fizz";
//   if (input % 5 === 0) return "Buzz";
//   if (input % 3 !== 0 && input % 5 !== 0)
//     return "number cant be divided by 3 and 5";

//   // return input;
// }

// ========================= //
// EXERCISE 4;-
checkSpeed(129);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("OK");
    return; //agr condition true hai to ok ke bad khallas agr nahi hai to if ke bad wala code run hoga
  }

  // formula banaya maine points ka ... or Math.floor se decimal value round off hoti hai
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) console.log("license suspended");
  else console.log("points", points);
}
