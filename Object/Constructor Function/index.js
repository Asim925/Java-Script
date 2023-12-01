// constructor Function

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);

/*

Pascal notation (OneTwoThree....) use hoti hai constructor function main
'new' lagane se aik empty object bane ga jo ke 'Circle(radius)' ko call akre ga apne adar
phir ye this jo hai woh hat kr khud hi property banade ga jaise "radius = radius;"
or phir return kare ga sari "this" wali properties ko

*/
