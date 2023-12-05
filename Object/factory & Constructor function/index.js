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

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}
// // const another = new Circle(1);
// /*is ki jaga hum do or ceezen bhi kr sakte hain call krne keliye jo easy hain */
////////////////  koi aik chalao neche
// Circle.call({}, 1);
// Circle.apply({}, [1]);
