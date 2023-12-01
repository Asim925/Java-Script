// factory Functions

/* 

function noramaly aisa hota hai
 function name(parameter) {} 

agr object ke andar function likhna ho to direct
name() {}  || name = function()
or ye method kehlaye ga

*/

/* (line: 12) agr yahan me return ke bajaye object ka naam rakh do to return object_name; krna pare ga is liye direct ye karo 
 (line: 13) yahan mere pas parameter or us ki value dono same hain yani "radius: radius;" isliye direct parameter
 (line: 14) ye method banaya hai maine 
 */

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
