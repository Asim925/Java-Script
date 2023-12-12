// FACTORY FUNCTION

/* 
function noramaly aisa hota hai
 function name(parameter) {} 

agr object ke andar function likhna ho to direct
name() {}  || name = function()
or ye method kehlaye ga
*/

/* (line: 12) agr yahan me return ke bajaye object ka naam rakh do to return object_name; krna pare ga is liye direct ye karo 
 (line: 13) yahan mere pas parameter or us ki value dono same hain yani "radius: radius;" isliye direct parameter ki value
 (line: 14) ye method banaya hai maine 
 */

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// ========================================================================================
// CONSTRUCTOR FUNCTION

/* Pascal notation (OneTwoThree....) use hoti hai constructor function main
'new' lagane se aik empty object bane ga jo ke 'Circle(radius)' ko call akre ga apne adar
phir ye 'this' jo hai khud hi property banade ga jaise "radius = radius;"
or phir return kare ga sari "this" wali properties ko 
AGR in ko dekhna ho to name.constructor karo console pr
*/

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     console.log("draw");
//   };
// }
// // const another = new Circle(1);
// /*is ki jaga hum do or ceezen bhi kr sakte hain call krne keliye jo easy hain */

////////////////  koi aik chalao neche
// Circle.call({}, 1);
// Circle.apply({}, [1]);

// ========================================================================================
// let x = 10;
// let y = x;

// x = 20;
// console.log(y);

// =========

// let x = { value: 10 };
// let y = x;

// x.value = 20;
// console.log(y);

// ========================================================================================
// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };
// console.log(circle);
// for (let key in circle) console.log(key, circle[key]); // for in loop

// for (let key of Object.keys(circle)) console.log(key); // circle (jo object hai us ki keys print horahi)

// for (let entry of Object.entries(circle)) console.log(entry); // ye krne se har value array ka element ban jati hai (html pr dekh)

// if ("radius" in circle) console.log("yes"); // agr radius name ki string circle (object) main hoi to yes show hoga

// == Another object
// const another = Object.assign({}, circle);
// console.log(another);

// const another = { ...circle }; // copies the keys of the object (...name)
// console.log(another);

/* escape notations se hm kuch special characters waghaia show krwa sakte hain jaie ye : "    by using : \"  */
// const message = "my name\n is Asim";
// console.log(message);
// console.log(message.length);
// console.log(message[5]);
// console.log(message.startsWith("my name")); // letters bhi use kr sakte hai
// console.log(message.endsWith("Asim")); // same
// console.log(message.includes("is"));
// console.log(message.includes("MY"));
// console.log(message.indexOf("n"));
// console.log(message.replace("my", "second"));
// console.log(message.toUpperCase());
// console.log(message.trim()); // html pr dekho to faigh sides pr spaces remove hojayegi (trimLeft kr lo yr trimRight)
// console.log(message.split(" "));

/* back-ticks `` lagane se hum personalized string bna sakte hain
 jabke normal tarike se lambi hoti hai escape notation  "THAT'S HOW IT IS"  */

// const Name = "actiure";
// // 1+9 krne ka maqsad ${} ke maqsad ko samjhana hai
// const another = `Hey you ${Name} ${1 + 9},
// kaise ho
// kya ap ye prh rahe hain
// abhi bhi 'literally'
// ja na bhai `;

// console.log(another);

// ========================================================================================

const date1 = new Date(); // automatic
console.log(date1);

//////////// ==>> alag se
console.log(date1.toDateString()); // date
console.log(date1.toTimeString()); // time
console.log(date1.toISOString()); // date time

date1.setFullYear(2050); // change krne keliye
console.log(date1);

// const date2 = new Date(2023, 11, 11, 9); // descriptions se dekh kr khud likhi
// console.log(date2);
//
// const date3 = new Date("January 11 2018  5:00 ");
// console.log(date3);
//
